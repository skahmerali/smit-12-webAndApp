let mongoose = require('mongoose');

const fromSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
});



const forms = mongoose.model('serviceprovider', fromSchema);
module.exports = forms;