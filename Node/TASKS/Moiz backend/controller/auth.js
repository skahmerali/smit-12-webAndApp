const signUpCon = (req, res) => {


  let { name, email, password, age } = req.body

  const emailPattern = /^[a-zA-Z0-9._%+-]{4,}@(gmail\.com|yahoo\.com|outlook\.com)$/;


  if (!name || !email || !password || !age) {
    // return res.status(401).json({serverMsg: "All Feilds Compalsary"})
    return (res.send({
      status: 404,
      message: 'data is invalid'
    }))
  }

  if (name.length < 4) {
    return res.status(401).json({ serverMsg: "Name must be a 4 charcter" })
  }

  if (age < 18) {
    return res.status(401).json({ serverMsg: "Age is less than 18" })
  }

  if (password.length < 6) {
    return res.status(401).json({ serverMsg: "Password must be a 6 charcter" })
  }

  if (!emailPattern.test(email)) {
    res.status(401).json({ serverMsg: "Invalid Email" })
  }

  res.status(201).json({ serverMsg: "Created Sucessfully" })
}

module.exports = signUpCon