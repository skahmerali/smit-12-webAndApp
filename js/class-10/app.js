var arrays = [5, 2, 4, 6, 1, 3];

// for (let i = 1; i < arr.length; i++) {
//   let currentValue = arrays[i];
//   let j;
//   for (j = i - 1; j >= 0 && arrays[j] > currentValue; j--) {
//     arrays[j + 1] = arrays[j];
//   }
//   arrays[j + 1] = currentValue;
// }

// console.log(arrays)

// var result = arrays.sort(arrays);
// console.log(result);

// https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/

// var fruits = ["apple", "BanaNA", "MANGO"];
// var changingCase = [];
// for (var i = 0; i < fruits.length; i++) {
//   changingCase.push(fruits[i].toLowerCase());
//   //   changingCase.push(fruits[i].toUpperCase());
// }

// console.log(changingCase);

function search() {
  var text = document.getElementById("paragraph").innerText;
  console.log(text);
  var searchInput = document.getElementById("searchInput").value;
  console.log(searchInput);
  for (var i = 0; i < text.length; i++) {
    if (text.slice(i, i + 12) === 'adipisicingk') {
      console.log("hello world");
   
    }
  }
}
