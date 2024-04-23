// Count the Digits  👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

// ********************************************************
// Program Start
// ********************************************************

function countDigits(num) {
  var count = 0;

  while (num > 0) {
    count = count + 1;
    num = Math.floor(num / 10);
  }
  console.log(count);
}

// countDigits(12345);

// console.log(123 % 10)
// console.log(Math.floor(123 / 10));

// ********************************************************
// Program End
// ********************************************************

// Extract the Digits  👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

// ********************************************************
// Program Start
// ********************************************************

function extractDigits(num) {
  while (num > 0) {
    var res = num % 10;
    console.log(res);
    num = Math.floor(num / 10);
  }
}

// extractDigits(1234);

// ********************************************************
// Program End
// ********************************************************

// Sum of Digits   👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

// ********************************************************
// Program Start
// ********************************************************

function sumOfDigits(num) {
  var sum = 0;
  while (num > 0) {
    var result = num % 10;
    sum = sum + result;
    num = Math.floor(num / 10);
  }
  console.log(sum);
}

// sumOfDigits(1234);

// ********************************************************
// Program End
// ********************************************************

// Reverse Digits  👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

// ********************************************************
// Program Start
// ********************************************************

function reverseDigits(num) {
  // var rev = 0;
  var str = "";
  while (num > 0) {
    // First Approach
    // var last = num % 10;
    // rev = rev * 10 + last;
    // num = Math.floor(num / 10);

    // Second Approach
    str += num % 10;
    num = Math.floor(num / 10);
  }
  console.log(str);

  // console.log(rev);
}

// reverseDigits(1234);

// ********************************************************
// Program End
// ********************************************************

// Palindrome Digits  👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

// ********************************************************
// Program Start
// ********************************************************

function palindrome(num) {
  var dup = num;
  var rev = 0;

  while (num > 0) {
    var last = num % 10;
    rev = rev * 10 + last;
    num = Math.floor(num / 10);
  }
  if (dup === rev) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// palindrome(121);

// ********************************************************
// Program End
// ********************************************************

// Armstrong Digits  👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

// ********************************************************
// Program Start
// ********************************************************

function armstrong(num) {
  var org = num;
  var result = 0;
  while (num > 0) {
    var digit = num % 10;
    result = result + Math.pow(digit, 3);
    num = Math.floor(num / 10);
  }
  if (result == org) {
    console.log("Armstrong");
  } else {
    console.log("Not an Armstrong");
  }
}

// armstrong(153);

// ********************************************************
// Program End
// ********************************************************

// Armstrong n terms 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

// ********************************************************
// Program Start
// ********************************************************

function armstrongNthTerms(num) {
  for (var i = 1; i <= num; i++) {
    var sum = 0;
    var temp = i;
    while (temp > 0) {
      var digit = temp % 10;
      sum = sum + Math.pow(digit, 3);
      temp = Math.floor(temp / 10);
    }
    if (sum === i) {
      console.log(sum);
    }
  }
}

// armstrongNthTerms(1000);

// ********************************************************
// Program End
// ********************************************************

// Factorial Digits 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

// Factorials => 4!

// ********************************************************
// Program Start
// ********************************************************

function factorial(n) {
  var store = 1;
  while (n > 0) {
    store = store * n;
    n--;
  }
  console.log(store);
}

// factorial(40);

// ********************************************************
// Program End
// ********************************************************

// Efficient Approach for larger Inputs Factorial 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

// ********************************************************
// Program Start
// ********************************************************

function factorial(n) {
  var factorialArray = [1];

  for (var i = 1; i <= n; i++) {
    factorialArray[i] = factorialArray[i - 1] * i;
  }
  console.log(factorialArray);
}

// factorial(4);

// ********************************************************
// Program End
// ********************************************************

// How you get the all the factors of a given number in an array 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

// ********************************************************
// Program Start
// ********************************************************

function getAllFactors(num) {
  var result = [];
  for (var i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      result.push(i);
      if (num / i !== i) {
        result.push(num / i);
      }
    }
  }

  console.log(result.sort((a, b) => a - b));
}

// getAllFactors(36);

// ********************************************************
// Program End
// ********************************************************

// Prime Digits  👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻
//  - Check For Prime

// ********************************************************
// Program Start
// ********************************************************

