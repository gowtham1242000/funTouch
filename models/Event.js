const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  type: { type: String, required: true },
  title: { type: String, required: true },
  description: String,
  priority: { type: String, enum: ["high", "low"], required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Event", EventSchema);
