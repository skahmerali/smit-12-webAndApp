const users = [
    { email: "ahmer@example.com", password: "password123" },
    { email: "admin@example.com", password: "smit1234" }
];

const loginUser = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required!" });
    }

    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        return res.status(401).json({ error: "Invalid email or password!" });
    }

    res.json({ message: "Login successful!", user });
};

module.exports = { loginUser }; 