function checkForPrime(num) {
  var counter = 0;
  for (var i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      counter++;
      if (num / i !== i) {
        counter++;
      }
    }
  }
  if (counter === 2) console.log("It is prime");
  else console.log("It is not prime");
}

// checkForPrime(8);

// ********************************************************
// Program End
// ********************************************************

//  - Print all the nth Prime  👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

// ********************************************************
// Program Start
// ********************************************************

function checkForPrime(num) {
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (var k = 3; k * k <= num; k += 2) {
    if (num % k === 0) {
      return false;
    }
  }
  return true;
}

function nthPrime(num) {
  var result = [];
  for (var i = 2; i <= num; i++) {
    if (checkForPrime(i)) {
      result.push(i);
    }
  }
  console.log(result);
}

// nthPrime(20);

// ********************************************************
// Program End
// ********************************************************

//  - Print Prime Factors  👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻
// Ismai jo loop hai wo prime number ke factor ko dhond rha hai, from the smallest prime which is 2 means (even) and then after that 3 (odd)
// Prime factors mai ham koi sa bhi number as a input dete hai aur usko as a prime mai todte hai smallest 2 se then after 3 se means even and then odd.
// Bcz jo input diya gya number hai wo prime number bhi contain kartaa hai.
// ********************************************************
// Program Start
// ********************************************************

function printPrimeFactors(num) {
  var results = [];

  while (num % 2 === 0) {
    results.push(2);
    num = num / 2;
  }

  for (var i = 3; i * i <= num; i += 2) {
    if (num % i === 0) {
      results.push(i);
      num = num / i;
    }
  }
  if (num > 2) {
    results.push(num);
  }

  console.log(results);
}

// printPrimeFactors(28);

// ********************************************************
// Program End
// ********************************************************

//  - Count Prime in a range [a, b]  👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

// ********************************************************
// Program Start
// ********************************************************

function checkForPrime(num) {
  if (num === 2) return true;
  if (num <= 1) return false;
  // prime numbers are divisible by itself and 1, Not by 2 or any even numbers.
  if (num % 2 === 0) return false;

  for (var k = 3; k * k <= num; k += 2) {
    if (num % k === 0) {
      // 15 => 3 x 5 = 15
      // sure it is odd number but it has more then 2 factors so it is not a prime number
      return false;
    }
  }

  return true;
}

function checkForPrimeRange(a, b) {
  var results = [];
  var count = 0;
  for (var i = a; i <= b; i++) {
    if (checkForPrime(i)) {
      results.push(i);
      count++;
    }
  }
  console.log(results);
  console.log(count);
}

// checkForPrimeRange(10, 20);

// ********************************************************
// Program End
// ********************************************************

//  - Sum of Prime   👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

// ********************************************************
// Program Start
// ********************************************************

function checkForPrime(n) {
  if (n % 2 === 0) return false;

  for (var k = 3; k * k <= n; k += 2) {
    if (n % k === 0) {
      return false;
    }
  }

  return true;
}

function sumOfPrime(num) {
  var sum = 0;
  var result = [];
  for (var i = 2; i <= num; i++) {
    if (checkForPrime(i)) {
      result.push(i);
      sum = sum + i;
    }
  }
  console.log(result);
  console.log(sum);
}

// sumOfPrime(10);

// ********************************************************
// Program End
// ********************************************************

//  - Twin Prime   👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

// ********************************************************
// Program Start
// ********************************************************

function checkForTwinPair(num) {
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (var k = 3; k * k <= num; k++) {
    if (num % k === 0) return false;
  }

  return true;
}

function twinPair(n) {
  var result = [];
  var twinResult = [];
  var count = 0;
  var sum = 0;
  for (var i = 2; i <= n; i++) {
    if (checkForTwinPair(i)) {
      result.push(i);
      sum = sum + i;
      count++;
    }
  }

  for (var j = 1; j <= result.length; j++) {
    if (result[j + 1] - result[j] === 2) {
      twinResult.push([result[j], result[j + 1]]);
    }
  }

  console.log("All Prime ", result);
  console.log("Twin Prime ", twinResult);
  console.log("Sum of All Prime ", sum);
  console.log("Range of Prime ", count);
}

// twinPair(10);

// ********************************************************
// Program End
// ********************************************************

// GCD / HCF Digits   👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

