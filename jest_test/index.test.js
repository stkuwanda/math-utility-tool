import { add, multiply } from '../index.js';

describe('Math Utilities Test Suite: add', () => {
	it('Should add two integers', () => {
		expect(add(2, 5)).toBe(7);
	});

	it("Should throw an error if we don't provide a valid number", () => {
		expect(() => add('1', 2)).toThrow('Please provide a valid number.');
	});
});

describe('Math Utilities Test Suite: multiply', () => {
	it('Should multiply two integers', () => {
		expect(multiply(10, 2)).toBe(20);
	});
});
