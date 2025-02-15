// let students = ['waqas', 24, false];
let students: string[] = ['waqas', 'Mashood', 'Bilal'];
let rollNumbers: number[] = [1, 2, 3];

console.log(students);
for (let i: number = 0; i < rollNumbers.length; i++) {
    console.log(rollNumbers[i]);
};

for (let student in students) {
    console.log(student);
}

for (let student of students) {
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
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

// initialized incorrectly which throws an error
// ourTuple = [false, 'Coding God was mistaken', 5];
console.log(ourTuple);