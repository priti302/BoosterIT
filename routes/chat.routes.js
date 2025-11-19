const express = require('express');
const Message = require('../models/Message');

const router = express.Router();

/**
 * GET /api/chat/messages?projectId=...&sessionId=...
 */
router.get('/messages', async (req, res) => {
  try {
    const { projectId, sessionId } = req.query;
    const query = {};
    if (projectId) query.projectId = projectId;
    if (sessionId) query.sessionId = sessionId;

    const messages = await Message.find(query)
      .sort({ createdAt: 1 })
      .limit(500);

    return res.json(messages);
  } catch (err) {
    console.error('Get messages error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
