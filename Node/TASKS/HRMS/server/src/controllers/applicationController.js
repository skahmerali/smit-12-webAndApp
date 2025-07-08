const EmployeeForms = require ('../models/Forms/application.model');

module.exports.applyForm = async (req , res) => {
try {
    const {firstName, lastName, email, address, educationDetails, lastEmployeeDetails} = req.body;
    const {
        school,
        degree,
        passoutYear
    } = educationDetails;

    const {
        companyName,
        employeeDate,
        position
    } = lastEmployeeDetails;

    if(!firstName || !lastName || !email || !address || !educationDetails || !school || !degree || !passoutYear || !lastEmployeeDetails || !companyName || !employeeDate || !position){
        // res.status(404).json
        return res.send({
            message: 'invalid data',
            status: 404,
        });
    }

    const applicationFormData = {
        firstName, lastName, email, address, school,
        degree,
        passoutYear, companyName,
        employeeDate,
        position
    }

    const applicationData = new EmployeeForms(applicationFormData)
    const result = await applicationData.save();
    return res.send({
        status : 200 ,
        message: "Form Submitted Successfully",
        result
    })

} catch (e) {
    console.log(e, "error");
}
}