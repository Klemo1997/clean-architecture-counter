import type {CounterStore} from "../domain/counterStore";
import {increment} from "../domain/counterModel";

type IncrementCounterStore = Pick<CounterStore, 'counter' | 'setCounter' | 'updateCounter'>

const incrementCounterUseCase = (store: IncrementCounterStore) => {
    if (!store.counter) {
        return;
    }
    const updatedCounter = increment(store.counter)

    store.setCounter(updatedCounter)
    store.updateCounter(updatedCounter)
}

export { incrementCounterUseCase }