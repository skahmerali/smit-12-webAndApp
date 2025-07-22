const Invite = require("./../models/invite/invite");
const transporter = require("./../config/nodemailer");

module.exports.sendInvite = async (req, res) => {
    try {
        const getRandom = new Date().getTime();
        const {
            email
        } = req.body;

        if (!email && !getRandom) {
            return res.send({
                message: 'email is required',
                status: 404,
            });
        }

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

        res.send({
            message: 'invite Send Successfully',
            status: 200,
        });


    } catch (error) {
        console.log(error.message)
        res.send({
            message: 'error sending Mail',
            status: 500,
        });
    }
}

