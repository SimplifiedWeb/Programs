// 014. Write a program to accept two number and print largest among them in C language

function findLargestAmong(a, b) {
  return (a > b ? a : b) || (b > a ? a : b) || (a === b ? "Equal" : null);
}

console.log("Largest Number : ", findLargestAmong(50, 40));
