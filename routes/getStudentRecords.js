const express = require("express");
const router = express.Router();
const studentRegistrationSchema = require("../models/student_registration_data");

router.get("/", async (req, res) => {
  console.log("hi");
  const result = await studentRegistrationSchema.find({});
  if (result) {
    res.render("admin/admin", { data: result });
  }
});

module.exports = router;
