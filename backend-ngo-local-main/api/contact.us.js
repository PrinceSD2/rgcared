
require('dotenv').config();
const mongoose = require('mongoose');
const FormSubmission = require('../models/FormSubmission');
const axios = require('axios');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message, phone, subject } = req.body;

  try {
    // Save to MongoDB
    await FormSubmission.create({
      formType: 'contact',
      name,
      email,
      phone,
      subject,
      message,
    });

    // Send via EmailJS
    const emailjsRes = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: process.env.EMAILJS_SERVICE_ID || 'dummy_service_id',
      template_id: process.env.EMAILJS_TEMPLATE_ID || 'dummy_template_id',
      user_id: process.env.EMAILJS_USER_ID || 'dummy_user_id',
      template_params: {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        phone: phone,
      },
    });

    if (emailjsRes.status === 200) {
      res.status(200).json({ message: 'Message sent successfully' });
    } else {
      res.status(500).json({ error: 'Error sending email' });
    }
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Error sending email' });
  }
};
