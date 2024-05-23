// 015. Write a program to accept a number and print if the number is Positive/Negative in C language

function posOrNeg(a, b) {
  return (
    (a >= 1 ? console.log("A is Positive") : console.log("A is Negative")) ||
    (b >= 1 ? console.log("B is Positive") : console.log("B is Negative")) ||
    a == 0 ||
    (b == 0 && console.log("Given Number is neither Positive nor negative "))
  );
}

posOrNeg(10, 0);
