const express = require('express')
const myRouter = require('./routes/router')
const dbConnection = require('./DB/db')
const app = express()
app.use(express.json())

// DB Connect Function
dbConnection()

app.use(myRouter)

app.listen(3000, () => console.log('server is runiing on 3000'))