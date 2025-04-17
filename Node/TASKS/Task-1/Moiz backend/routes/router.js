const express = require('express')
const myRouter = express.Router()
const { signUpCon } = require('../controller/auth');
const { loginCon } = require('../controller/auth');
// const errorHandler = require('../controller/auth')


myRouter.post('/signup', signUpCon);
myRouter.post('/login', loginCon);

// myRouter.post('/404', errorHandler)

module.exports = myRouter