const handle404 = (req, res) => {
    res.status(404).json({ error: "User is not allowed!" });
};


module.exports = { handle404 };
