const express = require('express');
const { protect } = require('../middleware/auth');
const { authorizeRoles } = require('../middleware/roles');

const router = express.Router();

// Example: only Admin can access
router.get(
  '/admin-only',
  protect,
  authorizeRoles('admin'),
  async (req, res) => {
    res.json({
      message: 'Welcome Admin',
      user: req.user,
    });
  }
);

// Example: Admin + Team Member
router.get(
  '/team-or-admin',
  protect,
  authorizeRoles('admin', 'team'),
  async (req, res) => {
    res.json({
      message: 'Welcome Team/Admin',
      user: req.user,
    });
  }
);

// Example: any logged in user (including client)
router.get('/client-area', protect, async (req, res) => {
  res.json({
    message: 'Welcome authenticated user',
    user: req.user,
  });
});

module.exports = router;
