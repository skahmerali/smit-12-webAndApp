let mongoose = require('mongoose');

const inviteSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  reg_code : {
    type : Number,
    required : true
  }
} , {timestamps : true});


const Invite = mongoose.model('Invite', inviteSchema);
module.exports = Invite;