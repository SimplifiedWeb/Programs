// ================ Pattern 1 Start ================
// Pattern - 1
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *

console.log("Pattern-1");
function pattern1(num) {
  for (var i = 0; i < num; i++) {
    var str = "";
    for (var j = 0; j < num; j++) {
      str += " * ";
    }
    console.log(str);
    console.log("\n");
  }
}

// pattern1(4);
// ================ Pattern 1 End ================

// ================ Pattern 2 Start ================
// Patter-2 ✡✡✡✡✡✡
// *
// * *
// * * *
// * * * *
// * * * * *

function pattern2(num) {
  for (var i = 0; i < num; i++) {
    var str = "";

    for (var j = 0; j <= i; j++) {
      str += " * ";
    }
    console.log(str);
    // console.log("\n");
  }
}

// pattern2(4);
// ================ Pattern 2 End ================

// ================ Pattern 3 Start ================
// Patter-3 ✡✡✡✡✡✡
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6

function pattern3(num) {
  for (var i = 1; i < num; i++) {
    var str = "";
    for (var j = 1; j <= i; j++) {
      str += "  " + j;
    }
    console.log(str);
  }
}

// pattern3(7);
// ================ Pattern 3 End ================

// ================ Pattern 4 Start ================
// Patter-4 ✡✡✡✡✡✡
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6

function pattern4(num) {
  for (var i = 1; i <= num; i++) {
    var str = "";
    for (var j = 1; j <= i; j++) {
      str += "  " + i;
    }
    console.log(str);
  }
}

// pattern4(6);
// ================ Pattern 4 End ================

// ================ Pattern 5 Start ================
// Patter-5 ✡✡✡✡✡✡
// * * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

function pattern5(num) {
  for (var i = 0; i < num; i++) {
    var str = "";

    for (var j = num; j > i; j--) {
      str += " * ";
    }
    console.log(str);
  }
}

// pattern5(5);
// ================ Pattern 5 End ================

// ================ Pattern 6 Start ================
// Patter-6 ✡✡✡✡✡✡
// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

function pattern6(num) {
  for (var i = num; i > 0; i--) {
    var str = "";

    for (var j = 1; j < i; j++) {
      str += "  " + j;
    }
    console.log(str);
  }
}

// pattern6(7);
// ================ Pattern 6 End ================

// ================ Pattern 7 Start ================
// Patter-7 ✡✡✡✡✡✡
//    *
//   * *
//  * * *
// * * * *
//* * * * *

function pattern8(num) {
  for (var i = 0; i < num; i++) {
    var str = "";

    // Spaces before stars
    for (var j = 0; j < num - i - 1; j++) {
      str += " ";
    }

    // Stars
    for (var k = 0; k < 2 * i + 1; k++) {
      str += "*";
    }

    // Spaces after stars
    for (var j = 0; j < num - i - 1; j++) {
      str += " ";
    }
    console.log(str);
  }
}

// pattern8(5);
// ================ Pattern 7 End ================

// ================ Pattern 8 Start ================
// Patter-9 ✡✡✡✡✡✡
// ***********
//  *********
//   *******
//    *****
//     ***
//      *

function pattern9(num) {
  for (var i = 0; i < num; i++) {
    var str = "";

    // spaces
    for (var j = 0; j < i; j++) {
      str += " ";
    }

    // stars
    for (var k = 0; k < 2 * num - (2 * i + 1); k++) {
      str += "*";
    }

    // spaces
    for (var j = 0; j < i; j++) {
      str += " ";
    }
    console.log(str);
  }
}

// pattern9(5);
// ================ Pattern 8 End ================

// ================ Pattern 9 Start ================
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

function pattern10(num) {
  // Top Side

  for (var i = 0; i < num; i++) {
    var str = "";

    for (var j = 0; j < num - i - 1; j++) {
      str += " ";
    }

    for (var k = 0; k < 2 * i + 1; k++) {
      str += "*";
    }

    for (var j = 0; j < num - i - 1; j++) {
      str += " ";
    }
    console.log(str);
  }

  // Bottom Side

  for (var i = 0; i < num; i++) {
    var str = "";

    for (var j = 0; j < i; j++) {
      str += " ";
    }

    for (var k = 0; k < 2 * num - (2 * i + 1); k++) {
      str += "*";
    }

    for (var j = 0; j < i; j++) {
      str += " ";
    }
    console.log(str);
  }
}

// pattern10(5);
// ================ Pattern 9 End ================

// ================ Pattern 10 Start ================
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

// pattern11(4);
// ================ Pattern 10 End ================

// ================ Pattern 11 Start ================
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
// ================ Pattern 11 End ================

// ================ Pattern 12 Start ================
// Pattern-13 ✡✡✡✡✡✡
// 1          1
// 12        21
// 123      321
// 1234    4321
// 12345  54321
// 123456654321

