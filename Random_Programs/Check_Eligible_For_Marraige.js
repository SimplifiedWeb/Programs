// 024. Write a Program to accept user’s marital status, gender and age to check if he/she is eligible for marriage or not.

function check(str1, str2, n) {
  return (str2 === "Female" && n >= 18) || (str2 == "Male" && n >= 21)
    ? "You're Eligible "
    : "You're not eligible";
}

console.log(check("Muslim", "Male", 19));
