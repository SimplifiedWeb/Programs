// 023. Write a program to accept roll number ,and marks for three subjects, print total marks and average, also print grade by considering following conditions

function roll(a) {
  function total(a, n1, n2, n3) {
    var total, average;
    total = n1 + n2 + n3;
    console.log("Roll No " + a + " got total marks : ", total);
    average = total / 3;
    console.log("Average is :", average);

    if (average >= 60) {
      console.log(" Grade A");
    } else if (average < 60 && average > 50) {
      console.log("Grade B");
    } else if (average < 50 && average > 40) {
      console.log("Grade C");
    } else {
      console.log("Grade F");
    }
  }
  total(a, 50, 50, 80);
}
roll(2);
