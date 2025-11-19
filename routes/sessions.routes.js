const express = require('express');
const Session = require('../models/Session');
const { createAndDispatchNotification } = require('../services/notificationService');

const router = express.Router();

/**
 * POST /api/sessions
 * Create scheduled or instant session.
 * Body: {
 *   projectId, title, roomName?, scheduledStart?, scheduledEnd?,
 *   host: { id, name, email },
 *   participants: [{ id, name, email }]
 * }
 */
router.post('/', async (req, res) => {
  try {
    const {
      projectId,
      title,
      roomName,
      scheduledStart,
      scheduledEnd,
      host,
      participants = [],
    } = req.body;

    if (!projectId || !title || !host?.id) {
      return res.status(400).json({ error: 'projectId, title, host required' });
    }

    const finalRoomName =
      roomName ||
      `proj-${projectId}-session-${Date.now().toString(36)}`;

    const session = await Session.create({
      projectId,
      title,
      roomName: finalRoomName,
      scheduledStart: scheduledStart ? new Date(scheduledStart) : null,
      scheduledEnd: scheduledEnd ? new Date(scheduledEnd) : null,
      host,
      participants,
      status: 'scheduled',
    });

    // Notify participants
    for (const p of participants) {
      if (!p.id) continue;

      await createAndDispatchNotification({
        userId: p.id,
        type: 'session_invite',
        title: `New Live Session: ${title}`,
        body: `You have been invited to a session "${title}". Room: ${finalRoomName}`,
        data: {
          sessionId: session._id.toString(),
          roomName: finalRoomName,
          projectId,
        },
        email: p.email,
      });
    }

    return res.status(201).json(session);
  } catch (err) {
    console.error('Create session error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
});

/**
 * GET /api/sessions?projectId=...&status=...
 */
router.get('/', async (req, res) => {
  try {
    const { projectId, status } = req.query;
    const query = {};
    if (projectId) query.projectId = projectId;
    if (status) query.status = status;

    const sessions = await Session.find(query).sort({ scheduledStart: 1 });
    return res.json(sessions);
  } catch (err) {
    console.error('List sessions error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
});

/**
 * PATCH /api/sessions/:id/status
 * Body: { status }
 */
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const allowed = ['scheduled', 'live', 'completed', 'cancelled'];
    if (!allowed.includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const session = await Session.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    return res.json(session);
  } catch (err) {
    console.error('Update session status error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
