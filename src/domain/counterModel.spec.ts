import {create, decrement, increment} from "./counterModel";

describe('create', () => {
    it('creates counter with given value', () => {
        expect(create(1).value).toBe(1)
    });

    it('creates counter with another value', () => {
        expect(create(2).value).toBe(2)
    });
})

describe('decrement', () => {
    it('does not mutate counter instance', () => {
        const counter = create(1)

        decrement(counter)

        expect(counter.value).toBe(1)
    });

    it('decreases value of counter by 1', () => {
        const counter = create(1)

        expect(decrement(counter).value).toBe(0)
    });

    it('decreases another value by 1', () => {
        const counter = create(5)

        expect(decrement(counter).value).toBe(4)
    });

    it('does not decrement when counter value is zero', () => {
        const counter = create(0)

        expect(decrement(counter).value).toBe(0)
    });
})

describe('increment', () => {
    it('does not mutate counter instance', () => {
        const counter = create(1)

        increment(counter)

        expect(counter.value).toBe(1)
    });

    it('increases value of counter by 1', () => {
        const counter = create(1)

        expect(increment(counter).value).toBe(2)
    });

    it('decreases another value by 1', () => {
        const counter = create(5)

        expect(increment(counter).value).toBe(6)
    });
})