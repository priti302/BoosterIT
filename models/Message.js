// src/models/Message.js
const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema(
  {
    url: String,
    originalName: String,
    mimeType: String,
    size: Number,
  },
  { _id: false }
);

const MessageSchema = new mongoose.Schema(
  {
    // ✅ Ab ObjectId nahi, plain string
    projectId: {
      type: String,
      required: true,
    },

    // Session ID ko ab simple string rakh dete hain (easy filter)
    sessionId: {
      type: String,
      default: null,
    },

    sender: {
      id: String,
      name: String,
    },

    text: {
      type: String,
      default: '',
    },

    file: {
      type: FileSchema,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Message', MessageSchema);
