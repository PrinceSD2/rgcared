const User = require('../models/User');
const Donation = require('../models/Donation');
const FormSubmission = require('../models/FormSubmission');
// Get volunteer forms for the logged-in user
exports.getUserVolunteers = async (req, res) => {
  try {
    const volunteers = await FormSubmission.find({ formType: 'volunteer', userId: req.user._id });
    res.json(volunteers);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { name, email },
      { new: true }
    ).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getUserDonations = async (req, res) => {
  try {
    const donations = await Donation.find({ userId: req.user._id });
    res.json(donations);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
