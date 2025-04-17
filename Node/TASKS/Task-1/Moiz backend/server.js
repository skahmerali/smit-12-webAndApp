// npm init
// question and answers
// npm i express mongoose dotenv

const express = require('express');
const myRouter = require('./routes/router');
const dbConnection = require('./DB/db');
const app = express();
const cors = require('cors');
app.use(express.json());

// DB Connect Function

app.use(cors());
dbConnection();

app.use(myRouter);
app.listen(3000, () => console.log('server is runiing on 3000'))