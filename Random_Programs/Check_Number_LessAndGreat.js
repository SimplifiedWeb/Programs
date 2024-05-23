// 016. Write a program to accept a number and check if it is >10, <10 or =10 in C language

function checkForLessOrMax(a) {
  return (a > 10 && "Greater") || (a < 10 ? "Smaller" : "Equal");
}

console.log(checkForLessOrMax(9));
