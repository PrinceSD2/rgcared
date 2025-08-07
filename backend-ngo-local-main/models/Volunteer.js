const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  note: String,
  qualification: String,
  resume: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Volunteer', volunteerSchema, 'volunteer');
