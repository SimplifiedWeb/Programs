// Subsequences are contiguous / non-contiguous and maintain the order.
// Substrings are contiguous and maintain the order.

// ================ Problem 1 start ================================
// Print All Subsequences of a String: Write a function to print all subsequences of a given string.

function printString(str, current = [], subSequences = [], index = 0) {
	if (index === str.length) {
		subSequences.push([...current]);
		return;
	}

	current.push(str[index]);

	printString(str, current, subSequences, index + 1);

	current.pop();

	printString(str, current, subSequences, index + 1);

	return subSequences;
}

// let result = printString("Faizan");
// console.log(result);

// ================ Problem 1 End ================================

// ================ Problem 2 Start ================================
// Give me atleast 5 subsequences of a given string otherwise return -1;

function countSub(str, current = [], subSequences = [], index = 0) {
	if (index === str.length) {
		subSequences.push([...current]);
		if (subSequences.length >= 5) {
			return true; // when this will going to be true then we just return not performing any further operations.
		}
		return false;
	}

	current.push(str[index]);

	if (countSub(str, current, subSequences, index + 1)) {
		return subSequences;
	}

	current.pop();

	if (countSub(str, current, subSequences, index + 1)) {
		return subSequences;
	}
	// if there is nothing here to be performed it will going to remove the function and get back to the previous one.
}

// let result = countSub("Faizan");
// console.log(result);

// ================ Problem 2 End ================================

// ================ Problem 3 Start ===============================
// Count all the subsequences of a string
// Strings arrays way of doing is same
function countSub(str, index = 0) {
	if (index === str.length) {
		return 1;
	}

	return countSub(str, index + 1) + countSub(str, index + 1);
}
// let result = countSub("Faizan");
// console.log(result);

// ================ Problem 3 End ================================

// ================ Problem 4 Start ================================
// check if the given string has the subsequences atleast 5 or not
// --- If it found don't do further actions
// --- It it not found return -1

function checkFor5Sub(str) {
	let count = 0;

	function sub(str, index = 0) {
		if (count >= 5) {
			return;
		}
		if (index === str.length) {
			count++;
			return;
		}
		// Add the current
		sub(str, index + 1);

		// Remove the current
		sub(str, index + 1);
	}
	sub(str);
	return count >= 5 ? count : -1;
}

// let result = checkFor5Sub("Fa");
// console.log(result);

// ================ Problem 4 End ================================

// ================ Problem 5 Start ================================
//  Print All Substrings of a String: Write a function to print all substrings of a given string.
function printAllSubstring(
	str,
	state = 0,
	index = 0,
	current = [],
	subStrings = []
) {
	if (index === str.length) {
		subStrings.push([...current]);
		return;
	}
	current.push(str.slice(state, index + 1));

	printAllSubstring(str, state, index + 1, current, subStrings);
	if (index === state) {
		state++;
		printAllSubstring(str, state, index + 1, current, subStrings);
	}

	return subStrings[subStrings.length - 1];
}
// let result = printAllSubstring("Faizan");
// console.log(result);
// ================ Problem 5 End ================================

// ================ Problem 6 Start ================================
// Count all the subStrings in a Given String using Recursion.

function count(str) {
	let count = 0;

	function countSubString(str, index = 0, state = 0) {
		if (index === str.length) {
			return;
		}

		count++;
		countSubString(str, index + 1, state);

		if (state === index) {
			++state;
			countSubString(str, index + 1, state);
		}

		return;
	}

	countSubString(str);

	return count;
}

// let result_2 = count("Faizan");
// console.log(result_2);

// ================ Problem 6 End ================================

// ================ Problem 7 Start ================================
//  Print Subsequences with Sum Equal to Target: Write a function to print all subsequences of an array whose elements sum to a given target.

function subOfSum(arr, target, index = 0, current = [], sum = 0, result = []) {
	if (index === arr.length) {
		if (sum === target) {
			return result.push([...current]);
		}
		return;
	}

	current.push(arr[index]);
	sum = sum + arr[index];

	subOfSum(arr, target, index + 1, current, sum, result);

	current.pop();

	sum = sum - arr[index];

	subOfSum(arr, target, index + 1, current, sum, result);

	return result;
}
// let result = subOfSum([1, 2, 3, 4, 5, 1], 2);
// console.log(result);

