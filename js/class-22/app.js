// var student = {
//     name : "Waqas" , 
//     "roll number" : "123456" , 
//     class : "Web And App Development" , 
// }
// var arr = [{ 
//     shopwala : {
//         names: ['admin', "ahmer", "asad"], 

//     }, 
//     // ecommerce: {}
// }]

// student.class = "Full stack Web And mobile App development";
// student.age = 18;
// console.log(student.class);
// console.log(student);


var plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discountMonths: [6, 7],
    calcAnnual: function (percentIfDisc) {
        var bestPrice = plan1.price;
        var currDate = new Date();
        var thisMo = currDate.getMonth();
        for (var i = 0; i < plan1.discountMonths.length; i++) {
            if (plan1.discountMonths[i] === thisMo) {
                bestPrice = plan1.price * percentIfDisc;
                break;
            }
        }
        return bestPrice;
    }

}
console.log(plan1.calcAnnual(0.8))


function Plan(name, price, space, transfer, pages, discountMonths) {
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    this.discountMonths = discountMonths;
    this.calcAnnual = function (percentIfDisc) {
        var bestPrice = this.price;

        var currDate = new Date();
        var thisMo = currDate.getMonth();
        for (var i = 0; i < this.discountMonths.length; i++) {
            if (this.discountMonths[i] === thisMo) {
                bestPrice = this.price * percentIfDisc;
                break;
            }
        }
        return bestPrice * 12;
    };
}
