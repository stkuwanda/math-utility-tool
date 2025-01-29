function add(num1, num2) {
	if (typeof num1 !== 'number' || typeof num2 !== 'number') {
		throw new Error('Please provide a valid number.');
	}
	
	return num1 + num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function minus(num1, num2) {
	return num1 - num2;
}

export { add, multiply, minus }; // named exports
