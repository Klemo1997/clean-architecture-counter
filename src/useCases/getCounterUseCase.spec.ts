import { CounterStore } from "../domain/counterStore";
import { getCounterUseCase } from "./getCounterUseCase";

describe('getCounterUseCase', () => {
    const storeMock = {
        loadInitialCounter: jest.fn()
    } as unknown as CounterStore

    it('calls store loader', () => {
        getCounterUseCase(storeMock)
        expect(storeMock.loadInitialCounter).toHaveBeenCalled()
    });
})