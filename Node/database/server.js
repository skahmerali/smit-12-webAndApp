const express = require('express');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
const app = express();

app.get('/user', (req, res) => {
    // {email = "", password: ""}
    // const {email, password} = req.body
})
app.get('/getUsers', () => {

})
app.post('/connectDatabase', (req, res) => {

})

app.listen(5000)
