const mongoose = require('mongoose');

const formSubmissionSchema = new mongoose.Schema({
  formType: { type: String, required: true }, // e.g., 'contact', 'volunteer', 'donation'
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  note: String,
  qualification: String,
  resume: String, // file path or filename if needed
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('FormSubmission', formSubmissionSchema, 'rgcaredata');
