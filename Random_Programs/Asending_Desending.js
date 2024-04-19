// 021. Write a program to accept three numbers from user and print them in ascending and descending order in C language

function ascAndDesc(a, b, c) {
  if (a >= b && a >= c) {
    if (a >= b) {
      console.log("Ascending order :", b, c, a);
      console.log("Descending order :", a, c, b);
    }
  } else if (b >= a && b >= c) {
    if (b >= c) {
      console.log("Ascending order :", a, c, b);
      console.log("Descending order :", b, c, a);
    }
  } else if (c >= a && c >= b) {
    if (c >= a) {
      console.log("Ascending order :", a, b, c);
      console.log("Descending order :", c, b, a);
    }
  }
}

ascAndDesc(0, 2, 1);
