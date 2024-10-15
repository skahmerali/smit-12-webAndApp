// var pomptUser = prompt("Enter your desire day");

// pomptUser = pomptUser.toLowerCase();
// switch (pomptUser) {
//   case "sat":
//     alert("This is Saturday");
//     break;
//   case "sun":
//     alert("This is Sunday");
//     break;
//   default:
//     alert("invalid day");
// }

// var result = (pomptUser - 100) * 10 + 1000;
// console.log(pomptUser);

// switch (pomptUser) {
//   case "11":
//     console.log(pomptUser);
//     alert("the number is given greater than 10");
//     break;
//   case 100:
//     alert("the number is equll to 100");
// }

// var obj = {
//         name : 'ahmer',
//         age : '28',
//         gender: 'male',
//         nationality: "pakistan"
// }

var stds = [
  {
    name: "waqas",
    age: "18",
    gender: "male",
    nationality: "pakistan",
    institutes : ['SMIT', "FUUAST"]
  },
  {
    name: "yaseen",
    age: "18",
    gender: "male",
    nationality: "pakistan",
  },
  {
    name: "shariq",
    age: "18",
    gender: "male",
    nationality: "India",
  },
];

// console.log(stds[2].nationality)

for (var i = 0; i <= stds.length; i++ ){
    if(stds[i].name === "yaseen"){
        console.log(stds[i])
    }

}
