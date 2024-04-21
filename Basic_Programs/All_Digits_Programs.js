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

// How you get the all the factors of a given number in an array 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

// function getAllFactors(num) {
//   var result = [];
//   for (var i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       result.push(i);
//     }
//   }

//   console.log(result);
// }

// getAllFactors(6);

// Prime Digits
//  - Check For Prime

// function checkForPrime(num) {
//   for (var i = 2; i <= num; i++) {
//     if (num % i === 0) {
//       console.log("It is a prime number ", i);
//     }
//   }
// }
// checkForPrime(7);

//  - Print all the nth Prime

// function checkForPrime(num) {
//   if (num === 2) return true;
//   if (num % 2 === 0) return false;

//   for (var k = 3; k * k <= num; k += 2) {
//     if (num % k === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// function nthPrime(num) {
//   var result = [];
//   for (var i = 2; i <= num; i++) {
//     if (checkForPrime(i)) {
//       result.push(i);
//     }
//   }
//   console.log(result);
// }
// nthPrime(20);

//  - Print Prime Factors

// function printPrimeFactors(num) {
//   var results = [];

//   while (num % 2 === 0) {
//     results.push(2);
//     num = num / 2;
//   }

//   for (var i = 3; i * i <= num; i += 2) {
//     if (num % i === 0) {
//       results.push(i);
//       num = num / i;
//     }
//   }
//   if (num > 2) {
//     results.push(num);
//   }

//   console.log(results);
// }
// printPrimeFactors(28);

//  - Count Prime in a range [a, b]

// function checkForPrime(num) {
//   if (num === 2) return true;
//   if (num <= 1) return false;
//   // prime numbers are divisible by itself and 1, Not by 2 or any even numbers.
//   if (num % 2 === 0) return false;

//   for (var k = 3; k * k <= num; k += 2) {
//     if (num % k === 0) {
//       // 15 => 3 x 5 = 15
//       // sure it is odd number but it has more then 2 factors so it is not a prime number
//       return false;
//     }
//   }

//   return true;
// }
// function checkForPrimeRange(a, b) {
//   var results = [];
//   var count = 0;
//   for (var i = a; i <= b; i++) {
//     if (checkForPrime(i)) {
//       results.push(i);
//       count++;
//     }
//   }
//   console.log(results);
//   console.log(count);
// }

// checkForPrimeRange(10, 20);

//  - Sum of Prime

// function checkForPrime(n) {
//   if (n % 2 === 0) return false;

//   for (var k = 3; k * k <= n; k += 2) {
//     if (n % k === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// function sumOfPrime(num) {
//   var sum = 0;
//   var result = [];
//   for (var i = 2; i <= num; i++) {
//     if (checkForPrime(i)) {
//       result.push(i);
//       sum = sum + i;
//     }
//   }
//   console.log(result);
//   console.log(sum);
// }
// sumOfPrime(10);

//  - Twin Prime

// function checkForTwinPair(num) {
//   if (num === 2) return true;
//   if (num % 2 === 0) return false;

//   for (var k = 3; k * k <= num; k++) {
//     if (num % k === 0) return false;
//   }

//   return true;
// }

// function twinPair(n) {
//   var result = [];
//   var twinResult = [];
//   var count = 0;
//   var sum = 0;
//   for (var i = 2; i <= n; i++) {
//     if (checkForTwinPair(i)) {
//       result.push(i);
//       sum = sum + i;
//       count++;
//     }
//   }

//   for (var j = 1; j <= result.length; j++) {
//     if (result[j + 1] - result[j] === 2) {
//       twinResult.push([result[j], result[j + 1]]);
//     }
//   }

//   console.log("All Prime ", result);
//   console.log("Twin Prime ", twinResult);
//   console.log("Sum of All Prime ", sum);
//   console.log("Range of Prime ", count);
// }
// twinPair(10);

//  - Circular Prime
// Prime number are numbers that are exactly divides by 1 and itself they  are called as prime numbers.
// GCD / HCF Digits
// Perfect Number by Digits
// Fibonacci Digits
// Happy Number by Digits
// First n natural Number by Digits
// Strong number by Digits
// HarShad Number by Digits
// Sum of Proper Divisor by digits
// Number of Trailing zeros in the factorial
