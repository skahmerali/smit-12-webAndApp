// // expected Result numbers = [2, 3, 5, 7, 8, 9, 10]

// // Waqas , yaseen , sohail, bilal, shariq, arsalan, abdullah , hani

// var numbers = [5, 7, 9, 8, 10, 3, 2];

// // var slectedInput = numbers[0];
// var slectedInput;
// // var slectedInput = 9;
// // numbers[0];
// var newArray = [];
// for (var i = 0; i < numbers.length; i++) {
//   slectedInput = numbers[i];
//   numbers.shift(numbers[i]);
//   if (slectedInput > numbers) {
//     // if()
//     console.log(numbers);
//   }
//   newArray.push(slectedInput);
// }
// // console.log(newArray);

var firstNumber = 9;
var secondNumber = 10;

firstNumber = firstNumber + secondNumber;
secondNumber = firstNumber - secondNumber;
firstNumber = firstNumber - secondNumber;
console.log(firstNumber, "firstNumber"); //10
console.log(secondNumber, "secondNumber"); //9
