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
