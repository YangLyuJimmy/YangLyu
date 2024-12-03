const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const express = require('express');
const cors = require('cors');
const logger = require("firebase-functions/logger");

// Initialize Express app
const app = express();
app.use(express.json());

// Enable CORS with specific origin
app.use(cors({ origin: 'https://yanglyujimmy.github.io' }));

// Load email password from Firebase config
const emailPassword = functions.config().email.password;

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'bigsmartmovie@gmail.com', // Sender email
    pass: emailPassword // Securely loaded password
  }
});

// Email sending endpoint
app.post('/sendEmail', (req, res) => {
  const { name, email, message } = req.body;

  // Validate input fields
  if (!name || !email || !message) {
    logger.error('Missing required fields');
    return res.status(400).send('Missing required fields');
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    logger.error('Invalid email format');
    return res.status(400).send('Invalid email format');
  }

  const mailOptions = {
    from: 'bigsmartmovie@gmail.com',
    to: 'bigsmartmovie@gmail.com',
    subject: `Contact Form Submission from ${name}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      logger.error('Error sending email:', error);
      return res.status(500).send('Error sending email');
    }
    logger.info('Email sent successfully:', info.response);
    return res.status(200).send('Email sent successfully');
  });
});

// Export Firebase function
exports.api = functions.https.onRequest(app);