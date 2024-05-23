// 029. Write a Program to accept a number and print the number in reverse order. E.g. if 1324 is the number then the output will be 4231 in C language

function reverse(n) {
  var reverseNumber = 0;

  while (n > 0) {
    var lastDigit = n % 10;
    reverseNumber = reverseNumber * 10 + lastDigit;
    n = Math.floor(n / 10);
  }
  return reverseNumber;
}
console.log(reverse(1234));
