let mongoose = require('mongoose');


const companyRequestSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: [true, 'Company name is required']
  },
  companyEmail: {
    type: String,
    required: [true, 'Company email is required'],
    lowercase: true
  },
  companyPhone: {
    type: String,
    required: [true, 'Phone number is required']
  },

  adminName : {
    type : String,
    required : [true, 'Admin name is required']
  },


  industry: {
    type: String,
    enum: {
      values: ['IT', 'Finance', 'Healthcare', 'Education', 'Manufacturing', 'Other'],
      message: 'Industry must be a valid category'
    },
    required: [true, 'Industry is required']
  },
  employeeRange: {
    type: String,
    enum: ['1-10','11-50','51-100','101-200','200+'],
    required: [true, 'Employee Range is required']
  },
  message: {
    type: String
  },
  status: {
    type: String,
    enum: ['pending', 'registered', 'rejected','invited'],
    default: 'pending'
  },
  requestedAt: {
    type: Date,
    default: Date.now
  }
});

let companyrequests = mongoose.model('companyrequests', companyRequestSchema);
module.exports = companyrequests;