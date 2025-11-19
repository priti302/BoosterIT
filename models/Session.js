const mongoose = require('mongoose');

const ParticipantSchema = new mongoose.Schema(
  {
    id: String, 
    name: String,
    email: String,
  },
  { _id: false }
);

const SessionSchema = new mongoose.Schema(
  {
   projectId: {
      type: String,
      required: true,
    },
    roomName: { type: String, required: true, unique: true },
    title: { type: String, required: true },

    scheduledStart: { type: Date },
    scheduledEnd: { type: Date },

    host: ParticipantSchema,
    participants: [ParticipantSchema],

    status: {
      type: String,
      enum: ['scheduled', 'live', 'completed', 'cancelled'],
      default: 'scheduled',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Session', SessionSchema);
