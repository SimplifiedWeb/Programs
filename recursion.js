// Functions that calls itself in specified conditions known as recursions
// Two types parametrized and functional recursion.
// Functional that returns result.
// Parametrized that generally don't return anything.

// ================ Problem 1 Start ================================
// Count Digits using Recursion.
function digit(n, count = 0) {
	if (n === 0) {
		return count;
	}
	n = Math.floor(n / 10);
	return digit(n, count + 1);
}

// console.log(digit(12345));
// ================ Problem 1 End ================================

// ================ Problem 2 Start ================================
// Sum of Digits using Recursion.
function helper(n, sum = 0) {
	if (n === 0) {
		return sum;
	}
	sum = sum + (n % 10);

	n = Math.floor(n / 10);

	return helper(n, sum);
}

function sumOfDigits(n) {
	// using helper function to make clean, readable and understandable format
	return helper(n);
}
// let res = sumOfDigits(12345);
// console.log(res);
// ================ Problem 2 End ================================

// ================ Problem 3 start ================================
// Reverse a number using Recursion.
function reversedFunction(n, rev = 0) {
	if (n === 0) {
		return rev;
	}
	rev = rev * 10 + (n % 10);
	n = Math.floor(n / 10);
	return reversedFunction(n, rev);
}

function reverseANumber(n) {
	return reversedFunction(n);
}
// ================ Problem 3 End ================================

// ================ Problem 4 start ================================
function reverseString(str, rev = "", index = str.length - 1) {
	if (index === 0) {
		rev = rev + str[index];
		return rev;
	}

	rev = rev + str[index];
	return reverseString(str, rev, index - 1);
}

function stringReverse(str) {
	return reverseString(str);
}
// console.log(stringReverse("faizan"));
// ================ Problem 4 End ================================

// ================ Problem 5 start ================================
// Print 1 to N using Recursion
function printN(n, index = 1) {
	if (index === n) {
		console.log(index);
		return;
	}
	console.log(index);

	printN(n, index + 1);
}

// printN(100);
// ================ Problem 5 End ================================

// ================ Problem 6 start ================================
function printSumOfN(n, sum = 0, index = 1) {
	if (n === index) {
		return sum;
	}
	sum = sum + index;
	return printSumOfN(n, sum, index + 1);
}
// console.log(printSumOfN(10));
// ================ Problem 6 End ================================

// ================ Problem 7 start ================================
function factorial(n, fact = 1, index = 1) {
	if (index === n) {
		fact = fact * index;
		return fact;
	}
	fact = fact * index;

	return factorial(n, fact, index + 1);
}

// console.log(factorial(4));
// ================ Problem 7 End ================================

// ================ Problem 8 start ================================
// Count the zeros
function countZeros(n, count = 0) {
	if (n === 0) {
		return count;
	}
	if (n % 10 === 0) {
		count++;
	}
	n = Math.floor(n / 10);
	return countZeros(n, count);
}
// console.log(countZeros(1003402));
// ================ Problem 8 End ================================

// ================ Problem 9 start ================================
// Palindrome
function palindrome(n, org = n, rev = 0) {
	if (n === 0) {
		return;
	}

	rev = rev * 10 + (n % 10);

	n = Math.floor(n / 10);

	if (rev === org) {
		return true;
	}

	return palindrome(n, org, rev);
}

// let result = palindrome(1001);
// console.log(result ? "It is Palindrome" : "It is not Palindrome");
// ================ Problem 9 End ================================

// ================ Problem 10 start ================================
// Iterate over an Array using Recursion
function iterateArray(arr, index = 0) {
	if (arr.length === index) {
		return;
	}

	console.log(arr[index]);

	iterateArray(arr, index + 1);
}
// iterateArray([1, 2, 3, 4, 5]);
// ================ Problem 10 End ================================

// ================ Problem 11 start ================================
// Print N to 1
function printN(n) {
	if (n < 1) {
		// after each return the functions will print and get removed from the stacks
		return;
	}

	printN(n - 1);
	console.log(n);
}
// printN(5);
// ================ Problem 11 End ================

