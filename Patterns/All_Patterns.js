// Pattern - 1
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// console.log("Pattern-1");
// function pattern1(num) {
//   for (var i = 0; i < num; i++) {
//     var str = "";
//     for (var j = 0; j < num; j++) {
//       str += " * ";
//     }
//     console.log(str);
//     console.log("\n");
//   }
// }

// pattern1(4);

// Patter-2 ✡✡✡✡✡✡
// *
// * *
// * * *
// * * * *
// * * * * *

// function pattern2(num) {
//   for (var i = 0; i < num; i++) {
//     var str = "";

//     for (var j = 0; j <= i; j++) {
//       str += " * ";
//     }
//     console.log(str);
//     // console.log("\n");
//   }
// }

// pattern2(4);

// Patter-3 ✡✡✡✡✡✡
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6

// function pattern3(num) {
//   for (var i = 1; i < num; i++) {
//     var str = "";
//     for (var j = 1; j <= i; j++) {
//       str += "  " + j;
//     }
//     console.log(str);
//   }
// }

// pattern3(7);

// Patter-4 ✡✡✡✡✡✡
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6

// function pattern4(num) {
//   for (var i = 1; i <= num; i++) {
//     var str = "";
//     for (var j = 1; j <= i; j++) {
//       str += "  " + i;
//     }
//     console.log(str);
//   }
// }

// pattern4(6);

// Patter-5 ✡✡✡✡✡✡
// * * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

// function pattern5(num) {
//   for (var i = 0; i < num; i++) {
//     var str = "";

//     for (var j = num; j > i; j--) {
//       str += " * ";
//     }
//     console.log(str);
//   }
// }

// pattern5(5);

// Patter-6 ✡✡✡✡✡✡
// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

// function pattern6(num) {
//   for (var i = num; i > 0; i--) {
//     var str = "";

//     for (var j = 1; j < i; j++) {
//       str += "  " + j;
//     }
//     console.log(str);
//   }
// }

// pattern6(7);

// Patter-7 ✡✡✡✡✡✡
//    *
//   * *
//  * * *
// * * * *
//* * * * *

// function pattern8(num) {
//   for (var i = 0; i < num; i++) {
//     var str = "";

//     // Spaces before stars
//     for (var j = 0; j < num - i - 1; j++) {
//       str += " ";
//     }

//     // Stars
//     for (var k = 0; k < 2 * i + 1; k++) {
//       str += "*";
//     }

//     // Spaces after stars
//     for (var j = 0; j < num - i - 1; j++) {
//       str += " ";
//     }
//     console.log(str);
//   }
// }

// pattern8(5);

// Patter-9 ✡✡✡✡✡✡
// ***********
//  *********
//   *******
//    *****
//     ***
//      *

// function pattern9(num) {
//   for (var i = 0; i < num; i++) {
//     var str = "";

//     // spaces
//     for (var j = 0; j < i; j++) {
//       str += " ";
//     }

//     // stars
//     for (var k = 0; k < 2 * num - (2 * i + 1); k++) {
//       str += "*";
//     }

//     // spaces
//     for (var j = 0; j < i; j++) {
//       str += " ";
//     }
//     console.log(str);
//   }
// }

// pattern9(5);

// Pattern-10 ✡✡✡✡✡✡
//    *
//   * *
//  * * *
// * * * *
//* * * * *
// * * * *
//  * * *
//   * *
//    *

// Tip ---- Practice solving Equations of Algebra you can understand better.

// function pattern10(num) {
//   // Top Side

//   for (var i = 0; i < num; i++) {
//     var str = "";

//     for (var j = 0; j < num - i - 1; j++) {
//       str += " ";
//     }

//     for (var k = 0; k < 2 * i + 1; k++) {
//       str += "*";
//     }

//     for (var j = 0; j < num - i - 1; j++) {
//       str += " ";
//     }
//     console.log(str);
//   }

//   // Bottom Side

//   for (var i = 0; i < num; i++) {
//     var str = "";

//     for (var j = 0; j < i; j++) {
//       str += " ";
//     }

