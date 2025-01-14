let database = [];
function singup() {
    let firstName = document.getElementById("fName").value;
    let lastName = document.getElementById("lName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // let database = [
    //     {
    //         "first name": firstName,
    //         lastName,
    //         email: email,
    //         password
    //     }
    // ]

    window.localStorage.setItem("data", database);
    let localStorage = window.localStorage.getItem("data");
    localStorage = JSON.parse(localStorage);

    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {

            if (localStorage[i].email === email) {
                alert("user Already exist!");
                return;
            }
        }
        // JSON.stringify(database);
        // console.log(database)

        // window.location.href = './login.html';
    } else {
        let databaseValue = {
            "first name": firstName,
            lastName,
            email: email,
            password
        };
        database.push(databaseValue);
        window.localStorage.setItem("data", JSON.stringify(database));
    }
}

function login() {
    let email = document.getElementById("emailLogin").value;
    let password = document.getElementById("passwordLgin").value;
    let localStorageValue = window.localStorage.getItem("data");
    localStorageValue = JSON.parse(localStorageValue);
    for (let i = 0; i < localStorageValue.length; i++) {
        if (localStorageValue[i].email === email && localStorageValue[i].password === password) {
            alert("Hello to the Dashboard");
        } else {
            alert("Invalid Email or Password");
        }
    }
}