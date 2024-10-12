// var let const

// var fname = "ahmer";

// fname = "ali";
// console.log(fname);

// stdName = "waqas"

// console.log(stdName)

// if (fname) {
//   console.log(fname);
//   let userName = "ali";
// }

// console.log(userName);

// alert("bsajbasjhdbabdj", userName)
// var msg = "Enter your first name"
// var userValue = prompt(msg)
var password = "123";

// ambuiguity
// if ((password.length > 1 || password == 123) && password === "123") {
//   console.log("hello world!");
//   //   if (password === 123) {
//   //     console.log("hello world!")
//   //   }
// }

// if (password.length <= 1) {
//   console.log("hello wolrd");
// } else {
//     console.log("this is running else");
// }

// if (password.length > 1) {
//   console.log("this is running if");
// } else if (password) {
//   console.log("this is running else-if");
// } else {
//     console.log("this is running else");
// }

var isFound = false;

var arrays = ["ahmer123@gmail.com", "ahmer321@gmail.com"];

// console.log(arrays[0]);

for (var i = 0; i <= arrays.length; i++) {
  console.log(arrays[i]);

  if (arrays[i] === undefined) {
    arrays.splice(arrays[i], 0, "hello world");
    console.log(arrays[i])
    break;
  }
 
  //   if(!arrays[i]){

  //   }

  //   if (arrays[i].length > 1) {
  //     console.log(arrays[i].length);
  //     console.log(arrays[i]);
  //     isFound = true;
  //   } else {
  //     // arrays[i]
  //     // console
  //     arrays.splice(arrays[i], 0, "hello world");
  //     console.log(arrays[i]);
  //   }

  console.log(arrays);
}
