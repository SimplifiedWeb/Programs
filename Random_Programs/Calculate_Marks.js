// 011. Write a program to accept roll no and marks of 3 subjects of a student, Calculate total of 3 subjects and average in C language

function acceptRollNo(roll) {
  function subject(s1, s2, s3) {
    var total = s1 + s2 + s3;
    console.log("Total :", total);
    console.log("Average : ", (total / 3).toFixed(2));
  }
  subject(50, 59, 15);
}

acceptRollNo(2);
