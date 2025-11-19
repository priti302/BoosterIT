const express = require('express');
const { createLivekitToken } = require('../services/livekitService');

const router = express.Router();

/**
 * POST /api/livekit/token
 * Body: { roomName, userId, name, isHost }
 * Normally you'd verify auth here and validate room access.
 */
router.post('/token', async (req, res) => {
  try {
    const { roomName, userId, name, isHost } = req.body;

    if (!roomName || !userId) {
      return res.status(400).json({ error: 'roomName and userId required' });
    }

    const token = await createLivekitToken({
      roomName,
      identity: String(userId),
      name: name || `User-${userId}`,
      isHost: !!isHost,
    });

    return res.json({
      token,
      url: process.env.LIVEKIT_URL,
    });
  } catch (err) {
    console.error('LiveKit token error:', err);
    return res.status(500).json({ error: 'Failed to generate token' });
  }
});

module.exports = router;
