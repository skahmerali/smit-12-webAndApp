require('dotenv').config();
const mongoose = require('mongoose')

const dbConnection = async () => {
    try {
    
        await mongoose.connect(process.env.URI, { autoIndex: 'false' });
        console.log('db connected');
        
    }
    catch (error) {
        console.log('DB Not Connected');

    }
}

module.exports = dbConnection