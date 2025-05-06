const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dob: Date,
    gender: { type: String, enum: ['Male', 'Female', 'Other'] },
    email: { type: String, unique: true },
    password: String,
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
