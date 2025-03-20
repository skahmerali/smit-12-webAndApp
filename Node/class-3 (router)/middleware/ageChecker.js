const checkAge = (req, res, next) => {
    const { age } = req.body;
    // const userData = req.body;
    // userData.age

    if (!age) {
        return res.status(400).json({ error: "Age is required!" });
        // return res.send({
        //     status: 400, 
        //     message: "Age is required!",
        //     error: "sorry! you enterd a wrong value"
        // })
        // What frontend should get
        // data.body.error=== 400
    }

    if (age < 18) {
        return res.status(403).json({ error: "Access denied. Age must be 18 or above." });
    }

    next(); // Proceed to login if age is valid
};

module.exports = { checkAge };
