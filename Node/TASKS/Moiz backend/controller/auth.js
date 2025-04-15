const userModal = require('../models/userSchema')
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const saltRounds = 10;

const signUpCon = async (req, res) => {

  let { name, email, password, age } = req.body

  const emailPattern = /^[a-zA-Z0-9._%+-]{4,}@(gmail\.com|yahoo\.com|outlook\.com)$/;


  if (!name || !email || !password || !age) {
    // return res.status(401).json({serverMsg: "All Feilds Compalsary"})
    return (res.send({
      status: 404,
      message: 'data is invalid'
    }))
  }

  if (name.length < 4) {
    return res.status(401).json({ serverMsg: "Name must be a 4 charcter" })
  }

  if (age < 18) {
    return res.status(401).json({ serverMsg: "Age is less than 18" })
  }

  if (password.length < 6) {
    return res.status(401).json({ serverMsg: "Password must be a 6 charcter" })
  }

  if (!emailPattern.test(email)) {
    res.status(401).json({ serverMsg: "Invalid Email" })
  }

  try {

    const hashPass = bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        if (!err) {
          // let hashPass = hash;
          return hash;
        }
        // Store hash in your password DB.
      });
    });
    let userData = await userModal.create({
      name, email, password: hashPass, age
    })

    console.log(userData);

    res.status(201).json({ serverMsg: "Created Sucessfully", data: userData })

  } catch (err) {
    console.log(err);

    res.status(400).json({ serverMsg: err })

  }



}
const loginCon = async (req, res) => {

  let { email, password } = req.body

  // sheikhahmer@gmail.com
  // sheikhahmer1@gmail.com
  // sheikhahmer2@gmail.com ===> email
  // sheikhahmer3@gmail.com
  // sheikhahmer4@gmail.com
  if (!email || !password) {
    return (res.send({
      status: 404,
      message: 'data is invalid'
    }))
  }

  try {
    // const user = await userModal.findOne({ email });
    // return user = { email : "", password : "", age: "", gender:" "} whatever it is considing it will be return

    // Load hash from your password DB.
    // bcrypt.compare(password, user.password, function (err, result) {
    jwt.sign({ name: "ahmer", email: "ahmer@gmail.com", role: "admin" }, process.env.PRIVATEKEY, function (err, token) {
      console.log(token);
      // });
      // result == true
      // if (result) {
      res.send({
        status: 200,
        message: "login sucessfully",
        // user,
        token
      })
      // }
    });


  } catch (err) {
    console.log(err);

    res.status(400).json({ serverMsg: err })

  }

}

module.exports = { signUpCon, loginCon }

// https://frontegg.com/guides/jwt-authorization
// https://sathira-hguruge.medium.com/using-jwt-and-custom-authentication-middleware-for-authorization-and-authentication-in-node-js-445064d141e5
// https://medium.com/@hamzamakh/authentication-and-authorization-using-jwt-with-node-js-39a0dfb6cbc6