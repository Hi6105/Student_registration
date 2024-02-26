const mongoose = require("mongoose");

// Define the schema for student registration data
const studentRegistrationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
});

// Create a Mongoose model from the schema
const StudentRegistration = mongoose.model(
  "StudentRegistration",
  studentRegistrationSchema
);

// Export the model
module.exports = StudentRegistration;
