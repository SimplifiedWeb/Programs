// ================ Problem 1 Start ================================
// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). You may return the answer in any order
function generateWords(str1, str2) {
	let result = [];
	for (let i = 0; i < str1.length; i++) {
		currElm = str1[i];
		for (let j = 0; j < str2.length; j++) {
			if (currElm === str2[j]) {
				result.push(currElm);
			}
		}
	}
	return result;
}

function findWords(arr) {
	if (arr.length < 1) return "Must be atleast two";
	let currElm = generateWords(arr[0], arr[1]);

	for (let i = 2; i < arr.length; i++) {
		currElm = generateWords(arr[i], currElm);
	}

	return [...new Set(currElm)].sort();
}
// let result = findWords(["bella", "label", "roller"]);
// console.log(result);

// ================ Problem 1 End ================================

// ================ Problem 2 Start ================================

// Print the given star
//         1
//       1 2 1
//     1 2 3 2 1
//   1 2 3 4 3 2 1
// 1 2 3 4 5 4 3 2 1

function printPattern(n) {
	for (let i = 0; i < n; i++) {
		let str = "";
		for (let j = 0; j < n - i - 1; j++) {
			str += " ";
		}
		for (let k = 0; k < 2 + i - 1; k++) {
			str += k + 1;
		}

		for (let j = 1; j <= i; j++) {
			str += j;
		}
		console.log(str);
	}
}

// printPattern(5);

// ================ Problem 2 End ================================
