import { decrementCounterUseCase } from "./decrementCounterUseCase";
import { create } from "../domain/counterModel";

describe('decrementCounterUseCase', () => {
    const decrementStore = {
        counter: undefined,
        setCounter: jest.fn(),
        updateCounter: jest.fn(),
    }

    it('does not call setCounter if counter is initially not defined', () => {
        decrementCounterUseCase(decrementStore)

        expect(decrementStore.counter).not.toBeDefined()
        expect(decrementStore.setCounter).not.toHaveBeenCalled()
        expect(decrementStore.updateCounter).not.toHaveBeenCalled()
    });

    it('calls setCounter and updateCounter with decremented counter when counter is present', () => {
        decrementCounterUseCase({
            ...decrementStore,
            counter: create(1)
        })

        expect(decrementStore.setCounter).toHaveBeenCalledWith(create(0))
        expect(decrementStore.updateCounter).toHaveBeenCalledWith(create(0))
    });
})