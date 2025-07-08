const express = require('express');
const app = express();
require('dotenv').config();

const applicationRoutes =  require("./routes/applicationRoutes")

const connectDB = require('./config/db');
const cors = require('cors');

app.use(express.json());
//Yeh aap ke server ko web forms ka data asani se handle karne deta hai.
app.use(express.urlencoded({ extended: true }));  
// Cross Origin
app.use(cors()); 

// to connect mongo db
connectDB();


app.use("/api/v1/applictions" , applicationRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log('server is running on port',PORT));