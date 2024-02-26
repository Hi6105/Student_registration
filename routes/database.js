const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const uri = process.env.URI;

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
