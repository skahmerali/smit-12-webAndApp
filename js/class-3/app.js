//  6 >= 4 = true
//  || or operator
//  && and oprator
// == right and left side should be equal
//  === right and left side should be equal  and datatype should be same

// var userValue = prompt("Enter the first digit !");

// var firstNumber = prompt("Enter the first value :");
// Number(firstNumber)
// var secondNumber = Number(prompt("Enter the second value :"));

// var firstNumber = +prompt("Enter the first value :");
// var secondNumber = +prompt("Enter the second value :");
// parseInt()
// var firstNumber = '2';
// var secondNumber = 2;

// alert(firstNumber + secondNumber);
// console.log(firstNumber)
// console.log(Number(firstNumber))

// firstNumber = Number(firstNumber);
// if (!Number(firstNumber)) {
//   if (firstNumber > secondNumber) {
//     alert("first number is greater than second number");
//   } else if (firstNumber === secondNumber) {
//     alert("both values are same");
//   } else {
//     alert("second number is greater than first number");
//   }
// }
// var userPercentage = prompt("Insert your css result");
// if (85 < userPercentage) {
//   alert("your have gotten first Position");
// }
// // else if (85 > userPercentage && userPercentage > 65) {
// //   alert("you got a B grade");
// // }
// else if (85 > userPercentage ) {
//     if(userPercentage > 65){
//         alert("you got a B grade");
//     }
// }


// if (
//   userNumber1 > userNumber2 || userNumber1 === userNumber2 &&
//   userNumber2 > userNumber1
// ) {
//   alert("congrats!");
// }
var userNumber1 = 567;
var userNumber2 = 345;

if (
  (userNumber1 < 888 || (userNumber1 > userNumber2 && userNumber2 > 888)) ||
  userNumber1 === 888
) {
  alert("congrats!");
}
