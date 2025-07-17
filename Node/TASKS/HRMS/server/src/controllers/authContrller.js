const authSchema = require('./../models/auth/authSchema')
const nodemailer = require("nodemailer");
const Invite = require("./../models/invite/invite");
const transporter = require("./../config/nodemailer");

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
         const newInvite = await Invite.create({
            email,
            reg_code: getRandom
        });
        console.log(newInvite);

        const info = await transporter.sendMail({
            from: 'mashoodbaig567@gmail.com',
            to: email,
            subject: "Testing",
            text: "click button to complete registration",
            html: `<a href="www.dashboard.skdigitech.academy/${newInvite.reg_code}">
                click to go registration
                </a>`,
        });

        console.log("Message sent:", info);

        console.log(result)
        return res.send({
            status: 200,
            message: "invite Send Successfully",
            result
        })

    } catch (e) {
        console.log(e, "error");
    }
}
