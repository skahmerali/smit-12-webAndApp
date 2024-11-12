var data = [];
function signup() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var user = {
    "first name": fname,
    lname: lname,
    phone: phone,
    email,
    password,
  };

  data.push(user);
  //   data = JSON.stringify(data);

  var localStorageData = window.localStorage.setItem(
    "data",
    JSON.stringify(data)
  );
  console.log(data);
  window.location.href = "login/login.html";
}
function login() {
  var loginEmail = document.getElementById("loginEmail").value;
  var loginPassword = document.getElementById("loginPassword").value;

  var userData = window.localStorage.getItem("data");
  console.log(userData);
  userData = JSON.parse(userData);

  for (var i = 0; i < userData.length; i++) {
    if (
      userData[i].email === loginEmail &&
      userData[i].password === loginPassword
    ) {
      if (userData[i].role === "admin") {
      }else{
        userData[i]
      }
    }
  }
}
