const express = require("express");
const router = express.Router();
const twilio = require("twilio");

// Initialize Twilio client
const accountSid = process.env.accountSID;
const authToken = process.env.authToken;
const twilioClient = twilio(accountSid, authToken);

// Generate random OTP
function generateOTP() {
  return Math.floor(1000 + Math.random() * 9000);
}

// Send OTP via SMS using Twilio
router.post("/", (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  const otp = generateOTP();

  twilioClient.messages
    .create({
      body: `Your OTP is: ${otp}`,
      from: process.env.virtualNumber,
      to: phoneNumber,
    })
    .then((message) => {
      console.log("OTP sent successfully:", message.sid);
      res.status(200).send({ message: "OTP sent successfully", otp: otp });
    })
    .catch((error) => {
      console.error("Error:", error);
      res.status(500).send("Failed to send OTP");
    });
});

module.exports = router;
