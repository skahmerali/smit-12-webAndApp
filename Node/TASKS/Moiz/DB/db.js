require('dotenv').config();
const mongoose = require('mongoose')

const dbConnection = async () => {
    try {
      await  mongoose.connect(process.env.URI)
   console.log('DB Connect SucessFully');
    } 
    catch (error) {
        console.log('DB Not Connected');
        
    }
}

module.exports = dbConnection