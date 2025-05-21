const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://Sanjeev:Sanjeev123@cluster0.ybrdh6e.mongodb.net/Tinder"
  );
};

module.exports = connectDB;