let userModel = require('../models/users');
let bcrypt = require('bcryptjs')

let signUp = async (req,res) => {

    let {username,email,password} = req.body;
    
    try {

        let hashPass = bcrypt.hash(password,10)

        let user = await new userModel({
            username,email,password : hashPass
        })

        let userData = await user.save();

       return res.send({
            status : 200,
            message : 'sign up successfull',
            user : userData
        })

        


    } catch (err) {
        console.log(err);
       return res.send({
            status : 400,
            message : 'error in sign up'
        })
        
    }
}

module.exports = {signUp}