const checkAge = (req, res, next) => {
    const { age } = req.body;

    if (!age) {
        return res.status(400).json({ error: "Age is required!" });
    }

    if (age < 18) {
        return res.status(403).json({ error: "Access denied. Age must be 18 or above." });
    }

    next(); // Proceed to login if age is valid
};

module.exports = { checkAge };
