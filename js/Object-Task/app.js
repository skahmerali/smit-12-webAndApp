var onlineStore = [
    {
        email: "",
        password: "",
        name: "TechWorld Online Store",
        location: "New York, NY",
        categories: [
            "Laptops",
            "Smartphones",
            "Accessories"
        ],
        products: [
            {
                id: 1,
                name: "MacBook Pro",
                category: "laptop",
                price: "2500$",
                stocks: 200,
                details: {
                    brand: "apple",
                    model: "pro 2024",
                    colors: ["black", "gray", "white"],
                    screenSize: "14 inch",
                },

            }
        ],
        customers: [
            {
                id: 1,
                firstName: "Waqas",
                lastName: "Majid",
                email: "waqas@gmail.com",
                phoneNumber: "03xxxxxxxx",
                Address: {
                    street: "st 1 phool gali",
                    city: "karachi",
                    state: "sindh",
                    zipCode: "70000",

                },

            }
        ],
        orders: [
            {
                oId: 1,
                date: 'createdAt()',
                status: 0, //0 : SHIPPED, 1: DELIVERD, 2: PROCESSING,
                totalAmount: '2500$',
                products: [
                    {
                        productID: 1,
                        qantity: 5,
                        price: '2500$',

                    }
                ]

            }
        ]
    },
    {
        name: "TechWorld Online Store",
        location: "New York, NY",
        categories: [
            "Laptops",
            "Smartphones",
            "Accessories"
        ],
        products: [
            {
                id: 1,
                name: "MacBook Pro",
                category: "laptop",
                price: "2500$",
                stocks: 200,
                details: {
                    brand: "apple",
                    model: "pro 2024",
                    colors: ["black", "gray", "white"],
                    screenSize: "14 inch",
                },

            }
        ],
        customers: [
            {
                id: 1,
                firstName: "Waqas",
                lastName: "Majid",
                email: "waqas@gmail.com",
                phoneNumber: "03xxxxxxxx",
                Address: {
                    street: "st 1 phool gali",
                    city: "karachi",
                    state: "sindh",
                    zipCode: "70000",

                },

            }
        ],
        orders: [
            {
                oId: 1,
                date: 'createdAt()',
                status: 0, //0 : SHIPPED, 1: DELIVERD, 2: PROCESSING,
                totalAmount: '2500$',
                products: [
                    {
                        productID: 1,
                        qantity: 5,
                        price: '2500$',

                    }
                ]


            }
        ]
    },
    {
        name: "TechWorld Online Store",
        location: "New York, NY",
        categories: [
            "Laptops",
            "Smartphones",
            "Accessories"
        ],
        products: [
            {
                id: 1,
                name: "MacBook Pro",
                category: "laptop",
                price: "2500$",
                stocks: 200,
                details: {
                    brand: "apple",
                    model: "pro 2024",
                    colors: ["black", "gray", "white"],
                    screenSize: "14 inch",
                },

            }
        ],
        customers: [
            {
                id: 1,
                firstName: "Waqas",
                lastName: "Majid",
                email: "waqas@gmail.com",
                phoneNumber: "03xxxxxxxx",
                Address: {
                    street: "st 1 phool gali",
                    city: "karachi",
                    state: "sindh",
                    zipCode: "70000",

                },

            }
        ],
        orders: [
            {
                oId: 1,
                date: 'createdAt()',
                status: 0, //0 : SHIPPED, 1: DELIVERD, 2: PROCESSING,
                totalAmount: '2500$',
                products: [
                    {
                        productID: 1,
                        qantity: 5,
                        price: '2500$',

                    }
                ]


            }
        ]
    }
]


for (var i = 0; i < onlineStore.length; i++) {
    var storeDetails = onlineStore[i];
    console.log(storeDetails.orders);
    for (var j = 0; j < storeDetails.length; j++) {
        // console.log(storeDetails[j].orders)
    }
}

var waqasCollection = [{
    userInfo: {},

}]

function loginHtml (){

}
function abc(user) {
    alert("helo world" + user);

}
var div = document.getElementById("div");

function clickme() {
    // var userName = prompt("Enter user name !")
    abc("userName");
    // window.location.href = './home.html';
    console.log(div);
}