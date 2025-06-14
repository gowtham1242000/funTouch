const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
  method: { type: String, enum: ["email", "sms", "inApp"], required: true },
  title: String,
  priority: { type: String, enum: ["high", "low"] },
  sentAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Notification", NotificationSchema);
