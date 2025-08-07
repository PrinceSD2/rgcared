
const mongoose = require('mongoose');
const FormSubmission = require('../models/FormSubmission');
const axios = require('axios');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, note, subject, phone, qualification, resume } = req.body;

  try {
    // Save to MongoDB, link userId if available (req.user)
    await FormSubmission.create({
      formType: 'volunteer',
      name,
      email,
      phone,
      subject,
      note,
      qualification,
      resume,
      userId: req.user ? req.user._id : undefined,
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
        message: note,
        phone: phone,
        qualification: qualification,
        resume: resume,
      },
    });

    if (emailjsRes.status === 200) {
      res.status(200).json({ message: 'Volunteer form submitted successfully' });
    } else {
      res.status(500).json({ error: 'Error sending email' });
    }
  } catch (error) {
    console.error('Volunteer form error:', error);
    res.status(500).json({ error: 'Error sending email' });
  }
};
