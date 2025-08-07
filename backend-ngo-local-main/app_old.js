
// ...existing code...

require('dotenv').config();
const cors = require('cors');
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const config = require('./config');
const mongoose = require('mongoose');
const ContactUs = require('./models/ContactUs');
const Volunteer = require('./models/Volunteer');
const Donation = require('./models/Donation');

// Auth/User/Admin routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');
const axios = require('axios');

const app = express();
const port = config.port;

// Place this after app is defined
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

// API Auth/User/Admin
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);

const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: config.filesize_limit }, // Limit file size to 5MB
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(pdf|docx|txt)$/)) {
      return cb(new Error('Only .pdf, .docx, or .txt files are allowed'));
    }
    cb(null, true);
  },
}).single('file');

// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: process.env.SMTP_PORT,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'rgcare',
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware to parse the body of the request
// Use CORS middleware
// app.use(
//   cors({
//     origin: '*', // Allows all origins, change this to specific origins in production
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization'], // Add any other headers your client will send
//     credentials: true, // Allow credentials (cookies, authorization headers, etc.)
//   })
// );
app.use(
  cors({
    origin: process.env.NODE_ENV === 'production' ? [process.env.APP_URL, process.env.APP_URL] : '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

// Explicitly handle OPTIONS preflight for all routes
app.options('*', cors({
  origin: process.env.NODE_ENV === 'production' ? [process.env.APP_URL, process.env.APP_URL] : '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Contact Us - Save to 'contactus' collection
app.post('/api/contact-us', async (req, res) => {
  try {
    const { name, email, message, phone, subject } = req.body;

    await ContactUs.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    res.status(200).send('Message saved successfully');
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).send('Error occur while submitting the form!');
  }
});


// Volunteer form - Save to 'volunteer' collection
app.post('/api/volunteer-with-us', upload, async (req, res) => {
  try {
    const { name, email, note, subject, phone, qualification } = req.body;
    let resume = null;
    if (req.file) {
      resume = req.file.filename;
    }

    await Volunteer.create({
      name,
      email,
      phone,
      subject,
      note,
      qualification,
      resume,
    });

    res.status(200).send('Volunteer form saved successfully');
  } catch (error) {
    console.error('Volunteer form error:', error);
    return res.status(500).send('Error occur while submitting the form!');
  }
});
// Donation form - Save to 'donations' collection
app.post('/api/donation', async (req, res) => {
  try {
    const { name, email, phone, amount, paymentId, message } = req.body;

    await Donation.create({
      name,
      email,
      phone,
      amount,
      paymentId,
      message,
    });

    res.status(200).send('Donation saved successfully');
  } catch (error) {
    console.error('Donation form error:', error);
    return res.status(500).send('Error occur while submitting the donation!');
  }
});

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  if (process.env.NODE_ENV === 'production') {
    console.log(`Production mode enabled`);
    console.log(`CORS restricted to: https://rgcare.in`);
  }
});
