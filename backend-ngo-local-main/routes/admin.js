const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.get('/users', auth, admin, adminController.getAllUsers);
router.get('/donations', auth, admin, adminController.getAllDonations);
router.delete('/user/:id', auth, admin, adminController.deleteUser);
router.delete('/donation/:id', auth, admin, adminController.deleteDonation);

module.exports = router;
