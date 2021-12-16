import { incrementCounterUseCase } from "./incrementCounterUseCase";
import { create } from "../domain/counterModel";

describe('incrementCounterUseCase', () => {
    const incrementStore = {
        counter: undefined,
        setCounter: jest.fn(),
        updateCounter: jest.fn(),
    }

    it('does not call setCounter if counter is initially not defined', () => {
        incrementCounterUseCase(incrementStore)

        expect(incrementStore.counter).not.toBeDefined()
        expect(incrementStore.setCounter).not.toHaveBeenCalled()
        expect(incrementStore.updateCounter).not.toHaveBeenCalled()
    });

    it('calls setCounter and updateCounter with incremented counter when counter is present', () => {
        incrementCounterUseCase({
            ...incrementStore,
            counter: create(1)
        })

        expect(incrementStore.setCounter).toHaveBeenCalledWith(create(2))
        expect(incrementStore.updateCounter).toHaveBeenCalledWith(create(2))
    });
})