// ================ Problem 12 start ================================
// Sum of N numbers
function sumOfN(n, total = 0) {
	if (n < 1) {
		// console.log(total);
		return total;
	}
	total = total + n;
	return sumOfN(n - 1, total);
}
// console.log(sumOfN(5));
// ================ Problem 12 End ================================

// ================ Problem 13 start ================================
// using recursion functional approach
function sumOfN(n) {
	if (n === 0) {
		return 0;
	}

	return n + sumOfN(n - 1);
}
// console.log(sumOfN(5));
// ================ Problem 13 End ================================

// ================ Problem 14 start ================================
// product of N using functional approach
function productOfN(n) {
	if (n > 3) {
		return 1;
	}

	return n * productOfN(n + 1);
}

// console.log(productOfN(1));
// ================ Problem 14 End ================================

// ================ Problem 15 start ================================
// sum of Array element
function sumOfArray(arr) {
	if (arr.length === 0) {
		return 0;
	}

	// slice will give me a copy of an array, it wont change original array.
	return arr[arr.length - 1] + sumOfArray(arr.slice(0, arr.length - 1));
}
// console.log(sumOfArray([1, 2, 3, 4]));
// ================ Problem 15 End ================================

// ================ Problem 16 start ================================
// count number of digits
function countNumberOfDigits(n, count = 0) {
	if (n === 0) {
		return count;
	}
	n % 10;
	count++;
	return countNumberOfDigits(Math.floor(n / 10), count);
}
// console.log(countNumberOfDigits(123455));
// ================ Problem 16 End ================================

// ================ Problem 17 start ================================
// Approach = 1
// reverse an array using the functional recursion.
function reverseAnArray(arr, rev = []) {
	if (arr.length === 0) {
		return rev;
	}
	console.log(arr);
	// pop is constant time
	rev.push(arr.pop());

	return reverseAnArray(arr.slice(0, arr.length), rev);
}
// console.log(reverseAnArray([1, 32, 42, 45, 2]));

// Approach = 2

function reverse(arr, index = 0) {
	if (index === Math.floor(arr.length / 2)) {
		return arr;
	}
	let temp = arr[index];
	// arr.length - index - 1 => will product me last elements each time
	arr[index] = arr[arr.length - index - 1];
	arr[arr.length - index - 1] = temp;

	// we use slice bcz it don't change the original state if we change the original state then it would be problem.
	return reverse(arr.slice(0, arr.length), index + 1);
}
// console.log(reverse([1, 2, 3, 4, 5]));
// ================ Problem 17 End ================================

// ================ Problem 18 start ================================
function palindrome(str, index = 0) {
	if (index === Math.floor(str.length / 2)) {
		return true;
	}
	if (str[index] !== str[str.length - index - 1]) {
		return false;
	}

	return palindrome(str, index + 1);
}

// console.log(palindrome("madqm"));
// ================ Problem 18 End ================================

// ================ Problem 19 start ================================
// Fibonacci
// Not optimized time complexity O(n^2)
function fib(n) {
	if (n <= 1) {
		return n;
	}

	let last = fib(n - 1);
	let second_last = fib(n - 2);

	return last + second_last;
}
// console.log(fib(4));
// ================ Problem 19 End ================================

// ================ Problem 20 start ================================
// Fibonacci
function fib(n, arr = [0, 1], index = 2) {
	if (index === n) {
		return arr;
	}
	arr[index] = arr[index - 1] + arr[index - 2];
	return fib(n, arr, index + 1);
}
// let result = fib(10);
// console.log(result.pop());
// ================ Problem 20 End ================================

// ================ Problem 21 start ================================
// Fibonacci optimal version
// In this I tract the calculation, not to repeat the same calculation often.
function fib(n, calculated = {}) {
	if (n <= 1) {
		return n;
	}
	if (!calculated.hasOwnProperty(n)) {
		calculated[n] = fib(n - 1, calculated) + fib(n - 2, calculated);
	}

	// if the calculation already presented then just return the value of that calculations
	return calculated[n];
}

// console.log(fib(10));
// ================ Problem 21 End ================================

