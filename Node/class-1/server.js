// first create a node server throuhg npm init
const http = require("http");
const fs = require('fs');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.writeFile('IMPORTANT2.txt', 'Hello saylani', function (err) {
        if (err) throw err;
        console.log('Replaced!');
    });
    res.end("Hello world");
}).listen(5000, () => 'server is running....')
