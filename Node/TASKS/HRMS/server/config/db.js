let mongoose = require("mongoose");
let mongoURI = process.env.MONGO_URI;

console.log('process.env.MONGO_URI==>',process.env.MONGO_URI);


const dbConnect = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("db connected successfully");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = dbConnect;