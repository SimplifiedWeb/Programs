// ================ Problem 1 Start ==================================
// Validate Email Address
// Note : use inbuilt function just for extracting (optional)
// - Must contain exactly one '@' symbol.
// - Must have a non-empty username before the '@' symbol.
// - Must have a non-empty domain after the '@' symbol.
// - Must end with a valid top-level domain (e.g., .com, .co.in, .net).
// - Only alphanumeric characters, dots (.), underscores (_), and hyphens (-) are allowed.
// - No consecutive dots (.), underscores (_), or hyphens (-).
// - No spaces allowed.
function checkForInvalidSpecialCharacters(email) {
	let indexOfAtTheRate = -1,
		count = 0;
	for (let i = 0; i < email.length; i++) {
		if (email[i] === "@") {
			indexOfAtTheRate = i;
			count++;
		} else if (email[i] === " ") {
			return { email: "Don't include spaces" };
		}

		// we can use a loop to check for range of special characters by Ascii.
	}
	if (count > 1) return { email: "Check You'r @ " };

	let leftSideOfAtTheRate = email.slice(0, indexOfAtTheRate);
	let rightSideOfAtTheRate = email.slice(indexOfAtTheRate + 1, email.length);

	if (
		leftSideOfAtTheRate.length === 0 ||
		leftSideOfAtTheRate.length > 65 ||
		rightSideOfAtTheRate.length === 0 ||
		rightSideOfAtTheRate.length > 255
	) {
		return { email: "Check you'r length" };
	}

	let dotCount = 0;
	let currentElement = "";
	for (let i = 0; i < rightSideOfAtTheRate.length; i++) {
		if (rightSideOfAtTheRate[i] === ".") {
			dotCount++;
			if (currentElement.length === 0)
				return { email: "Check your dot you used just after the @ sign " };

			currentElement = "";
		} else {
			currentElement = currentElement + rightSideOfAtTheRate[i];
		}
	}

	if (dotCount !== 1) return { email: "Check your dots" };
	if (currentElement.length === 0) return { email: "Add something after dot" };

	return { email: "Email successfully validate" };
}
function checkForEmail(email) {
	if (typeof email === "string" && email.length > 12) {
		let result = checkForInvalidSpecialCharacters(email);
		return result;
	}
	return "check you'r email";
}

// console.log(checkForEmail("test@example.com"));
// console.log(checkForEmail("invalid@"));
// console.log(checkForEmail("invalid@domain"));
// console.log(checkForEmail("invalid@.com"));
// console.log(checkForEmail("invalid@domain."));
// console.log(checkForEmail("invalid@domain..com"));
// console.log(checkForEmail("@example.com"));
// console.log(checkForEmail("test@ex ample.com"));

// ================ Problem 1 End ================================

// ================ Problem 2 Start ================================

// Password Validations
// Note : Minimum use of inbuilt function
// Minimum length of 8 characters.
// Must contain at least one uppercase letter.
// Must contain at least one lowercase letter.
// Must contain at least one digit.
// Must contain at least one special character from the set !@#$%^&*()
function checkForSpecialCharacters(validCases) {
	let isFoundSpecialChar = false;
	for (let i = 0; i < validCases.length; i++) {
		let currentCharCode = validCases.charCodeAt(i);

		if (currentCharCode >= 33 && currentCharCode <= 47) {
			isFoundSpecialChar = true;
			break;
		}
	}

	if (isFoundSpecialChar) {
		return { password: `Email is Valid - ${true}` };
	}
	return {
		password: `Email is not valid. Provided special characters are not allowed, use - "!@#$%^&*()" - ${false}`,
	};
}

function checkForCasesAndDigits(pass) {
	// let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	// let lowercase = "abcdefghijklmnopqrstuvwxyz";
	// let digits = "0123456789";
	// let specialChar = "!@#$%^&*()";
	// let characterSet = {
	// 	uppercase: {},
	// 	lowercase: {},
	// 	digits: {},
	// 	specialChar: {},
	// };
	// for (let i = 0; i < specialChar.length; i++) {
	// 	characterSet.specialChar[specialChar[i]] = i + 1;
	// }
	// console.log(characterSet.specialChar);

	let characterSet = {
		uppercase: {
			A: 1,
			B: 2,
			C: 3,
			D: 4,
			E: 5,
			F: 6,
			G: 7,
			H: 8,
			I: 9,
			J: 10,
			K: 11,
			L: 12,
			M: 13,
			N: 14,
			O: 15,
			P: 16,
			Q: 17,
			R: 18,
			S: 19,
			T: 20,
			U: 21,
			V: 22,
			W: 23,
			X: 24,
			Y: 25,
			Z: 26,
		},
		lowercase: {
			a: 1,
			b: 2,
			c: 3,
			d: 4,
			e: 5,
			f: 6,
			g: 7,
			h: 8,
			i: 9,
			j: 10,
			k: 11,
			l: 12,
			m: 13,
			n: 14,
			o: 15,
			p: 16,
			q: 17,
			r: 18,
			s: 19,
			t: 20,
			u: 21,
			v: 22,
			w: 23,
			x: 24,
			y: 25,
			z: 26,
		},
		digits: {
			0: 1,
			1: 2,
			2: 3,
			3: 4,
			4: 5,
			5: 6,
			6: 7,
			7: 8,
			8: 9,
			9: 10,
		},
	};

	let isFoundUppercase = false,
		isFoundLowercase = false,
		isFoundDigits = false;

	for (let i = 0; i < pass.length; i++) {
		if (characterSet.uppercase.hasOwnProperty(pass[i])) {
			isFoundUppercase = true;
		} else if (characterSet.lowercase.hasOwnProperty(pass[i])) {
			isFoundLowercase = true;
		} else if (characterSet.digits.hasOwnProperty(pass[i])) {
			isFoundDigits = true;
		}
	}

	if (isFoundDigits && isFoundLowercase && isFoundUppercase) {
		return true;
	} else {
		return {
			password: `At least one uppercase, lowercase and digit - ${false}`,
		};
	}
}

