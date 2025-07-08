const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;

// console.log('process.env.MONGO_URI==>',process.env.MONGO_URI);

const dbConnect = async () => {
  try {
    await mongoose.connect(mongoURI)
    console.log("data Base connected")
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

module.exports = dbConnect;