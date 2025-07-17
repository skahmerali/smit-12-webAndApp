const nodemailer = require("nodemailer");
require('dotenv/config');

console.log(process.env.GMAIL_USERNAME, 4)
console.log(process.env.GMAIL_APP_PASSWORD, 5)
const transporter = nodemailer.createTransport({
    service: "gmail",
    // port: 587,
    auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});


module.exports = transporter;