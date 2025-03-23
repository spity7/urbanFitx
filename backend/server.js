require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Multer setup for file upload
const upload = multer({ dest: "uploads/" }); // Store files temporarily

app.post("/send-cv", upload.single("file"), async (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({ message: "File is required" });
  }

  // Configure nodemailer
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_PASS, // Your Gmail App Password
    },
  });

  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: "info@urbanfitx.com",
    subject: "New Contact Form Submission with File",
    text: `Check the CV`,
    attachments: [
      {
        filename: file.originalname,
        path: file.path, // Attach the uploaded file
      },
    ],
  };

  try {
    let info = await transporter.sendMail(mailOptions);

    // Delete the file after sending
    fs.unlinkSync(file.path);

    res.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

// Route to handle form submission
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_PASS, // Your Gmail App Password
    },
  });

  // Email options
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "info@urbanfitx.com",
    subject: "New Contact Form Submission",
    text: `You have a new contact form submission:
        \nName: ${name}
        \nEmail: ${email}
        \nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Email sending failed" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
