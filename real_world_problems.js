// ================ Problem 1 Start ==================================
// Validate Email Address
// Note : use inbuilt function just for extracting (optional)
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
