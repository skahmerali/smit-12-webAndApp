// const axios = require('axios/dist/browser/axios.cjs').default; // browser



// function getData() {

//     // Make a request for a user with a given ID
//     axios.get('https://dummyjson.com/test')
//         .then(function (response) {
//             const result = response;
//             // handle success
//             console.log(response);
//         })
//         .catch(function (error) {
//             // handle error
//             console.log(error);
//         })

// }

var xhttp = new XMLHttpRequest();
function getData() {

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            // document.getElementById("demo").innerHTML = xhttp.responseText;
            console.log(xhttp.response);
            console.log(xhttp);
            console.log(xhttp.responseText);
        }
    };
    xhttp.open("GET", 'https://jsonplaceholder.typicode.com/todos/100', true)
    xhttp.send();
    // .then((data) => {
    //     console.log(data.json())
    // })
    // .catch((err) => {

    // })
}