// ================ Problem 22 start ==============================================
// Sum, Product, Count, Reverse, occurrences, checkZeros, removeDup, largest, smallest, second_largest, kth, peakElement of an Array elements using Recursion.
function operations(
	// Each time the references will be going to provided for each function calls so each time a function gets calls a new function executions context created that has its own copies of all this parameters a updated recursive values of parameters.
	arr,
	index = 0,
	count = 0,
	sum = 0,
	product = 1,
	rev = [],
	removeDuplicates = [],
	occurrenceOfChar = {},
	countZeros = 0,
	largestElement = 0,
	smallestElement = arr[0],
	kthLargestElement = { kthPosition: 4, kthElement: "" },
	secondLargestElement = 0,
	peakElement = []
	// reverseByKth
) {
	// this is the base condition
	if (index === arr.length) {
		removeDuplicates.push(...new Set(arr));
		return {
			count,
			sum,
			product,
			rev,
			removeDuplicates,
			occurrenceOfChar,
			countZeros,
			largestElement,
			smallestElement,
			kthLargestElement,
			secondLargestElement,
			peakElement,
			totalRunsOfRecursionFunction: count + 1,
		};
	}

	// For having a state for counting the elements
	let char = arr[index];

	// Largest element
	if (largestElement < char) {
		largestElement = char;
	} else if (secondLargestElement < char) {
		secondLargestElement = char;
	}

	// Smallest Element
	if (smallestElement > char) {
		smallestElement = char;
	}

	// peak Element
	if (
		index < arr.length - 2 &&
		arr[index + 1] > arr[index] &&
		arr[index + 1] > arr[index + 2]
	) {
		peakElement.push(arr[index + 1]);
	}

	// kth largest and smallest Element
	if (index === kthLargestElement.kthPosition) {
		// if we don't use the slice method the sort method will change the original state of an array.
		let sortedData = arr.slice().sort((a, b) => a - b);
		kthLargestElement.kthElement = sortedData[kthLargestElement.kthPosition];
	}

	// For reverse of an array
	rev.push(arr[arr.length - index - 1]);

	// For sum of elements
	sum = sum + arr[index];

	// For sum of products
	product = product * arr[index];

	// For counting elements
	count++;

	// For checking occurrences
	if (!occurrenceOfChar.hasOwnProperty(char)) {
		occurrenceOfChar[char] = 1;
	} else {
		occurrenceOfChar[char]++;
	}

	// Keeping tracks of Zeros
	if (arr[index] === 0) {
		countZeros++;
	}

	// Calling each time until the base condition is met.
	return operations(
		arr,
		index + 1,
		count,
		sum,
		product,
		rev,
		removeDuplicates,
		occurrenceOfChar,
		countZeros,
		largestElement,
		smallestElement,
		kthLargestElement,
		secondLargestElement,
		peakElement
	);
}

// console.log(operations([20, 43, 432, 349, 432, 34, 9, 0, 0, 2, 34, 73]));
// ================ Problem 22 End ==============================================

// ================ Problem 23 start ================
// Extract, Sum, Count, reverse of Digits
// simpler version of multiple operations
function extractDigits(n, count = 0, sum = 0, reverse = 0) {
	if (n === 0) {
		return { count, sum, reverse };
	}
	console.log(n % 10);
	count++;
	sum = sum + (n % 10);
	reverse = reverse * 10 + (n % 10);
	n = Math.floor(n / 10);

	return extractDigits(n, count, sum, reverse);
}

// const result = extractDigits(12345);
// console.log(result)
// ================ Problem 23 End ================

// ================ Problem 24 start ================
// ================ Problem 24 End ================

// ================ Problem 25 start ================
// ================ Problem 25 End ================

// ================ Problem 26 start ================
// ================ Problem 26 End ================

// ================ Problem 27 start ================
// ================ Problem 27 End ================

// ================ Problem 28 start ================
// ================ Problem 28 End ================

// ================ Problem 29 start ================
// ================ Problem 29 End ================

// ================ Problem 30 start ================
// ================ Problem 30 End ================
