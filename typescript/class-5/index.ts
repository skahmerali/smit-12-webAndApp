// function printStatusCode <Saylani>(code: string | number ) {
//     console.log(`My status code is ${code}.`)
// }
// function printStatusCode <Saylani, Mass>(code: Saylani, value: Mass ) {
//     console.log(`My status code is ${code} and value is ${value}.`)
// }

// printStatusCode(404, '500');
// printStatusCode('404');
// printStatusCode(false);

// type Wrapped<T> = { value: T };

// const wrappedValue: Wrapped<number> = { value: 10 }

interface Person {
    name: string;
    age: number;
    class: string;
}
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person: Person, property: keyof Person) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
}
let person = {
    name: "Max",
    age: 27,
    class: 'SMIT WEB AND APP'
};
printPersonProperty(person, "name"); // Printing person property name: "Max"
printPersonProperty(person, "age"); // Printing person property age: "27"
printPersonProperty(person, "class"); // Printing person property class: "SMIT WEB AND APP"