//     for (var k = 0; k < 2 * num - (2 * i + 1); k++) {
//       str += "*";
//     }

//     for (var j = 0; j < i; j++) {
//       str += " ";
//     }
//     console.log(str);
//   }
// }

// pattern10(5);

// Pattern-11 ✡✡✡✡✡✡

// *
// **
// ***
// ****
// *****
// ******
// *****
// ****
// ***
// **
// *

// Approach first
// function pattern11(num) {
//   for (var i = 1; i <= 2 * num - 1; i++) {
//     var str = "";
//     var stars = i;
//     if (i >= num) stars = 2 * num - i;
//     for (var j = 1; j <= stars; j++) {
//       str += " * ";
//     }
//     console.log(str);
//   }
// }

// // Approach second
// function pattern11(num) {
//   for (var i = 0; i < num; i++) {
//     var str = "";
//     for (var j = 0; j <= i; j++) {
//       str += " * ";
//     }
//     console.log(str);
//   }
//   for (var i = num; i >= 1; i--) {
//     var str = "";
//     for (var j = 1; j <= i; j++) {
//       str += " * ";
//     }
//     console.log(str);
//   }
// }

// pattern11(4);

// Pattern-12 ✡✡✡✡✡✡

// 1
// 01
// 101
// 0101
// 10101
// 010101

// function pattern12(num) {
//   for (var i = 65; i < 70; i++) {
//     var str = "";
//     for (var j = 65; j <= i; j++) {
//       str += String.fromCharCode(i) + " ";
//     }

//     console.log(str);
//   }
// }

// pattern12(4);
// Pattern-13 ✡✡✡✡✡✡
// 1          1
// 12        21
// 123      321
// 1234    4321
// 12345  54321
// 123456654321

// function pattern13(num) {
//   for (var i = 1; i <= num; i++) {
//     var str = "";
//     // solving tons of equations and simple maths to calculate numbers you can easily do this. By making you'r own formula.
//     var spaces = 2 * (2 * num - 2 * i);

//     for (var k = 1; k <= i; k++) {
//       str += k + " ";
//     }

//     // Spaces
//     for (var j = 1; j <= spaces; j++) {
//       str += " ";
//     }

//     for (var k = i; k >= 1; k--) {
//       str += k + " ";
//     }

//     console.log(str);
//   }
// }

// pattern13(4);

// Pattern-14 ✡✡✡✡✡✡

// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11  12  13  14  15
// 16  17  18  19  20  21

// function pattern14(num) {
//   let count = 1;
//   for (let i = 1; i <= num; i++) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//       str += count + " ";
//       count++;
//     }
//     console.log(str);
//   }
// }

// pattern14(4);

// Pattern-15 ✡✡✡✡✡✡
// A
// A B
// A B C
// A B C D
// A B C D E
// A B C D E F

// function pattern15(num) {
//   for (var i = 65; i <= 70; i++) {
//     var str = "";

//     for (var k = 65; k <= i; k++) {
//       str += String.fromCharCode(k) + " ";
//     }

//     console.log(str);
//   }
// }

// pattern15(4);

// Pattern-16 ✡✡✡✡✡✡

// A B C D E F
// A B C D E
// A B C D
// A B C
// A B
// A

// function pattern16(num) {
//   for (var i = 70; i >= 65; i--) {
//     var str = "";

//     for (k = 65; k <= i; k++) {
//       str += String.fromCharCode(k) + " ";
//     }
//     console.log(str);
//   }
// }

// pattern16(4);

// Pattern-17 ✡✡✡✡✡✡
// A
// B B
// C C C
// D D D D
// E E E E E
// F F F F F F

// function pattern17(num) {
//   for (var i = 65; i <= 70; i++) {
//     var str = "";

//     for (var k = 65; k <= i; k++) {
//       str += String.fromCharCode(i) + " ";
//     }

//     console.log(str);
//   }
// }
// pattern17(4);

// Pattern-18 ✡✡✡✡✡✡
//     A
//    ABC
//   ABCDE
//  ABCDEFG
// ABCDEFGHI

