import { add, multiply } from '../index.js';

describe('Math Utilities Test Suite: add', () => {
	it('Should add two integers', () => {
		expect(add(2, 5)).toBe(7);
	});
});

describe('Math Utilities Test Suite: multiply', () => {
	it('Should multiply two integers', () => {
		expect(multiply(10, 2)).toBe(20);
	});
});
