const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    clientId: { type: String }, // your auth system user id
    teamId: { type: String },   // team id / organization id
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', ProjectSchema);