// ================ Problem 7 End ================================

// ================ Problem 8 Start ================================
// find the maximum sum and return that pair with sum

let countTheCalculations = 0; // used for checking how much times it gets run
function maxSum(
	arr,
	max = 0,
	index = 0,
	result = { sum: 0, pair: [] },
	pointer = 0
) {
	if (index === arr.length) {
		return;
	}

	if (arr[pointer] !== arr[index]) {
		var sum = arr[pointer] + arr[index];
		countTheCalculations++;
		if (sum > max) {
			max = sum;
			result.pair = [[arr[pointer], arr[index]]];
			result.sum = sum;
		}
	}
	maxSum(arr, max, index + 1, result, pointer);
	if (index === pointer) {
		pointer++;
		if (pointer === arr.length) {
			return;
		}

		index = -1;

		maxSum(arr, max, index + 1, result, pointer);
	}

	// indeed it provides answer but it's not efficient.
	// Using an object or something to track the repetition of calculations that give some performance 😃 ,
	// we can use the Set method to minimize the calculations
	// 1 + 3 is equivalent to 3 + 1 same for others.

	return result;
}

// let result = maxSum([1, 3, 2, 4]);
// console.log(result);
// console.log(countTheCalculations);
// ================ Problem 8 End ==================================

// ================ Problem 9 Start ================================

// find the maximum sum and return that pair with sum
// Optimized version
let count = 0;
function maxSum(
	arr,
	max = 0,
	index = 0,
	result = { sum: 0, pair: [] },
	pointer = 0,
	alreadyCalculated = new Set()
) {
	if (index === arr.length) {
		return;
	}

	let pair = [arr[pointer], arr[index]].sort().toString();

	if (arr[pointer] !== arr[index] && !alreadyCalculated.has(pair)) {
		var sum = arr[pointer] + arr[index];
		count++;

		if (sum > max) {
			max = sum;
			result.pair = [[arr[pointer], arr[index]]];
			result.sum = sum;
		}

		alreadyCalculated.add(pair);
	}
	maxSum(arr, max, index + 1, result, pointer, alreadyCalculated);
	if (index === pointer) {
		pointer++;
		if (pointer === arr.length) {
			return;
		}
		index = -1;
		maxSum(arr, max, index + 1, result, pointer, alreadyCalculated);
	}
	return result;
}

// let result = maxSum([1, 3, 2, 4]);
// console.log(result);
// console.log(count);

// ================ Problem 9 End ==================================
// ================ Problem 10 Start ================================

// Find Subsequences with Product Less Than Target: Write a function to find all subsequences of an array where the product of the elements is less than a given target.
function product(
	arr,
	target,
	index = 0,
	result = [],
	current = [],
	pointer = 0,
	alreadyCalculated = new Set()
) {
	if (index === arr.length) {
		result.push([arr[index - pointer - 1]]);
		return;
	}

	if (arr[index] === 0) return;

	let pair = [arr[pointer], arr[index]].sort().toString();
	if (
		arr[index] < target &&
		arr[pointer] !== arr[index] &&
		!alreadyCalculated.has(pair)
	) {
		let product = arr[pointer] * arr[index];
		if (Math.abs(product) < 6) {
			result.push([arr[pointer], arr[index]]);
			alreadyCalculated.add(pair);
		}
	}

	product(arr, target, index + 1, result, current, pointer, alreadyCalculated);

	if (index === pointer) {
		++pointer;
		if (pointer === arr.length) {
			return;
		}

		index = -1;

		product(
			arr,
			target,
			index + 1,
			result,
			current,
			pointer,
			alreadyCalculated
		);
	}
	return result;
}

// let result = product([1, 2, 3, 4], 6);
// console.log(result);

// ================ Problem 10 End ==================================
// ================ Problem 11 Start ================================
// Find Subsequences with Product Less Than Target: Write a function to find all subsequences of an array where the product of the elements is less than a given target.
// Optimized version

