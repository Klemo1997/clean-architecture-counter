
import type {CounterStore} from "../domain/counterStore";
import {Counter} from "../domain/counterEntity";

type UpdateCounterStore = Pick<CounterStore, 'counter' | 'setCounter' | 'updateCounter'>

type CounterUpdater = (counter: Counter) => Counter

const updateCounterUseCase = (store: UpdateCounterStore, updater: CounterUpdater) => {
    if (!store.counter) {
        return;
    }
    const updatedCounter = updater(store.counter)

    store.setCounter(updatedCounter)
    store.updateCounter(updatedCounter)
}

export { updateCounterUseCase }
export type { UpdateCounterStore }