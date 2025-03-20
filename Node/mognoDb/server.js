const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bccrypt = require("bcryptjs");
require('dotenv').config();
const app = express();
const salt = bcrypt.genSaltSync(10);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const URI = process.env.URI;

mongoose.connect(URI, { autoIndex: false });
const signupShcema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    U_id: Number,
    rollNumber: Number,
});
const signupModal = mongoose.model('Batch12Signup', signupShcema);
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
app.post("/signup", async (req, res) => {
    try {
        const { name, email, password, U_id, rollNumber } = req.body;

        if (regex.test(email) && password.length > 5) {
            const hashPassword = bcrypt.hashSync(password, salt);
            // hashPassword = lasknskandsjan39838n&^&^&snsa
            let users = new signupModal({
                name,
                email,
                password: hashPassword,
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
    }
    catch (err) {
        console.log(err)
    }
})

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await signupModal.findOne(email);
        if (!user) {
            return res.status(500).json({ message: "User is not valid" })
        }
        const pass = await bcrypt.compareSync(password, user.password);
        if (pass) {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, function (err, hash) {
                    // Store hash in your password DB
                });
            });

            res.send({
                status: 200,
                data: user,
                message: "signup sucessfully..."
            })

        }
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
