// const helloWorld = ()=>{
//     // return alert("hello world!");
//     console.log("hello world!")

// }

// const byebye = () =>{
//     console.log("khuda hafiz")
//     // alert("khuda hafiz")
// }

// function check () {
//     var email = document.getElementById('email').value;
//     if(email === ""){
//         alert("Email is Required")
//     }
// }

function fillCity() {
  var cityName;
  var zipEntered = document.getElementById("zip").value;
  switch (zipEntered) {
    case "60608":
      cityName = "Chicago";
      break;
    case "68114":
      cityName = "Omaha";
      break;
    case "53212":
      cityName = "Milwaukee";
      break;
    default:
      alert("sorry you insert wrong value");
  }
  document.getElementById("city").value = cityName;
}