// function pattern18(num) {
//   for (var i = 0; i < num; i++) {
//     var str = "";
//     for (var j = 0; j < num - i - 1; j++) {
//       str += " ";
//     }

//     // Stars
//     for (var k = 0; k < 2 * i + 1; k++) {
//       str += String.fromCharCode(65 + k);
//     }

//     // Spaces after stars
//     for (var j = 0; j < num - i - 1; j++) {
//       str += " ";
//     }

//     console.log(str);
//   }
// }
// pattern18(5);

// Pattern-19 ✡✡✡✡✡✡
// F
// E F
// D E F
// C D E F
// B C D E F
// A B C D E F

// function pattern19(num) {
//   for (var i = 0; i < num; i++) {
//     var str = "";

//     for (var j = i; j >= 0; j--) {
//       str += String.fromCharCode(70 - j) + " ";
//     }
//     console.log(str);
//   }
// }

// pattern19(6);
// Pattern-20 ✡✡✡✡✡✡
// ************
// *****  *****
// ****    ****
// ***      ***
// **        **
// *          *
// *          *
// **        **
// ***      ***
// ****    ****
// *****  *****
// ************

// function pattern19(num) {
//   // Upper Half

//   for (var i = 1; i <= num; i++) {
//     var str = "";

//     for (var j = num; j >= i; j--) {
//       str += "*";
//     }

//     for (var k = 1; k < 2 * i - 1; k++) {
//       str += " ";
//     }

//     for (var j = num; j >= i; j--) {
//       str += "*";
//     }

//     console.log(str);
//   }

//   // Lower Half

//   for (var i = 1; i <= num; i++) {
//     var str = "";

//     for (var j = 1; j <= i; j++) {
//       str += "*";
//     }

//     for (var k = 1; k <= 2 * num - 2 * i; k++) {
//       str += " ";
//     }

//     for (var j = i; j >= 1; j--) {
//       str += "*";
//     }

//     console.log(str);
//   }
// }

// pattern19(5);

// Pattern-21 ✡✡✡✡✡✡
// *          *
// **        **
// ***      ***
// ****    ****
// *****  *****
// ************
// *****  *****
// ****    ****
// ***      ***
// **        **
// *          *

// function pattern21(num) {
//   var spaces = 2 * num - 2;
//   for (var i = 1; i <= 2 * num - 1; i++) {
//     var str = "";
//     var stars = i;
//     if (i > num) stars = 2 * num - i;

//     for (var j = 1; j <= stars; j++) {
//       str += "*";
//     }

//     for (var k = 1; k <= spaces; k++) {
//       str += " ";
//     }

//     for (var j = 1; j <= stars; j++) {
//       str += "*";
//     }
//     console.log(str);
//     if (i < num) spaces -= 2;
//     else spaces += 2;
//   }
// }
// pattern21(5);

// Pattern-22 ✡✡✡✡✡✡
// ******
// *    *
// *    *
// *    *
// *    *
// ******

function pattern22(num) {
  for (var i = 0; i < num; i++) {
    var str = "";
    for (var j = 0; j < num; j++) {
      if (i == 0 || j == 0 || i == num - 1 || j === num - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
}

pattern22(4);

// Pattern-23 ✡✡✡✡✡✡
// 6 6 6 6 6 6 6 6 6 6 6
// 6 5 5 5 5 5 5 5 5 5 6
// 6 5 4 4 4 4 4 4 4 5 6
// 6 5 4 3 3 3 3 3 4 5 6
// 6 5 4 3 2 2 2 3 4 5 6
// 6 5 4 3 2 1 2 3 4 5 6
// 6 5 4 3 2 2 2 3 4 5 6
// 6 5 4 3 3 3 3 3 4 5 6
// 6 5 4 4 4 4 4 4 4 5 6
// 6 5 5 5 5 5 5 5 5 5 6
// 6 6 6 6 6 6 6 6 6 6 6

// Pattern-24 ✡✡✡✡✡✡
//     1
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1

// Pattern-25 ✡✡✡✡✡✡

// ******
// *    *
// *    *
// ******
