let env = require('dotenv')
env.config();
let mongoose = require('mongoose');


let uri = process.env.uri;

async function  dbConnect () {

    try {

        await mongoose.connect(uri);
        console.log('db connected successfully');
        
         
    } catch (err) {
        console.log(err);
        
    }

}

module.exports = {dbConnect};