// Functions that calls itself in specified conditions known as recursions
// Two types parametrized and functional recursion.
// Functional that returns result.
// Parametrized that generally don't return anything.

// Problem - 1

// Count Digits using Recursion.

function digit(n, count = 0) {
	if (n === 0) {
		return count;
	}
	n = Math.floor(n / 10);
	return digit(n, count + 1);
}

console.log(digit(12345));
