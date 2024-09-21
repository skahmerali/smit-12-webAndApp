// var num = 8298298
// var userInput = "assada" 87576

// var studentsData = ["ahmer", 1234567890, "423423423"];
// console.log(studentsData);
// var userValue = prompt("Enter Your Roll Number!");
// studentsData.push(userValue);
// console.log(studentsData);
// // console.log(studentsData[1] , studentsData[0])
// studentsData.pop();
// studentsData.pop();

// console.log(studentsData);
var studensNameArrays = [];
var studensRolNumberArrays = [];

// var studentsNameValue = prompt("Enter Your Full Name :");
// var studentsRollNumValue = prompt("Enter Your Roll Number :");

// studensName.push(studentsNameValue);
// studensRolNumber.push(studentsRollNumValue);

// console.log(studensName);
// console.log(studensRolNumber);

function insertValue() {
  var studentsNameValue = document.getElementById("studetsName").value;

  var studentsRollNumValue = document.getElementById("studetsRollNum").value;

  studensNameArrays.push(studentsNameValue);
  studensRolNumberArrays.unshift(studentsRollNumValue);
  // var storeNameData = document.getElementById('result-name').innerHTML;

  document.getElementById("result-name").innerHTML = studensNameArrays;
  document.getElementById("result-rollNumber").innerHTML =
    studensRolNumberArrays;

  console.log(studensNameArrays.length);
  // console.log(studensNameArrays);
  // console.log(studensRolNumberArrays);
  // return false;
}
// insertValue();