// Greatest common division, it takes two inputs then calculate the factors and then get the common factors and whichever the highest factor will be the GCD

// ********************************************************
// Program Start
// ********************************************************

// - Finding GCD

function gcd(n1, n2) {
  var gcd = 0;

  for (var i = 1; i <= Math.min(n1, n2); i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      gcd = i;
    }
  }

  console.log(gcd);
}

// gcd(12, 24); // O(n)

// We can use the Euclidean Algorithm to make it efficient for larger inputs 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

function gcd(a, b) {
  // Euclidean algorithm states
  // gcd(a,b) = gcd (a-b, b)
  // But in the code we use % to get the exact data, what we get when we done subtraction in formula
  // where a is greater then b. a > b
  while (a > 0 && b > 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }

  if (a === 0) return b;
  else return a;
}

// console.log(gcd(9, 12));

// ********************************************************
// Program End
// ********************************************************

// Finding GCD for Multiple numbers or Given an array of numbers, Find the GCD of the Entire array. 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻 👨‍💻

// ********************************************************
// Program Start
// ********************************************************

function factorOfNumber(a, b) {
  while (a > 0 && b > 0) {
    if (a > b) a = a % b;
    else b = b % a;

    if (a === 0) return b;
    return a;
  }
}

const array = [35, 21, 15, 9];

function gcdForMultiple(array) {
  if (array.length <= 2) {
    console.log("At-least two elements to find GCD");
  }

  var currentValue = factorOfNumber(array[0], array[1]);

  for (var i = 2; i < array.length; i++) {
    currentValue = factorOfNumber(currentValue, array[i]);
  }

  console.log(currentValue);
}

// gcdForMultiple(array);

// ********************************************************
// Program End
// ********************************************************

// Find GCD of all number from 1 to n

// ********************************************************
// Program Start
// ********************************************************

function findGCD(a, b) {
  while (a > 0 && b > 0) {
    // Euclidean algorithm
    if (a > b) a = a % b;
    else b = b % a;

    if (a === 0) return b;
    return a;
  }
}

// In this we get always 1 bcz 1,2,3,4,5,6,7,8 they have only 1 common factors in between them, They always be going to be 1.
function nthGCD(num) {
  var result = 1;
  for (var i = 1; i < num; i++) {
    result = findGCD(result, i);
    if (result === 1) {
      break;
    }
  }
  console.log(result);
}

// nthGCD(12);

// ********************************************************
// Program End
// ********************************************************

// Given Two Fraction, Find GCD for numerator and denominators or Finding Common Factor using GCD

// ********************************************************
// Program Start
// ********************************************************

function commonFactor(a, b) {
  // formula a > b = (a % b) b > a = (b % a)
  // internally when we calculate by maths -> a > b = gcd (a - b, b)
  // if b > a (b - a, a) like this and once we calculate everything like subtract and we get one of the value 0 we can say that the another number is gcd,

  // So in this calculation in code, there is  intermediate steps happening like on each iteration we get the half value directly the way we get the value after subtracting the value in math.
  // For example 10 % 5 => 0 there is not intermediate steps, a > b -> (a - b, b) 10 - 5 => (5, 5) => (5-5, 5) => (0, 5)-> this is getting directly by %.
  while (a > 0 && b > 0) {
    if (a > b) a = a % b;
    else b = b % a;

    if (a === 0) return b;
    return a;
  }
}

var arr = [28, 19, 34, 12]; // we get the gcd of this and after getting that we take out the factor of that result gcd.

function gcd(arr) {
  var result = [];
  let currentValue = commonFactor(arr[0], arr[1]);
  for (var i = 2; i < arr.length; i++) {
    currentValue = commonFactor(currentValue, arr[i]);
  }

  // We dont need to go above the Square of a number so that is why we use the square root stuff in finding factors and using the n/i

  console.log(currentValue);
  for (var i = 1; i * i <= currentValue; i++) {
    if (currentValue % i === 0) {
      result.push(i);
      if (currentValue / i !== i) {
        result.push(currentValue / i);
      }
    }
  }
  console.log(result);
}

// gcd(arr);

// ********************************************************
// Program End
// ********************************************************

