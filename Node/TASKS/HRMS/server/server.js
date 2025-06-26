let express = require('express');
let app = express();
require('dotenv').config();

let connectDB = require('./config/db');
let cors = require('cors');

app.use(express.json());
//Yeh aap ke server ko web forms ka data asani se handle karne deta hai.
app.use(express.urlencoded({ extended: true }));  
app.use(cors()); 

// to connect mongo db
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log('server is running on port',PORT));