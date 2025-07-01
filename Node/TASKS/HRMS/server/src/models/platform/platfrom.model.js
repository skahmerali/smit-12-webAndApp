let mongoose = require('mongoose');

const platfromSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
   
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  logo: {
    type: String, // Cloudinary URL ya base64
    require : true,
  },
  companies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'companies'
    }
  ],
  requests: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'requests'
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Auto update `updatedAt` field
platfromSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// ⬇️ Only one document allowed check
platfromSchema.pre('save', async function (next) {
  const count = await mongoose.models.serviceprovider.countDocuments();
  if (count >= 1 && this.isNew) {
    const err = new Error('Only one service provider is allowed');
    return next(err);
  }
  next();
});

let serviceprovider = mongoose.model('serviceprovider', platfromSchema);
module.exports = serviceprovider;