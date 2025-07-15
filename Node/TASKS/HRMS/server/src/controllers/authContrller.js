const authSchema = require('./../models/auth/authSchema')
const nodemailer = require("nodemailer");
module.exports.createUser = async (req, res) => {
    try {
        const { firstName, lastName, email, address, educationDetails, lastEmployeeDetails } = req.body;
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
        const getRandom = new Date().getTime();
        console.log(getRandom);
        if (!firstName || !lastName || !email || !address || !educationDetails || !school || !degree || !passoutYear || !lastEmployeeDetails || !companyName || !employeeDate || !position || !getRandom) {
            // res.status(404).json
            return res.send({
                message: 'invalid data',
                status: 404,
            });
        }

        const userData = {
            firstName, lastName, email, address, school,
            degree,
            passoutYear, companyName,
            employeeDate,
            position,
            getRandom
        }
        const createUserData = new authSchema(userData)
        const result = await createUserData.save();
        console.log(result)
        return res.send({
            status: 200,
            message: "Form Submitted Successfully",
            result
        })

    } catch (e) {
        console.log(e, "error");
    }
}
module.exports.inviteUser = async (req, res) => {
    try {
        const {email} = req.body;
        
        if (!email) {
            // res.status(404).json
            return res.send({
                message: 'invalid data',
                status: 404,
            });
        }

        const result = await createUserData.save();
        console.log(result)
        return res.send({
            status: 200,
            message: "Form Submitted Successfully",
            result
        })

    } catch (e) {
        console.log(e, "error");
    }
}
