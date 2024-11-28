// // var ab = "SIR AHMER".toLowerCase();
// // var ab = "sirahmer".toUpperCase();
// // console.log(ab);

// var fname = prompt("enter yor name");
// var aa = fname[0].toUpperCase();
// console.log(aa);

// // console.log(fname);
// fname[0]=aa;
// console.log(fname);
// var input = document.getElementById('i').value;
// var Pak = prompt('enter word');
// var pakistan = 'Lorem ipsum dolor Pakistan sit amet consectetur adipisicing elit. Inventore aut aspernatur Pakistan Pakistan Pakistan Pakistan Pakistan Pakistan nisi dolor eum harum facilis pariatur, maxime odio Pakistan libero totam, Pakistan magnam nostrum a natus? Quasi minus ab repellendus voluptate! Pakistan';
// // console.log(pakistan.slice(0,8))

// var count = 0;
// for (var i = 0; i < pakistan.length; i++) {

//     if (pakistan.slice(i , i+input.length) == input) {
//         count++;
//     }
// }
// console.log(count);

function count() {
    var input = document.getElementById('i').value.toLocaleLowerCase();
// var Pak = prompt('enter word');
var pakistan = 'Lorem ipsum dolor Pakistan sit amet consectetur adipisicing elit. Inventore aut aspernatur Pakistan Pakistan Pakistan Pakistan Pakistan Pakistan nisi dolor eum harum facilis pariatur, maxime odio Pakistan libero totam, Pakistan magnam nostrum a natus? Quasi minus ab repellendus voluptate! Pakistan'.toLocaleLowerCase();
// console.log(pakistan.slice(0,8))

var count = 0;
for (var i = 0; i < pakistan.length; i++) {

    if (pakistan.slice(i , i+input.length) == input) {
        count++;
    }
}
console.log(count);
document.getElementById('c').innerHTML += count;
}

// console.log(count);

