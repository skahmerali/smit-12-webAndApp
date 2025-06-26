let mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true, 
    lowercase: true, 
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  role: {
    type: String,
    enum: {
        values : ["owner", "admin", "hr", "employee"],
        message : "Invalid role",
    },
    required: [true, "Role is required"],
    set: v => v.toLowerCase()
  },

  // Only for owner
  serviceProvider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "serviceprovider",
    validate: {
      validator: function (value) {
        return this.role === "owner" ? value != null  && value !== "": true;
      },
      message: "Service Provider reference is required for Owner",
    },
  },

  // Common for employee, admin, hr
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "companies",
    validate: {
      validator: function (value) {
        return ["admin", "hr", "employee"].includes(this.role)
          ? value != null && value !== ""
          : true;
      },
      message: "Company is required for Admin, HR, and Employee",
    },
  },

  // Only for employee
  designation: {
    type: String,
    enum: {
      values: [
        "Software Engineer",
        "Frontend Developer",
        "Backend Developer",
        "Designer",
        "QA Engineer",
        "DevOps",
      ],
      message: "Designation must be a valid job title",
    },
    validate: {
      validator: function (value) {
        return this.role === "employee" ? value != null && value !== "" : true;
      },
      message: "Designation is required for Employee",
    },
  },

  salary: {
    type: Number,
    min: [10000, "Salary must be at least 10,000"],
    max: [1000000, "Salary exceeds maximum limit"],
    validate: {
      validator: function (value) {
        return ["hr", "employee"].includes(this.role) ? value != null : true;
      },
      message: function () {
        return `Salary is required for ${
          this.role === "hr" ? "HR" : "Employee"
        }`;
      },
    },
  },
  // Only for HR
  department: {
    type: String,
    

    enum : {
        values : ['HR', 'Engineering', 'Sales', 'Marketing', 'Finance', 'Support'],
        message : 'Department must be a valid department'
    },

    validate: {
      validator: function (value) {
        return this.role === "hr" ? value != null && value !== "" : true;
      },
      message: "Department is required for HR",
    },
  },

    gender: {
    type: String,
    enum: {
      values : ['male', 'female', 'other'], 
      massage : 'Kindly select valid gender'
    },
    required: [true, 'Gender is required'],
     set: v => v.toLowerCase()
  },
  dob: {
    type: Date,
    required: [true, 'Date of birth is required']
  },

  // Optional for all
  profileImage: {
    type: String, // Cloudinary URL
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

let users = mongoose.model("users", userSchema);
module.exports = users;