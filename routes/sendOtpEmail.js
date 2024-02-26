const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const speakeasy = require("speakeasy");

const secret = speakeasy.generateSecret({ length: 10 });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "hvishwakarma821@gmail.com",
    pass: "qtlx ovnm oitb uliz",
  },
});

router.get("/", (req, res) => {
  console.log("hi");
  const otp = speakeasy.totp({
    secret: secret.base32,
    encoding: "base32",
  });
  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: req.query.email,
    subject: "OTP for Email Verification",
    text: `Your OTP for email verification is: ${otp}`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send("Error sending OTP");
    } else {
      console.log("Email sent: " + info.response);
      res.send({ message: "OTP sent successfully", otp: otp });
    }
  });
});

module.exports = router;
