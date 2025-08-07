require('dotenv').config();
const cors = require('cors');
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const config = require('./config');
const mongoose = require('mongoose');
const ContactUs = require('./models/ContactUs');
const Volunteer = require('./models/Volunteer');
const Donation = require('./models/Donation');

// Auth/User/Admin routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

const app = express();
const port = config.port;

// CORS middleware
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

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'rgcare',
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// API Auth/User/Admin routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/admin', adminRoutes);

// Multer setup for file uploads
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

    res.status(200).json({ message: 'Message saved successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Error submitting the form!' });
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

    res.status(200).json({ message: 'Volunteer form saved successfully' });
  } catch (error) {
    console.error('Volunteer form error:', error);
    res.status(500).json({ error: 'Error submitting the form!' });
  }
});

// Donation form - Save to 'donations' collection
app.post('/api/donation', async (req, res) => {
  try {
    const { name, email, phone, amount, paymentId, message, userId, razorpay_payment_id, donorDetails } = req.body;

    const donationData = {
      name: donorDetails?.firstName + ' ' + donorDetails?.lastName || name,
      email: donorDetails?.email || email,
      phone: phone,
      amount: amount || req.body.donationAmount,
      paymentId: razorpay_payment_id || paymentId,
      message: donorDetails?.note || message,
      userId: userId,
    };

    await Donation.create(donationData);
    res.status(200).json({ message: 'Donation saved successfully' });
  } catch (error) {
    console.error('Donation form error:', error);
    res.status(500).json({ error: 'Error submitting the donation!' });
  }
});

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Backend is running!', status: 'OK' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  if (process.env.NODE_ENV === 'production') {
    console.log(`CORS restricted to: ${process.env.APP_URL}`);
  }
});
