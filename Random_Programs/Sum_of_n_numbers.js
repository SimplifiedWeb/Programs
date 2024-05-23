// 033. Write a program to print sum of given first n numbers in C language

function sumOfGivenNumber(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(sumOfGivenNumber(4));
