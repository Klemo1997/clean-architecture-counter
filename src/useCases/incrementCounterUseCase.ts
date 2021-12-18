import type {CounterStore} from "../domain/counterStore";
import {increment} from "../domain/counterModel";
import {updateCounterUseCase} from "./updateCouterUseCase";

type IncrementCounterStore = Pick<CounterStore, 'counter' | 'setCounter' | 'updateCounter'>

const incrementCounterUseCase = (store: IncrementCounterStore) =>
    updateCounterUseCase(store, increment)

export { incrementCounterUseCase }