function checkForPasswordValidation(pass) {
	let validCases = checkForCasesAndDigits(pass);
	if (validCases === true) {
		return checkForSpecialCharacters(pass);
	}
	return validCases;
}

function checkForPassword(pass) {
	if (pass.length >= 8) {
		let result = checkForPasswordValidation(pass);
		return result;
	}
	return { password: `Check length of password - ${false}` };
}

// console.log(checkForPassword("Faiz_an@123"));
// ================ Problem 2 End ==================================

// ================ Problem 3 Start ==================================
// Write a function that check for the validity time or not
function checkForValidity(targetTime) {
	let currentTime = new Date().getTime();
	if (currentTime > targetTime) {
		return "Validity is over";
	}

	return "Still in Validity";
}

// Approach - 1 by calculation
// let targetTime = new Date().getTime() + 5 * 60 * 1000;

// Approach - 2
let targetTime = new Date("2024-06-05").getTime();

// let result = checkForValidity(targetTime);
// console.log(result);
// ================ Problem 3 End ==================================

// ================ Problem 4 Start ==================================
// Write a function to format a date in a specific format (e.g., MM/DD/YYYY, DD/MM/YYYY).
function preZerosForSingleDays(elm) {
	return elm < 10 ? "0" + elm : elm;
}
function formatDate(date) {
	let data = [date.getMonth(), date.getDay(), date.getFullYear()];

	for (let i = 0; i < data.length; i++) {
		data[i] = preZerosForSingleDays(data[i]);
	}

	return `${data[0]}/${data[1]}/${data[2]}`;
}

// let result = formatDate(new Date());
// console.log(result);
// ================ Problem 4 End ==================================

// ================ Problem 5 Start ==================================
// Write a function to generate a random string of a specified length.
function randomString(n) {
	if (n === 0 || n === 1) return "It would be atleast 2";
	let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	// let str = "";
	let str = [];

	for (let i = 0; i < n; i++) {
		// Approach = 1
		// This Approach will indeed join each string and it is not efficient.
		// str += uppercase[Math.floor(Math.random() * uppercase.length - 1)];

		// Approach = 2
		// Using Arrays is more efficient
		str.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
	}
	// return str[0] + str.slice(1, str.length).toLowerCase();

	return str.join("").toLowerCase();
}

// let result = randomString(10);
// console.log(result);
// ================ Problem 5 End ==================================

// ================ Problem 6 Start ==================================
// Write a function to truncate a string to a specified length and add an ellipsis (...) at the end.
function generateTruncate(sentence, target) {
	let str = "";
	for (let i = 0; i < sentence.length; i++) {
		if (i === target) break;

		str += sentence[i];
	}
	let ellipsis = "...";
	return str.concat(ellipsis);
}

function truncateSentences(sentence, target) {
	if (sentence.length < 2) return "add Some more words";

	if (target === 0 || target === 1) return "target starts from atleast 10";

	return generateTruncate(sentence, target);
}

let sentence = "My name is faizan and I'm going to be a Great developer";

// let result = truncateSentences(sentence, 10);
// console.log(result);

// ================ Problem 6 End ==================================

// ================ Problem 7 Start ==================================
// Write a function convert a string into a camelCase
function camelCaseForSingleString(str) {
	let midIndex = Math.floor(str.length / 2) + 1;

	let firstHalf = str.slice(0, midIndex).toLowerCase();

	let secondHalf = str.slice(midIndex).toLowerCase();

	secondHalf = secondHalf[0].toUpperCase() + secondHalf.slice(1, str.length);

	return `${firstHalf}${secondHalf}`;
}
// console.log(camelCaseForSingleString("uppercase"));
// ================ Problem 7 End ==================================

// ================ Problem 8 Start ==================================
//Write a function to implement a simple search functionality on an array of objects.
let data = [
	{ id: 1, name: "Alice", age: 28 },
	{ id: 2, name: "Bob", age: 34 },
	{ id: 3, name: "Charlie", age: 22 },
	{ id: 4, name: "David", age: 34 },
];

function search(data, searchKey, searchValue) {
	if (data.length === 0) return "empty";

	let result = data.filter((currElm) => currElm[searchKey] === searchValue);
	if (result.length === 0) return "Item not present";
	return result;
}
const searchKey = "name";
const searchValue = "Eve";
// let result = search(data, searchKey, searchValue);
// console.log(result);

// ================ Problem 8 End ==================================
