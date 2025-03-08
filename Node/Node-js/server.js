// // // first create a node server throuhg npm init
// // const http = require("http");
// // const fs = require('fs');
// // http.createServer((req, res) => {
// //     res.writeHead(200, { 'Content-Type': 'text/html' });
// //     fs.writeFile('IMPORTANT2.txt', 'Hello saylani', function (err, data) {
// //         if (err) throw err;
// //         console.log('Replaced!', data);
// //     });
// //     fs.readFile('IMPORTANT2.txt', 'base64', function (err, data) {
// //         if (err) throw err;
// //         console.log('Replaced!', data);
// //     });
// //     res.end("Hello world");
// // }).listen(5000, () => 'server is running....')

const express = require('express');
// // const parse = require("parse");
const bodyParser = require('body-parser');
const { default: appRout } = require('./class-3 (routing)/router');
// const { default: login } = require('./Controller/login');

const app = express();
// app.use(parse());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(appRout)
// function checkUserAge(req, res, next) {
//     const user = 19
//     if (user > 19){
//         return "sucessfully get the response "
//         next()
//     }else{
//         res.send({
//             staus: 500,
//             message: "User is underage"
//         })
//     }
// }

// app.get('/', checkUserAge, login);

// app.post('/user', (req, res) => {
//     const { email, password } = req.body;
//     console.log(email, '31')
//     res.send('email');
// })

// app.listen(5000, () => console.log('server is rnning...'));
