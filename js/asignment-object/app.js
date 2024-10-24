var users = [];

function signup() {
    // if(localStorage){

    // }else{

    // }
  var user = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    address: document.getElementById("address").value,
  };
  users.push(user);
  console.log(users);
}
