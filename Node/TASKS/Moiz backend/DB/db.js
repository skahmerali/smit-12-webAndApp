require('dotenv').config();
const mongoose = require('mongoose')

const dbConnection = async () => {
    try {
        console.log(process.env.URI);
        await mongoose.connect(process.env.URI, { autoIndex: 'false' })
    }
    catch (error) {
        console.log('DB Not Connected');

    }
}

module.exports = dbConnection