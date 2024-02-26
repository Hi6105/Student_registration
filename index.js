const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const student = require("./models/student_registration_data");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));
app.use(bodyParser.json());

const db = require("./routes/database");
db();

const registerRouter = require("./routes/register");
const sendOtp = require("./routes/sendOtpEmail");
const send_otp_phone = require("./routes/sendOtpPhone");
const student_data = require("./routes/getStudentRecords");

app.use("/register", registerRouter);
app.use("/send-otp", sendOtp);
app.use("/send-otp-phone", send_otp_phone);
app.use("/student_data", student_data);
app.use("/login", (req, res) => {
  res.render("admin/login");
});
app.use("/", (req, res) => {
  res.render("student/student_registration_form", { student: new student() });
});

app.listen(3000);