function pattern13(num) {
  for (var i = 1; i <= num; i++) {
    var str = "";
    // solving tons of equations and simple maths to calculate numbers you can easily do this. By making you'r own formula.
    var spaces = 2 * (2 * num - 2 * i);

    for (var k = 1; k <= i; k++) {
      str += k + " ";
    }

    // Spaces
    for (var j = 1; j <= spaces; j++) {
      str += " ";
    }

    for (var k = i; k >= 1; k--) {
      str += k + " ";
    }

    console.log(str);
  }
}

// pattern13(4);
// ================ Pattern 12 End ================

// ================ Pattern 13 Start ================
// Pattern-14 ✡✡✡✡✡✡

// 1
// 2  3
// 4  5  6
// 7  8  9  10
// 11  12  13  14  15
// 16  17  18  19  20  21

function pattern14(num) {
  let count = 1;
  for (let i = 1; i <= num; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += count + " ";
      count++;
    }
    console.log(str);
  }
}

// pattern14(4);
// ================ Pattern 13 End ================

// ================ Pattern 14 Start ================
// Pattern-15 ✡✡✡✡✡✡
// A
// A B
// A B C
// A B C D
// A B C D E
// A B C D E F

function pattern15(num) {
  for (var i = 65; i <= 70; i++) {
    var str = "";

    for (var k = 65; k <= i; k++) {
      str += String.fromCharCode(k) + " ";
    }

    console.log(str);
  }
}

// pattern15(4);
// ================ Pattern 14 End ================

// ================ Pattern 15 Start ================
// Pattern-16 ✡✡✡✡✡✡

// A B C D E F
// A B C D E
// A B C D
// A B C
// A B
// A

function pattern16(num) {
  for (var i = 70; i >= 65; i--) {
    var str = "";

    for (k = 65; k <= i; k++) {
      str += String.fromCharCode(k) + " ";
    }
    console.log(str);
  }
}

// pattern16(4);
// ================ Pattern 15 End ================

// ================ Pattern 16 Start ================
// Pattern-17 ✡✡✡✡✡✡
// A
// B B
// C C C
// D D D D
// E E E E E
// F F F F F F

function pattern17(num) {
  for (var i = 65; i <= 70; i++) {
    var str = "";

    for (var k = 65; k <= i; k++) {
      str += String.fromCharCode(i) + " ";
    }

    console.log(str);
  }
}
// pattern17(4);
// ================ Pattern 16 End ================

// ================ Pattern 17 Start ================
// Pattern-18 ✡✡✡✡✡✡
//     A
//    ABC
//   ABCDE
//  ABCDEFG
// ABCDEFGHI

function pattern18(num) {
  for (var i = 0; i < num; i++) {
    var str = "";
    for (var j = 0; j < num - i - 1; j++) {
      str += " ";
    }

    // Stars
    for (var k = 0; k < 2 * i + 1; k++) {
      str += String.fromCharCode(65 + k);
    }

    // Spaces after stars
    for (var j = 0; j < num - i - 1; j++) {
      str += " ";
    }

    console.log(str);
  }
}
// pattern18(5);
// ================ Pattern 17 End ================

// ================ Pattern 18 Start ================
// Pattern-19 ✡✡✡✡✡✡
// F
// E F
// D E F
// C D E F
// B C D E F
// A B C D E F

function pattern19(num) {
  for (var i = 0; i < num; i++) {
    var str = "";

    for (var j = i; j >= 0; j--) {
      str += String.fromCharCode(70 - j) + " ";
    }
    console.log(str);
  }
}

// pattern19(6);
// ================ Pattern 18 End ================

// ================ Pattern 19 Start ================
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

function pattern19(num) {
  // Upper Half

  for (var i = 1; i <= num; i++) {
    var str = "";

    for (var j = num; j >= i; j--) {
      str += "*";
    }

    for (var k = 1; k < 2 * i - 1; k++) {
      str += " ";
    }

    for (var j = num; j >= i; j--) {
      str += "*";
    }

    console.log(str);
  }

  // Lower Half

  for (var i = 1; i <= num; i++) {
    var str = "";

    for (var j = 1; j <= i; j++) {
      str += "*";
    }

    for (var k = 1; k <= 2 * num - 2 * i; k++) {
      str += " ";
    }

    for (var j = i; j >= 1; j--) {
      str += "*";
    }

    console.log(str);
  }
}

// pattern19(5);
// ================ Pattern 19 End ================

// ================ Pattern 20 Start ================
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

function pattern21(num) {
  var spaces = 2 * num - 2;
  for (var i = 1; i <= 2 * num - 1; i++) {
    var str = "";
    var stars = i;
    if (i > num) stars = 2 * num - i;

    for (var j = 1; j <= stars; j++) {
      str += "*";
    }

    for (var k = 1; k <= spaces; k++) {
      str += " ";
    }

    for (var j = 1; j <= stars; j++) {
      str += "*";
    }
    console.log(str);
    if (i < num) spaces -= 2;
    else spaces += 2;
  }
}
// pattern21(5);
// ================ Pattern 20 End ================
