const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true }, // target user from your auth system
    type: {
      type: String,
      enum: ['message', 'file', 'session_invite'],
      required: true,
    },
    title: String,
    body: String,
    data: mongoose.Schema.Types.Mixed,
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Notification', NotificationSchema);
