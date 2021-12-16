import type {CounterStore} from "../domain/counterStore";
import {increment} from "../domain/counterModel";

type IncrementCounterStore = Pick<CounterStore, 'counter' | 'setCounter' | 'updateCounter'>

const incrementCounterUseCase = (store: IncrementCounterStore) => {
    const updatedCounter = store.counter
        ? increment(store.counter)
        : store.counter

    if (updatedCounter) {
        store.setCounter(updatedCounter)
        store.updateCounter(updatedCounter)
    }
}

export { incrementCounterUseCase }