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

function pattern12(num) {
  for (var i = 65; i < 70; i++) {
    var str = "";
    for (var j = 65; j <= i; j++) {
      str += String.fromCharCode(i) + " ";
    }

    console.log(str);
  }
}

// pattern12(4);
// Pattern-13 ✡✡✡✡✡✡
// 1          1
// 12        21
// 12       321
// 1234    4321
// 12345  54321
// 123456654321

// Pattern-14 ✡✡✡✡✡✡

// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11  12  13  14  15
// 16  17  18  19  20  21

// Pattern-15 ✡✡✡✡✡✡
// A
// A B
// A B C
// A B C D
// A B C D E
// A B C D E F

// Pattern-16 ✡✡✡✡✡✡

// A B C D E F
// A B C D E
// A B C D
// A B C
// A B
// A

// Pattern-17 ✡✡✡✡✡✡
// A
// B B
// C C C
// D D D D
// E E E E E
// F F F F F F

// Pattern-18 ✡✡✡✡✡✡
//      A
//     ABA
//    ABCBA
//   ABCDCBA
//  ABCDEDCBA
// ABCDEFEDCBA
// Pattern-19 ✡✡✡✡✡✡
// F
// E F
// D E F
// C D E F
// B C D E F
// A B C D E F
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
// Pattern-22 ✡✡✡✡✡✡
// ******
// *    *
// *    *
// *    *
// *    *
// ******

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
