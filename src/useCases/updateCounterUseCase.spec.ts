import { updateCounterUseCase } from "./updateCouterUseCase";
import { create } from "../domain/counterModel";

describe('incrementCounterUseCase', () => {
    const incrementStore = {
        counter: undefined,
        setCounter: jest.fn(),
        updateCounter: jest.fn(),
    }

    const counterUpdaterMock = jest.fn()

    beforeEach(() => {
        incrementStore.setCounter.mockReset()
        incrementStore.updateCounter.mockReset()
        counterUpdaterMock.mockReset()
    })

    it('does not call setCounter if counter is initially not defined', () => {
        updateCounterUseCase(incrementStore, counterUpdaterMock)

        expect(incrementStore.counter).not.toBeDefined()
        expect(incrementStore.setCounter).not.toHaveBeenCalled()
        expect(incrementStore.updateCounter).not.toHaveBeenCalled()
    });

    it('calls counterUpdater with given mock', () => {
        const counter = create(1)

        updateCounterUseCase(
            {
                ...incrementStore,
                counter
            },
            counterUpdaterMock
        )

        expect(counterUpdaterMock).toHaveBeenCalledWith(counter)
    });

    it('calls setCounter and updateCounter with incremented counter when counter is present', () => {
        const counter = create(123)
        counterUpdaterMock.mockReturnValue(counter)

        updateCounterUseCase(
            {
            ...incrementStore,
            counter: create(1)
            },
            counterUpdaterMock
        )

        expect(incrementStore.setCounter).toHaveBeenCalledWith(counter)
        expect(incrementStore.updateCounter).toHaveBeenCalledWith(counter)
    });
})