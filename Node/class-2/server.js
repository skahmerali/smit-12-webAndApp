// // first create a node server throuhg npm init
// const http = require("http");
// const fs = require('fs');
// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     fs.writeFile('IMPORTANT2.txt', 'Hello saylani', function (err, data) {
//         if (err) throw err;
//         console.log('Replaced!', data);
//     });
//     fs.readFile('IMPORTANT2.txt', 'base64', function (err, data) {
//         if (err) throw err;
//         console.log('Replaced!', data);
//     });
//     res.end("Hello world");
// }).listen(5000, () => 'server is running....')

const express = require('express');
const parse = require("parse");
const bodyParser = require('body-parser')

const app = express();
// app.use(parse());
app.use(bodyParser.urlencoded());

app.get('/', (req, res) => {
    res.send("this is first api, Congrats!")
});

app.post('/user', (req, res) => {
    const { email, password } = req.body;
    console.log(email, '31')
    res.send('email');
})

app.listen(5000, () => console.log('server is rnning...'));
