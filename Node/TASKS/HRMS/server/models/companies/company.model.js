let mongoose = require('mongoose');


const registeredCompanySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: [true, 'Company name is required'],
    trim: true
  },
  companyEmail: {
    type: String,
    required: [true, 'Company email is required'],
    lowercase: true,
    unique: true
  },
  companyPhone: {
    type: String,
    required: [true, 'Phone number is required']
  },
  industry: {
    type: String,
    enum: {
      values: ['IT', 'Finance', 'Healthcare', 'Education', 'Manufacturing', 'Retail', 'Construction'],
      message: 'Industry must be valid'
    },
    required: [true, 'Industry is required']
  },
 employeeRange: {
    type: String,
    enum: ['1-10','11-50','51-100','101-200','200+'],
    required: [true, 'Employee Range is required']
  },
  
  companyLogo: {
    type: String, // Cloudinary URL
    required: [true, 'Company logo is required']
  },
  companyAddress: {
    type: String,
    required: [true, 'Address is required']
  },
  companyCity: {
    type: String,
    required: [true, 'City is required']
  },
  companyCountry: {
    type: String,
    required: [true, 'Country is required']
  },
  // Plan Info
  subscriptionPlan: {
    type: String,
     enum: {
      values: ['Premium', 'Enterprise', 'Basic','Standard'],
      message: 'Invalid subscription plan'
    },
    required: [true, 'Subscription is required']
  },

  status: {
    type: String,
    enum: {
      values: ['suspended','active'],
      message: 'Invalid status',
    },
    default : 'active'
  },
  // company register krty waqt hi admin ka sara data len gy
 admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    
  },
  hrs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    }
  ],
  employees: [
    {
      type: mongoose.Schema.Types.ObjectId,
     ref: 'users'
    }
  ],
//   planStartDate: {
//     type: Date,
//     required: [true, 'Plan start date is required']
//   },
//   planEndDate: {
//     type: Date,
//     required: [true, 'Plan end date is required']
//   },

  registerAt: {
    type: Date,
    default: Date.now
  }
});

let registeredcompanies =  mongoose.model('registeredcompanies', registeredCompanySchema);
module.exports = registeredcompanies;