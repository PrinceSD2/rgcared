const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');


router.get('/profile', auth, userController.getProfile);
router.put('/profile', auth, userController.updateProfile);
router.get('/donations', auth, userController.getUserDonations);
router.get('/volunteers', auth, userController.getUserVolunteers);

module.exports = router;
