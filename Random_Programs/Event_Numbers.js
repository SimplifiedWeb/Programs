// 028. Write a Program to print first n odd numbers in C language

function oddNumber(n) {
  for (var i = 1; i < n; i++) {
    if (i % 2 === 1) console.log(i);
  }
}
oddNumber(15);
