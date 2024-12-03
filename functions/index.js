/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// Load environment variables from .env.local
require('dotenv').config();

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// Access the password from the .env.local file
const emailPassword = process.env.EMAIL_PASSWORD;

// Configure your email transport using nodemailer
const transporter = nodemailer.createTransport({
  service: 'Gmail', // or another email service
  auth: {
    user: 'bigsmartmovie@gmail.com', // your email
    pass: emailPassword // Use the environment variable here
  }
});

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.sendEmail = functions.https.onRequest((req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://yanglyujimmy.github.io'); // Allow your frontend origin
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS'); // Allow POST and OPTIONS methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow Content-Type header

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(204).send(''); // Respond with no content for OPTIONS requests
  }

  // Ensure the request method is POST
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).send('Missing required fields');
  }

  const mailOptions = {
    from: 'bigsmartmovie@gmail.com',
    to: 'bigsmartmovie@gmail.com', // the recipient's email
    subject: `Contact Form Submission from ${name}`,
    text: `You have received a new message from ${name} (${email}):\n\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Error sending email');
    }
    console.log('Email sent:', info.response);
    return res.status(200).send('Email sent successfully');
  });
});
