const express = require('express')
const myRouter = express.Router()
const signUpCon = require('../controller/auth')


myRouter.post('/signup', signUpCon)

module.exports = myRouter