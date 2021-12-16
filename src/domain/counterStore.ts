import type {Counter} from './counterEntity'

export interface CounterStore {
    // State
    counter: Optional<Counter>
    isLoading: boolean
    isUpdating: boolean

    // Actions
    loadInitialCounter(): Promise<Counter>
    setCounter(counter: Counter): void
    updateCounter(counter: Counter): Promise<Optional<Counter>>
}