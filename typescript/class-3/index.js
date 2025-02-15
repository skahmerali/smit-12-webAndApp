// let students = ['waqas', 24, false];
var students = ['waqas', 'Mashood', 'Bilal'];
var rollNumbers = [1, 2, 3];
console.log(students);
for (var i = 0; i < rollNumbers.length; i++) {
    console.log(rollNumbers[i]);
}
;
for (var student in students) {
    console.log(student);
}
for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
    var student = students_1[_i];
    console.log(student);
}
// let userValue: number[] = rollNumbers.map((val) => {
//     val > 1;
//     return val
// })
// let userValue: boolean[] = rollNumbers.map((val) => val > 1)
// console.log(userValue);
// console.log(userValue);
// let stringValue: string[] = rollNumbers.map((val) => {
//     return val.toString();
// })
// console.log(stringValue);
// define our tuple
var ourTuple;
// initialize correctly
// ourTuple = [5, false, 'Coding God was here'];
// initialized incorrectly which throws an error
ourTuple = [false, 'Coding God was mistaken', 5];
console.log(ourTuple);
