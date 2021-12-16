import {create} from "./counterModel";

describe('create', () => {
    it('creates counter with given value', () => {
        expect(create(1).value).toBe(1)
    });

    it('creates counter with another value', () => {
        expect(create(2).value).toBe(2)
    });
})