import { increment } from "../domain/counterModel";
import { UpdateCounterStore, updateCounterUseCase } from "./updateCouterUseCase";

const incrementCounterUseCase = (store: UpdateCounterStore) =>
    updateCounterUseCase(store, increment)

export { incrementCounterUseCase }