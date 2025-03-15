const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const URI = "mongodb+srv://Ahmer:Ahmer@cluster0.lnsqyol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(URI, { autoIndex: false });
const signupShcema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    U_id: Number,
    rollNumber: Number,
});
const signupModal = mongoose.model('Batch12Signup', signupShcema);
app.post("/signup", async (req, res) => {
    try {
        const { name, email, password, U_id, rollNumber } = req.body;

        // if (email.include('@') && password.length > 5 ){
            
        // }
            let users = new signupModal({
                name,
                email,
                password: password,
                U_id,
                rollNumber
            })
        await users.save();
        res.send({
            status: 200,
            data: users,
            message: "signup sucessfully..."
        })
    }
    catch (err) {
        console.log(err)
    }
})
app.get('/user', (req, res) => {
    res.send("hello world")
    // {email = "", password: ""}
    // const {email, password} = req.body
})
app.get('/getUsers', () => {

})
app.post('/connectDatabase', (req, res) => {

})

app.listen(5000, () => console.log('server is connected...'));
