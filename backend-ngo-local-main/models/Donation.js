const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  amount: Number,
  paymentId: String,
  message: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Donation', donationSchema, 'donations');
