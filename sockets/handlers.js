// src/sockets/handlers.js
const Message = require('../models/Message'); // agar chahe to abhi comment kar sakta hai
// const Notification = require('../models/Notification'); // future use

function registerSocketHandlers(io) {
  io.on('connection', (socket) => {
    console.log('🔌 Socket connected:', socket.id);

    // user-based room (notifications)
    socket.on('registerUser', ({ userId }) => {
      if (!userId) return;
      socket.join(`user:${userId}`);
      socket.userId = userId;
      console.log(`Socket ${socket.id} joined user:${userId}`);
    });

    // project room (chat)
    socket.on('joinProject', ({ projectId }) => {
      if (!projectId) return;
      socket.join(`project:${projectId}`);
      console.log(`Socket ${socket.id} joined project:${projectId}`);
    });

    // chat message handler
    socket.on('chat:send', async (payload, cb) => {
      try {
        const {
          projectId,
          sessionId,
          sender,
          text,
          file, // { url, originalName, mimeType, size }
        } = payload || {};

        if (!projectId || (!text && !file)) {
          return cb && cb({ ok: false, error: 'Invalid message' });
        }

        // 👉 Agar DB use karna hai to ye uncomment kar sakta hai
        // const msg = await Message.create({
        //   projectId,
        //   sessionId: sessionId || null,
        //   sender,
        //   text: text || '',
        //   file: file || null,
        // });

        const messageData = {
          _id: Date.now().toString(),
          projectId,
          sessionId: sessionId || null,
          sender,
          text: text || '',
          file: file || null,
          createdAt: new Date().toISOString(),
        };

        io.to(`project:${projectId}`).emit('chat:new', messageData);

        cb && cb({ ok: true, message: messageData });
      } catch (err) {
        console.error('chat:send error', err);
        cb && cb({ ok: false, error: 'Server error' });
      }
    });

    socket.on('disconnect', () => {
      console.log('❌ Socket disconnected:', socket.id);
    });
  });
}

// 🚨 IMPORTANT: yahi export hai
module.exports = registerSocketHandlers;
