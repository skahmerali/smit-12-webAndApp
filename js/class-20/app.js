// function saveData (email, firstName, lastName, password){

// }

// var userEmail;
// var userFName;
// var userLName;
// var userPassword;
// saveData(userEmail, userFName, userLName, userPassword);
// var Email;
// var FName;
// var LName;
// var Password;
// saveData(Email, FName, LName, Password);

var parentElement = document.getElementById("parent");
// var parentElement = document.getElementById("parent").childNodes[0];
// var parentElement = document.getElementById("parent").childNodes[1].childNodes[0];
// console.log(parentElement.nodeName);
// console.log(parentElement.nodeType);
// console.log(parentElement);
// console.log(parentElement.nodeValue);
// console.log(parentElement.value);

// console.log(parentElement.hasAttribute("class"))

// var attributeName = parentElement.getAttribute("id");
// console.log(attributeName);
// attributeName = parentElement.getAttribute("id");
// parentElement.setAttribute("class","mainDiv");
// attributeName = parentElement.getAttribute("class");
// console.log(attributeName);
console.log(parentElement);
var spanElement= document.createElement("span");
var newTxt = document.createTextNode("Hello!");
spanElement.appendChild(newTxt)
console.log(spanElement);

parentElement.appendChild(spanElement);
console.log(parentElement);