let counting = 0;
function productCalculation(arr, target, index, current, result) {
	counting++;
	let currentData = current.reduce((acc, val) => acc * val, 1);

	if (currentData > 0 && currentData < target) {
		result.push([...current]);
	}

	if (index === arr.length) return;

	for (let i = index; i < arr.length; i++) {
		if (current.includes(arr[i])) continue;

		current.push(arr[i]);

		productCalculation(arr, target, i + 1, current, result);

		current.pop();
	}
}

function production(arr, target) {
	let result = [];

	productCalculation(arr, target, 0, [], result);

	return result;
}

// let result_2 = production([1, 2, 3], 6);
// console.log(result_2);
// console.log(counting);

// ================ Problem 11 End ==================================

// ================ Problem 12 Start ================================

// Find Max sum using more optimized way
function generateSub(arr, index, current, result, maxObj) {
	if (current.length > 1 && current.length < 3) {
		let sum = current.reduce((acc, val) => acc + val, 0);
		if (sum > maxObj.max) {
			maxObj.max = sum;
			result.push([...current]);
		}
	}

	if (index === arr.length) {
		return;
	}

	for (let i = index; i < arr.length; i++) {
		if (current.includes(arr[i])) continue;

		current.push(arr[i]);

		generateSub(arr, i + 1, current, result, maxObj);

		current.pop();
	}
	// return result[result.length - 1];
	return result;
}

function practice(arr) {
	let result = [];
	let maxObj = { max: 0 };
	generateSub(arr, 0, [], result, maxObj);
	return result[result.length - 1];
}

// let result = practice([3, 1, 2]);
// console.log(result);

// ================ Problem 12 End ==================================

// ================ Problem 13 Start ================================
// Find the Unique subset elements.
function distinctElm(arr, index, current, result) {
	if (current.length > 1) {
		result.push([...current]);
	}

	if (index === arr.length) return;

	for (let i = index; i < arr.length; i++) {
		if (current.includes(arr[i])) continue;

		current.push(arr[i]);

		distinctElm(arr, i + 1, current, result);

		current.pop();
	}
	return result;
}

function distinct(arr) {
	let result = [];

	distinctElm(arr, 0, [], result);

	let uniqueSet = Array.from(new Set(result.map(JSON.stringify)), JSON.parse);

	return uniqueSet;
}

// let result = distinct([1, 1, 1, 4, 2]);

// console.log(result);

// ================ Problem 13 End ==================================
// ================ Problem 14 Start ================================
// Printing All substring with matching pattern it is the most efficient approach.
function stringMatch(str, match) {
	let subStringArray = [];
	for (let i = 0; i < str.length; i++) {
		let subString = "";
		for (let j = i; j < str.length; j++) {
			subString += str[j];
			subStringArray.push(subString);
		}
	}

	if (subStringArray.includes(match)) {
		return { subStringArray, matched: true };
	} else {
		return { matched: false };
	}
}

// let result = stringMatch("Faiz", "z");

// console.log(result);

// ================ Problem 14 End ==================================
// ================ Problem 15 Start ================================

function maxProduct(
	arr,
	index,
	current,
	result,
	alreadyCalculated = new Set(),
	maxValue = { max: 0, maxSubset: [] }
) {
	if (current.length > 1 && current.length < 3) {
		let pair = [...current].sort().toString();
		if (!alreadyCalculated.has(pair)) {
			let product = current.reduce((acc, val) => acc * val, 1);
			if (product > maxValue.max) {
				maxValue.max = product;
				maxValue.maxSubset = [...current];
				alreadyCalculated.add(pair);
				result.push(maxValue);
			}
		}
	}

	if (index === arr.length) return;

	for (let i = index; i < arr.length; i++) {
		if (current.includes(arr[i])) continue;

		current.push(arr[i]);

		maxProduct(arr, i + 1, current, result, alreadyCalculated, maxValue);

		current.pop();
	}
	return result;
}

function findMaxProduct(arr) {
	let result = [];
	maxProduct(arr, 0, [], result);
	return result[result.length - 1];
}

// let result = findMaxProduct([3, 2, 1, 4]);
// console.log(result);

// ================ Problem 15 End ==================================
// ================ Problem 16 Start ================================
// Subset in the increasing order
function changeOrder(arr, index, current, result) {
	if (index === arr.length) {
		result.push([...current]);
	}

	for (let i = index; i < arr.length; i++) {
		if (current.includes(arr[i])) continue;

		current.push(arr[i]);

		changeOrder(arr, i + 1, current, result);

		current.pop();
	}
	return result;
}

