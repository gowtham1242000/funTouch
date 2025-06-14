const Event = require("../models/Event");
const User = require("../models/User");
const Notification = require("../models/Notification");
const { sendNotification } = require("../services/notifier");

const createEvent = async (req, res) => {
  const { type, title, description, priority } = req.body;
  const event = await Event.create({ type, title, description, priority });

  const users = await User.find({ "preferences.type": type });

  for (const user of users) {
    const pref = user.preferences.find((p) => p.type === type);
    for (const method of pref?.methods || []) {
      const duplicate = await Notification.findOne({
        userId: user._id,
        eventId: event._id,
        method,
      });
      if (!duplicate) {
        if (priority === "high") {
          sendNotification(method, user, event);
          await Notification.create({
            userId: user._id,
            eventId: event._id,
            method,
            title,
            priority,
          });
        }
        // Low priority is batched (simulate here or by CRON)
      }
    }
  }

  res.status(201).json(event);
};
module.exports = { createEvent };
