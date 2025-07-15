

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


module.exports.getUserForms = async(req, res) => {
    try {
        let data = await EmployeeForms.find()

        res.status(200).json({message : 'sucess', data})
    } catch (error) {
        res.status(500).json({message : 'server Error'})
        
    }
}

module.exports.formUpdate = async(req, res) => {
    try {
    let {id} = req.params;
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
     const applicationFormData = {
        firstName, lastName, email, address, school,
        degree,
        passoutYear, companyName,
        employeeDate,
        position
    }

        let data = await EmployeeForms.findByIdAndUpdate(id, { $set: applicationFormData})

        console.log("data ==>", applicationFormData);
        

        res.status(200).json({message : 'sucess', data})
    } catch (error) {
        res.status(500).json({message : 'server Error'})
        
    }
}
module.exports.deleteFormData = async(req, res) => {
    try {
    let {id} = req.params;
        let data = await EmployeeForms.deleteOne({_id:id})

        // console.log("data ==>", applicationFormData);
        
        res.status(200).json({message : 'sucess', data})
    } catch (error) {
        res.status(500).json({message : 'server Error'})
        
    }
}