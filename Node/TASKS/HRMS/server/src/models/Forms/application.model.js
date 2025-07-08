let mongoose = require('mongoose');

const fromSchema = new mongoose.Schema({
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

    // lastEmployeeDetails: String
    companyName: String,
    employeeDate: String,
    position: String

});
    


const forms = mongoose.model('EmployeeForms', fromSchema);
module.exports = forms;