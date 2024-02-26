const express = require("express");
const router = express.Router();
const studentRegistrationSchema = require("../models/student_registration_data");

router.post("/", async (req, res) => {
  const { firstName, lastName, dateOfBirth, email, phoneNumber, address } =
    req.body;
  const newUser = new studentRegistrationSchema({
    firstName: firstName,
    lastName: lastName,
    dateOfBirth: dateOfBirth,
    email: email,
    phoneNumber: phoneNumber,
    address: address,
  });
  try {
    const result = await newUser.save();
    if (result) res.send("Registration Successful.");
  } catch (err) {
    console.log(err);
    res.send("Registration Unsuccessful");
  }
});

module.exports = router;
