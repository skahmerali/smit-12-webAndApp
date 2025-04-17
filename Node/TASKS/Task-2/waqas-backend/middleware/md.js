let checker = (req,res,next) => {
    let {username,email,password} = req.body;

    if (!username || !email || !password) {
        return res.send({
            status : 401,
            message : 'kindly fill all the field',
            
        })
    }

    next()

}

module.exports = {checker}