const Notification = require('../models/Notification');
const { getIO } = require('../sockets/io');
const { sendMail } = require('../config/mailer');

async function createAndDispatchNotification({
  userId,
  type,
  title,
  body,
  data,
  email,
}) {
  const notif = await Notification.create({
    userId,
    type,
    title,
    body,
    data: data || {},
  });

  // In-app notification (Socket.io)
  try {
    const io = getIO();
    io.to(`user:${userId}`).emit('notification:new', notif.toObject());
  } catch (err) {
    console.warn('Socket notification error (probably io not ready yet):', err.message);
  }

  // Email notification (optional)
  if (email) {
    try {
      await sendMail({
        to: email,
        subject: title || 'Notification',
        html: `<p>${body}</p>`,
      });
    } catch (err) {
      console.warn('Email send error:', err.message);
    }
  }

  return notif;
}

module.exports = { createAndDispatchNotification };
