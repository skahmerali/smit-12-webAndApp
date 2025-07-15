let mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    address: String, 
    // educationDetails: {
    //     school: String,

    // }, 
    school: String,
    degree: String,
    passoutYear: Number,
    getRandom: Number,
    // lastEmployeeDetails: String
    companyName: String,
    employeeDate: String,
    position: String

});
    


const auth = mongoose.model('authSchema', authSchema);
module.exports = auth;