// Count the Digits  👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻
// function countDigits(num) {
//   var count = 0;

//   while (num > 0) {
//     count = count + 1;
//     num = Math.floor(num / 10);
//   }
//   console.log(count);
// }

// countDigits(12345);
// Extract the Digits  👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

// function extractDigits(num) {
//   while (num > 0) {
//     var res = num % 10;
//     console.log(res);
//     num = Math.floor(num / 10);
//   }
// }

// extractDigits(1234);
// Sum of Digits   👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

// function sumOfDigits(num) {
//   var sum = 0;
//   while (num > 0) {
//     var result = num % 10;
//     sum = sum + result;
//     num = Math.floor(num / 10);
//   }
//   console.log(sum);
// }
// sumOfDigits(1234);

// Reverse Digits  👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

// function reverseDigits(num) {
//   // var rev = 0;
//   var str = "";
//   while (num > 0) {
//     // First Approach
//     // var last = num % 10;
//     // rev = rev * 10 + last;
//     // num = Math.floor(num / 10);

//     // Second Approach
//     str += num % 10;
//     num = Math.floor(num / 10);
//   }
//   console.log(str);

//   // console.log(rev);
// }
// reverseDigits(1234);

// Palindrome Digits  👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

// function palindrome(num) {
//   var dup = num;
//   var rev = 0;

//   while (num > 0) {
//     var last = num % 10;
//     rev = rev * 10 + last;
//     num = Math.floor(num / 10);
//   }
//   if (dup === rev) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// palindrome(121);

// Armstrong Digits  👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

// function armstrong(num) {
//   var org = num;
//   var result = 0;
//   while (num > 0) {
//     var digit = num % 10;

//     result = result + Math.pow(digit, 3);

//     num = Math.floor(num / 10);
//   }
//   if (result == org) {
//     console.log("Armstrong");
//   } else {
//     console.log("Not an Armstrong");
//   }
// }

// armstrong(153);

// Armstrong n terms 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

// function armstrongNthTerms(num) {
//   for (var i = 1; i <= num; i++) {
//     var sum = 0;
//     var temp = i;
//     while (temp > 0) {
//       var digit = temp % 10;
//       sum = sum + Math.pow(digit, 3);
//       temp = Math.floor(temp / 10);
//     }
//     if (sum === i) {
//       console.log(sum);
//     }
//   }
// }

// armstrongNthTerms(1000);
// Factorial Digits 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

// Factorials => 4!
// function factorial(n) {
//   var store = 1;
//   while (n > 0) {
//     store = store * n;
//     n--;
//   }
//   console.log(store);
// }

// factorial(40);

// Efficient Approach for larger Inputs Factorial 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻
// function factorial(n) {
//   var factorialArray = [1];

//   for (var i = 1; i <= n; i++) {
//     factorialArray[i] = factorialArray[i - 1] * i;
//   }
//   console.log(factorialArray);
// }

// factorial(4);

// Prime Digits
// GCD / HCF Digits
// Perfect Number by Digits
// Fibonacci Digits
// Happy Number by Digits
// First n natural Number by Digits
// Strong number by Digits
// HarShad Number by Digits
// Sum of Proper Divisor by digits
// Number of Trailing zeros in the factorial
