import { decrement } from "../domain/counterModel";
import { UpdateCounterStore, updateCounterUseCase } from "./updateCouterUseCase";

const decrementCounterUseCase = (store: UpdateCounterStore) =>
    updateCounterUseCase(store, decrement)

export { decrementCounterUseCase }