function increasingOrder(arr) {
	let result = [];

	changeOrder(arr, 0, [], result);

	return result.sort((a, b) => a.length - b.length);
}

// let result = increasingOrder([1, 2, 3, 4]);

// console.log(result);

// ================ Problem 16 End ==================================
// ================ Problem 17 Start ================================
// Finding the longest subset
function findTheMaxSubset(arr, index, current, maxSubset) {
	if (current.length > maxSubset.maxLength) {
		maxSubset.max = [...current];
		maxSubset.maxLength = current.length;
	}

	if (index === arr.length) return;

	for (let i = index; i < arr.length; i++) {
		if (current.includes(arr[i])) continue;

		current.push(arr[i]);

		findTheMaxSubset(arr, i + 1, current, maxSubset);

		current.pop();
	}
	return maxSubset;
}

function maxLengthSubSequences(arr) {
	let maxSubset = { max: [], maxLength: 0 };

	findTheMaxSubset(arr, 0, [], maxSubset);

	return maxSubset;
}

// let result = maxLengthSubSequences([3, 2, 1, 4]);

// console.log(result);

// ================ Problem 17 End ==================================
// ================ Problem 18 Start ================================
// Provide only the two pairs of subsets, remove smaller and bigger then that.
function generateOnlyPairs(arr, index, current, result) {
	if (current.length > 1 && current.length < 3) {
		result.push([...current]);
	}
	if (index === arr.length) return;

	for (let i = index; i < arr.length; i++) {
		if (current.includes(arr[i])) continue;

		current.push(arr[i]);

		generateOnlyPairs(arr, i + 1, current, result);
		current.pop();
	}

	return result;
}

function provideOnlyPairs(arr) {
	let result = [];

	generateOnlyPairs(arr, 0, [], result);

	return result;
}

// let result = provideOnlyPairs([2, 1, 3, 5]);

// console.log(result);

// ================ Problem 18 End ==================================

// ================ Problem 19 Start ================================
// Finding Even, Odd and Hybrid in subsequences

// organizeEvenAndOdd function is not an efficient way
function organizeEvenAndOdd(current, result) {
	if (current.length === 1) {
		current[0] === 2 || current[0] === 1
			? result.evens.push([...current])
			: null;
	}
	let allEvens = true,
		allOdds = true;

	for (let i = 0; i < current.length; i++) {
		if (current[i] % 2 !== 0) {
			allEvens = false;
			break;
		}
	}
	if (allEvens) {
		result.evens.push([...current]);
		return;
	}
	for (let j = 0; j < current.length; j++) {
		if (current[j] % 2 === 0) {
			allOdds = false;
			break;
		}
	}
	if (allOdds) {
		result.odds.push([...current]);
		return;
	}
	return result.hybrid.push([...current]);
}

function generateEvenAndOddSubset(arr, index, current, result) {
	if (current.length > 0) {
		organizeEvenAndOdd(current, result);
	}

	if (index === arr.length) return;

	for (let i = index; i < arr.length; i++) {
		if (current.includes(arr[i])) continue;

		current.push(arr[i]);

		generateEvenAndOddSubset(arr, i + 1, current, result);

		current.pop();
	}
	return result;
}

function evenAndOdd(arr) {
	let result = { evens: [], odds: [], hybrid: [] };

	generateEvenAndOddSubset(arr, 0, [], result);

	return result;
}
// let result = evenAndOdd([3, 2, 4, 1]);
// console.log(result);

// ================ Problem 19 End ==================================
// ================ Problem 20 Start ================================

// Even and Odd efficient way
function organizeEvenAndOdd(current, result) {
	if (current.length === 1) {
		current[0] === 2 || current[0] === 1
			? result.evens.push([...current])
			: null;
	}

	let allEvens = false,
		allOdds = false;

	for (let i = 0; i < current.length; i++) {
		if (current[i] % 2 === 0) {
			allEvens = true;
		} else {
			allOdds = true;
		}

		if (allEvens && allOdds) {
			result.hybrid.push([...current]);
			return;
		}
	}
	if (allEvens) {
		result.evens.push([...current]);
	} else {
		result.odds.push([...current]);
	}
}

