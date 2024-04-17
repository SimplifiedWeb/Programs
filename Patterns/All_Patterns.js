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
function pattern11(num) {
  for (var i = 1; i <= 2 * num - 1; i++) {
    var str = "";
    var stars = i;
    if (i >= num) stars = 2 * num - i;
    for (var j = 1; j <= stars; j++) {
      str += " * ";
    }
    console.log(str);
  }
}

// Approach second
function pattern11(num) {
  for (var i = 0; i < num; i++) {
    var str = "";
    for (var j = 0; j <= i; j++) {
      str += " * ";
    }
    console.log(str);
  }
  for (var i = num; i >= 1; i--) {
    var str = "";
    for (var j = 1; j <= i; j++) {
      str += " * ";
    }
    console.log(str);
  }
}

pattern11(4);