// Determine if Numbers are Coprime using GCD
// Co-Prime ek aisa number hota hai jo sirf khud se hee divide hota hai independent hota hai, uska koi bhi common factor nhi hota uska GCD hamesha 1 hota hai. 8 and 15 => 1;

// ********************************************************
// Program Start
// ********************************************************

function calcGCD(a, b) {
  while (a > 0 && b > 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }
  return a > 0 ? a : b;
}

function gcd(n1, n2) {
  return calcGCD(n1, n2) === 1;
}

// console.log(gcd(12, 25));

// ********************************************************
// Program End
// ********************************************************

// Perfect Number by Digits
// After getting the Factors of a number, we need to sum it and if we got the exactly the same number after sum, then we can say that it is a perfect number.

// First Approach

// ********************************************************
// Program Start
// ********************************************************

function calcFactor(num) {
  var sum = 0;
  var result = [];
  for (var i = 1; i <= num; i++) {
    if (num % i === 0 && num !== i) {
      sum = sum + i;
      result.push(i);
    }
  }
  console.log(sum);
  console.log(result);
}

// ********************************************************
// Program End
// ********************************************************

// Efficient Approach

// ********************************************************
// Program Start
// ********************************************************

function calcFactor(num) {
  var sum = 0;
  var result = [];
  for (var i = 1; i * i <= num; i++) {
    if (num % i === 0 && i !== num) {
      sum = sum + i;
      result.push(i);
      if (num / i !== i && num / i !== num) {
        sum += num / i;
        result.push(num / i);
      }
    }
  }
  console.log("Sum:", sum);
  console.log("Factors:", result);
}

// calcFactor(6);

// ********************************************************
// Program End
// ********************************************************

// Fibonacci Digit

// ********************************************************
// Program Start
// ********************************************************

function fib(num) {
  var a = 0,
    b = 1;
  var result = [a, b];
  for (var i = 2; i < num; i++) {
    const next = a + b;
    result.push(next);
    a = b;
    b = next;
  }
  console.log(result);
}

// fib(10);

// ********************************************************
// Program End
// ********************************************************

// Happy Number by Digits
// As a input single digit dete hai, and then usko two digit mai seprate karte hai and then usko square and sum karke jo result aya usse two digit mai seprate karte hai, aisa karte jaate hai jab tak result 1 na ajy and result 1 ata hai wo happy number hai ya phir unhappy number.

// ********************************************************
// Program Start
// ********************************************************

function extractDigit(n) {
  var sum = 0;
  while (n > 0) {
    var digit = n % 10;
    sum += Math.pow(digit, 2);
    n = Math.floor(n / 10);
  }
  return sum;
}

// sum => 18 => [18] => 18 =>

// when happy number get into cycle again after doing multiple sum steps we get the same values again so we are checking that does we already have that value inside the array.

// while (n !== 1) => n = extract(n)  => if(arr.includes(n)) => return false if not => arr.push(n) => run again do until it either find the value inside the array and give false or it gives 1 that's it.

function happyNumber(n) {
  var seen = new Set();

  while (n !== 1) {
    n = extractDigit(n);

    if (seen.has(n)) {
      return false;
    }

    seen.add(n);
  }
  console.log(seen);
  return true;
}

// console.log(happyNumber(19));
// console.log(happyNumber(2));

// ********************************************************
// Program End
// ********************************************************

// For nth term finding Happy number

// ********************************************************
// Program Start
// ********************************************************

// There is a function who do the extractions and give the result.
// There is a function whocheck do this sum is 1 then it is a happy number return true else return false or we check the cycle by storing each sum and if we seen that it is been in cycle again then we return false.

// There is a function who run and send the number each time. from 1 to n, and if the check function return true we add the value inside the result or else we go for the next value.

function extractDigits(n) {
  var sum = 0;
  while (n > 0) {
    var digit = n % 10;
    sum += digit * digit;
    n = Math.floor(n / 10);
  }
  return sum;
}

function isHappy(n) {
  var seen = new Set();

  while (n !== 1) {
    n = extractDigits(n);

    if (seen.has(n)) {
      return false;
    }

    seen.add(n);
  }
  console.log(seen);
  return true;
}

function nthHappyNumber(n) {
  var happyNumber = [];
  var num = 1;

  while (happyNumber.length < n) {
    if (isHappy(num)) {
      happyNumber.push(num);
    }
    num++;
  }
  console.log(happyNumber);
}