function generateEvenAndOddSubset(arr, index, current, result) {
	if (current.length > 0) {
		organizeEvenAndOdd(current, result);
	}

	if (index === arr.length) return;

	for (let i = index; i < arr.length; i++) {
		if (current.includes(arr[i])) continue;

		current.push(arr[i]);

		generateEvenAndOddSubset(arr, i + 1, current, result);

		current.pop();
	}
	return result;
}

function evenAndOdd(arr) {
	let result = { evens: [], odds: [], hybrid: [] };

	generateEvenAndOddSubset(arr, 0, [], result);

	return result;
}
// let result = evenAndOdd([3, 2, 4, 1]);
// console.log(result);

// ================ Problem 20 End ================================

// Combinations and Permutations ************************************************************************

// ================ Problem 1 Start ================================
// Given an array of positive integers (candidates) and a target integer, you need to find all unique combinations of candidates where the chosen numbers sum to the target. You may use each candidate number an unlimited number of times. The order in which you combine the candidates matters as each combination should be unique
function generateCombinations(arr, index, current, result, target) {
	if (target === 0) {
		result.push([...current]);
		return;
	}

	if (target < 0 || index === arr.length) {
		return;
	}

	for (let i = index; i < arr.length; i++) {
		current.push(arr[i]);

		// We wont increase the index we stayed on that particular index and move to the next once we ensure each possible path for each particular elements in an array.
		generateCombinations(arr, i, current, result, target - arr[i]);

		current.pop();
	}

	return result;
}

function comb(arr, target) {
	let result = [];

	generateCombinations(arr, 0, [], result, target);

	return result;
}

// let result = comb([1, 2, 3], 5);
// console.log(result);

// ================ Problem 1 End ================================

// ================ Problem 2 Start ================================
// combination sum = 2 => finding all the unique subsets that sum up to the target.
function generateUniqueCombinations(
	arr,
	index,
	current,
	target,
	result,
	alreadyCalculated = new Set()
) {
	if (current.length > 0) {
		let pair = [...current].sort().toString();

		if (!alreadyCalculated.has(pair)) {
			let sum = current.reduce((acc, val) => acc + val, 0);
			alreadyCalculated.add(pair);

			if (sum === target) {
				result.push([...current]);
				return;
			}
		}
	}

	if (index === arr.length) return;

	for (let i = index; i < arr.length; i++) {
		if (current.includes(arr[i])) continue;

		current.push(arr[i]);

		generateUniqueCombinations(
			arr,
			i + 1,
			current,
			target,
			result,
			alreadyCalculated
		);

		current.pop();
	}
}

function findUniqueSubsetMax(arr, target) {
	let result = [];
	generateUniqueCombinations(arr, 0, [], target, result);
	return result;
}

// let result = findUniqueSubsetMax([1, 2, 3, 4, 1], 5);
// console.log(result);

// ================ Problem 2 End ================================

// ================ Problem 3 Start ================================

// Subset Sum = 2 problem where we need to find all the unique possible sum
// Find the target sum in the subset
function generateSubsetSum(
	arr,
	index,
	current,
	result,
	target,
	alreadyCalculated = new Set()
) {
	if (current.length > 1 && current.length < 3) {
		let pair = [...current].sort().toString();

		if (!alreadyCalculated.has(pair)) {
			let maxSum = current.reduce((acc, val) => acc + val, 0);

			if (maxSum === target) {
				result.sum = maxSum;
				result.subSet.push([...current]);
			}

			alreadyCalculated.add(pair);
		}
	}

	if (index === arr.length) return;

	for (let i = index; i < arr.length; i++) {
		if (current.includes(arr[i])) continue;

		current.push(arr[i]);

		generateSubsetSum(arr, i + 1, current, result, target, alreadyCalculated);

		current.pop();
	}
	return result;
}

function checkForSum(arr, target) {
	let result = {
		sum: 0,
		subSet: [],
	};

	generateSubsetSum(arr, 0, [], result, target);

	return result;
}

// let result = checkForSum([3, 2, 1, 4], 7);
// console.log(result);

// ================ Problem 3 End ================================
