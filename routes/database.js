const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

// Replace <connection-string> with your MongoDB Atlas connection URI
const uri = `mongodb+srv://hvishwakarma821:${process.env.PASSWORD}@cluster0.4uegh9y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const db = () => {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Connected to MongoDB Atlas");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB Atlas:", error);
    });
};

module.exports = db;
