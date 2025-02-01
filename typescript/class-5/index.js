// function printStatusCode <Saylani>(code: string | number ) {
//     console.log(`My status code is ${code}.`)
// }
// function printStatusCode <Saylani, Mass>(code: Saylani, value: Mass ) {
//     console.log(`My status code is ${code} and value is ${value}.`)
// }
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person, property) {
    console.log("Printing person property ".concat(property, ": \"").concat(person[property], "\""));
}
var person = {
    name: "Max",
    age: 27,
    class: 'SMIT WEB AND APP'
};
printPersonProperty(person, "name"); // Printing person property name: "Max"
printPersonProperty(person, "age"); // Printing person property age: "27"
printPersonProperty(person, "class"); // Printing person property class: "SMIT WEB AND APP"
