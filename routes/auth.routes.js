const express = require('express');
const {
  signup,
  verifyEmail,
  login,
  getMe,
  forgotPassword,
  resetPassword,
} = require('../controllers/auth.controller');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Public
router.post('/signup', signup);
router.post('/login', login);
router.get('/verify-email', verifyEmail);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

// Protected
router.get('/me', protect, getMe);

module.exports = router;
