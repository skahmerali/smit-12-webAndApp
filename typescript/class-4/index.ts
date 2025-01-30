// function printStatusCode(code: string | number) {
//     console.log(`My status code is ${code}.`)
//   }
// // function printStatusCode(code: string ) {
// //     console.log(`My status code is ${code}.`)
// // }
// printStatusCode(404);
// printStatusCode('404');


// function userInput(id: string | number | boolean) {
//      return id;
//     console.log(id);
// }

// userInput('A-0091');
// userInput(100);
// userInput(true);
// const userValue = ()=>{}

interface Car {
    make: string;
    model: string;
    mileage?: number;
}

let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};

console.log(myCar);

// It should be return an error 
// let myCar: Required<Car> = {
//     make: 'Ford',
//     model: 'Focus',

// };