// nthHappyNumber(50);

// ********************************************************
// Program End
// ********************************************************

// First n natural Number by Digits

// ********************************************************
// Program Start
// ********************************************************

function naturalNumber(n) {
  for (var i = 1; i <= n; i++) {
    console.log(i);
  }
}

// naturalNumber(10);

// ********************************************************
// Program End
// ********************************************************

// Strong number by Digits
// Strong numbers are referred to as Factorials, Which means when we seprate each digit and then we take a factorial of each digit and then after that sum all that digit if we get the same number then we can say that it is a strong number.

// ********************************************************
// Program Start
// ********************************************************

function calculateFactorial(n) {
  var fact = 1;

  for (var i = 1; i <= n; i++) {
    fact = fact * i;
  }

  return fact;
}

const factorialCache = (function () {
  const cache = [];
  for (let i = 0; i <= 9; i++) {
    cache[i] = calculateFactorial(i);
  }
  return cache;
})();

function extractDigit(num) {
  var sum = 0;

  while (num > 0) {
    var digit = num % 10;

    sum = sum + factorialCache[digit];

    num = Math.floor(num / 10);
  }

  return sum;
}

function strongNumber(num) {
  var res = extractDigit(num);
  console.log(res);
  if (res === num) {
    console.log("It is a strong number");
  } else {
    console.log("It is not a strong number");
  }
}

// strongNumber(1455);

// ********************************************************
// Program End
// ********************************************************

// HarShad Number by Digits
// Numbers that we separate digits and then sum it and then module it by that number and if it gets the whole number then it is a harShad number

// ********************************************************
// Program Start
// ********************************************************

// Function to compute the sum of the digits of a number
function sumOfDigits(num) {
  var sum = 0;
  while (num > 0) {
    var digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }
  return sum;
}

function isHarshad(num) {
  var sum = sumOfDigits(num);
  console.log("Sum ", sum, "Num", num);
  return num % sum === 0;
}

function harShad(num) {
  if (isHarshad(num)) {
    console.log("It is a Harshad number");
  } else {
    console.log("It is not a Harshad number");
  }
}

// harShad(1729);
// harShad(11);
// harShad(21);

// ********************************************************
// Program End
// ********************************************************

// Finding nth Term of HarShad Number

// ********************************************************
// Program Start
// ********************************************************

function extractDigits(num) {
  var sum = 0;

  while (num > 0) {
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
  }

  return sum;
}

function isHarShad(num) {
  var sum = extractDigits(num);

  return num % sum === 0;
}

function harShad(n) {
  var harShadNumbers = [];
  var not_harShadNumbers = [];

  for (var i = 1; i <= n; i++) {
    if (isHarShad(i)) {
      harShadNumbers.push(i);
    } else {
      not_harShadNumbers.push(i);
    }
  }

  console.log(harShadNumbers);
  console.log(not_harShadNumbers);
}

// harShad(100);

// ********************************************************
// Program End
// ********************************************************

// Sum of Proper Divisor by digits

// ********************************************************
// Program Start
// ********************************************************

// we need take out all the factors of a given number and exclude that particular number and sum it.

function properDiv(num) {
  var sum = 0;
  var result = [];

  for (var i = 1; i * i <= num; i++) {
    if (num % i === 0 && i !== num) {
      sum = sum + i;
      result.push(i);

      if (num / i !== i && num / i !== num) {
        sum = sum + num / i;
        result.push(num / i);
      }
    }
  }
  console.log(sum);
  console.log(result);
}

// properDiv(28);

// ********************************************************
// Program End
// ********************************************************

// count the Number of Trailing zeros in the factorial

// ********************************************************
// Program Start
// ********************************************************

// 10 is the number that gives the trailing zeros and its factors are 2 and 5 to get the 10.
// So we take 5 as a factors and take out all the powers of 5 in the given input.
// Take out the quotient after dividing the n input with i.

// 5-> 1 count, 10 => 2 count, 15 -> 3 count, 20 => 4 count this is an example.

function trailingZeros(num) {
  var count = 0;

  for (var i = 5; i <= num; i *= 5) {
    count += Math.floor(num / i);
  }
  console.log(count);
}

// trailingZeros(50);

// ********************************************************
// Program End
// ********************************************************
