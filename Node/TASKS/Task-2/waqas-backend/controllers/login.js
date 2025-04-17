let userModel = require('../models/users');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken')

let login = async (req,res) => {

    let {email,password} = req.body;

    if (!email || !password) {
        return res.send({
            status : 401,
            message : 'kindly fill all the field',
            
        })
    }
    
    try {


        let user = await userModel.findOne(email);

        if(!user) {

            return res.send({
                status : 401,
                message : 'email not found',
                
            })

        }

        let isMatch = bcrypt.compare(password,user.password);

        if (!isMatch) {

            return res.send({
                status : 401,
                message : 'invalid pasword',
                
            })

        }

        let payloud = {
            username : user.username,
            email : user.email,
            id : user._id
        }

        let token = await jwt.sign(payloud,'secret123',{'expiresIn' : '1h'})

        return res.send({
            status : 200,
            message : 'login successfully',
            token
            
        })

      

        


    } catch (err) {
        console.log(err);
        res.send({
            status : 400,
            message : 'error in login'
        })
        
    }
}

module.exports = {login}