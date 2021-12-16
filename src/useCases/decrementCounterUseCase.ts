import type {CounterStore} from "../domain/counterStore";
import { decrement } from "../domain/counterModel";

type DecrementCounterStore = Pick<CounterStore, 'counter' | 'setCounter' | 'updateCounter'>

const decrementCounterUseCase = (store: DecrementCounterStore) => {
    if (!store.counter) {
        return;
    }
    const updatedCounter = decrement(store.counter)

    store.setCounter(updatedCounter)
    store.updateCounter(updatedCounter)
}

export { decrementCounterUseCase }