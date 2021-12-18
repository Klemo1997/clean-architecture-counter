import type {CounterStore} from "../domain/counterStore";
import { decrement } from "../domain/counterModel";
import {updateCounterUseCase} from "./updateCouterUseCase";

type DecrementCounterStore = Pick<CounterStore, 'counter' | 'setCounter' | 'updateCounter'>

const decrementCounterUseCase = (store: DecrementCounterStore) =>
    updateCounterUseCase(store, decrement)

export { decrementCounterUseCase }