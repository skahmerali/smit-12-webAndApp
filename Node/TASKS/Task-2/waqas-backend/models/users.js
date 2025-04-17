let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    username : String,
    email : String,
    password: String
})

let users = mongoose.model('users',userSchema);
module.exports = users;