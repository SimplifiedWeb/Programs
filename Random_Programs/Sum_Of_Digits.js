// 030. Write a Program to accept a number and print sum of it’s digits in C language

function sum(m) {
  var sum = 0;

  while (m > 0) {
    var digit = m % 10;
    sum = sum + digit;
    m = Math.floor(m / 10);
  }
  return sum;
}

console.log(sum(25));
