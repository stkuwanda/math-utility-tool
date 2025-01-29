import { describe, it } from 'node:test';
import assert from 'node:assert';
import { add, multiply } from '../index.js';

describe('Math Utilities Test Suite: add', () => {
	it('Should add two integers', () => {
		assert.strictEqual(add(2, 5), 7);
	});

	it("Should throw an error if we don't provide a valid number", () => {
		assert.throws(() => add('1', 2), /^Error: Please provide a valid number.$/);
	});
});

describe('Math Utilities Test Suite: multiply', () => {
	it('Should multiply two integers', () => {
		assert.strictEqual(multiply(10, 2), 20);
	});
});
