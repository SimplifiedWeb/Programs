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
//   for (var i = 1; i * i <= num; i++) {
//     if (num % i === 0) {
//       result.push(i);
//       if (num / i !== i) {
//         result.push(num / i);
//       }
//     }
//   }

//   console.log(result.sort((a, b) => a - b));
// }

// getAllFactors(36);

// Prime Digits  👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻
//  - Check For Prime

// function checkForPrime(num) {
//   var counter = 0;
//   for (var i = 1; i * i <= num; i++) {
//     if (num % i === 0) {
//       counter++;
//       if (num / i !== i) {
//         counter++;
//       }
//     }
//   }
//   if (counter === 2) console.log("It is prime");
//   else console.log("It is not prime");
// }
// checkForPrime(8);

//  - Print all the nth Prime  👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

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

//  - Print Prime Factors  👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

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

//  - Count Prime in a range [a, b]  👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

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

//  - Sum of Prime   👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

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

//  - Twin Prime   👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

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

// GCD / HCF Digits   👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

// Greatest common division, it takes two inputs then calculate the factors and then get the common factors and whichever the highest factor will be the GCD

// - Finding GCD
// function gcd(n1, n2) {
//   var gcd = 0;

//   for (var i = 1; i <= Math.min(n1, n2); i++) {
//     if (n1 % i === 0 && n2 % i === 0) {
//       gcd = i;
//     }
//   }

//   console.log(gcd);
// }

// gcd(12, 24); // O(n)

// We can use the Euclidean Algorithm to make it efficient for larger inputs
// function gcd(a, b) {
//   // Euclidean algorithm states
//   // gcd(a,b) = gcd (a-b, b)
//   // But in the code we use % to get the exact data what we get when we done subtraction in formula
//   // where a is greater then b. a > b
//   while (a > 0 && b > 0) {
//     if (a > b) {
//       a = a % b;
//     } else {
//       b = b % a;
//     }
//   }

//   if (a === 0) return b;
//   else return a;
// }

// console.log(gcd(9, 12));

// Finding GCD for Multiple numbers or Given an array of numbers, Find the GCD of the Entire array.

// function factorOfNumber(a, b) {
//   while (a > 0 && b > 0) {
//     if (a > b) a = a % b;
//     else b = b % a;

//     if (a === 0) return b;
//     return a;
//   }
// }

// const array = [35, 21, 15, 9];

// function gcdForMultiple(array) {
//   if (array.length <= 2) {
//     console.log("At-least two elements to find GCD");
//   }

//   var currentValue = factorOfNumber(array[0], array[1]);

//   for (var i = 2; i < array.length; i++) {
//     currentValue = factorOfNumber(currentValue, array[i]);
//   }

//   console.log(currentValue);
// }

// gcdForMultiple(array);

// Find GCD of all number from 1 to n

// function findGCD(a, b) {
//   while (a > 0 || b > 0) {
//     // Euclidean algorithm
//     if (a > b) a = a % b;
//     else b = b % a;

//     if (a === 0) return b;
//     return a;
//   }
// }
// In this we get always 1 bcz 1,2,3,4,5,6,7,8 they have only 1 common factors in between them, They always be going to be 1.
// function nthGCD(num) {
//   var result = 1;
//   for (var i = 1; i < num; i++) {
//     result = findGCD(result, i);
//     if (result === 1) {
//       break;
//     }
//   }
//   console.log(result);
// }
// nthGCD(12);

// Given Two Fraction, Find GCD for numerator and denominators or Finding Common Factor using GCD

// function commonFactor(a, b) {
//   // formula a > b = (a % b) b > a = (b % a)
//   // internally when we calculate by maths -> a > b = gcd (a - b, b)
//   // if b > a (b - a, a) like this and once we calculate everything like subtract and we get one of the value 0 we can say that the another number is gcd,

//   // So in this calculation in code, there is  intermediate steps happening like on each iteration we get the half value directly the way we get the value after subtracting the value in math.
//   // For example 10 % 5 => 0 there is not intermediate steps, a > b -> (a - b, b) 10 - 5 => (5, 5) => (5-5, 5) => (0, 5)-> this is getting directly by %.
//   while (a > 0 && b > 0) {
//     if (a > b) a = a % b;
//     else b = b % a;

//     if (a === 0) return b;
//     return a;
//   }
// }
// var arr = [28, 19, 34, 12];

// function gcd(arr) {
//   var result = [];
//   let currentValue = commonFactor(arr[0], arr[1]);
//   for (var i = 2; i < arr.length; i++) {
//     currentValue = commonFactor(currentValue, arr[i]);
//   }
//   console.log(currentValue);
//   for (var i = 1; i * i <= currentValue; i++) {
//     if (currentValue % i === 0) {
//       result.push(i);
//       if (currentValue / i !== i) {
//         result.push(currentValue / i);
//       }
//     }
//   }
//   console.log(result);
// }
// gcd(arr);

// Determine if Numbers are Coprime using GCD
// Co-Prime ek aisa number hota hai jo sirf khud se hee divide hota hai independent hota hai, uska koi bhi common factor nhi hota uska GCD hamesha 1 hota hai. 8 and 15 => 1;

// function calcGCD(a, b) {
//   while (a > 0 && b > 0) {
//     if (a > b) {
//       a = a % b;
//     } else {
//       b = b % a;
//     }
//   }
//   return a > 0 ? a : b;
// }

// function gcd(n1, n2) {
//   return calcGCD(n1, n2) === 1;
// }
// console.log(gcd(12, 25));

// Perfect Number by Digits
// After getting the Factors of a number, we need to sum it and if we got the exactly the same number of the factor then we can say that it is a perfect number.

// function calcFactor(num) {
//   var sum = 0;
//   var result = [];
//   for (var i = 1; i <= num; i++) {
//     if (num % i === 0 && num !== i) {
//       sum = sum + i;
//       result.push(i);
//     }
//   }
//   console.log(sum);
//   console.log(result);
// }

// function calcFactor(num) {
//   var sum = 0;
//   var result = [];
//   for (var i = 1; i * i <= num; i++) {
//     if (num % i === 0 && i !== num) {
//       sum += i;
//       result.push(i);
//       if (num / i !== i && num / i !== num) {
//         sum += num / i;
//         result.push(num / i);
//       }
//     }
//   }
//   console.log("Sum:", sum);
//   console.log("Factors:", result);
// }

// calcFactor(6);

// Fibonacci Digits
// Happy Number by Digits
// First n natural Number by Digits
// Strong number by Digits
// HarShad Number by Digits
// Sum of Proper Divisor by digits
// Number of Trailing zeros in the factorial
