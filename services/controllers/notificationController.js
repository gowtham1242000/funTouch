const Notification = require("../models/Notification");

const getNotifications = async (req, res) => {
  const { userId } = req.params;
  const { type, priority, date } = req.query;

  const query = { userId };
  if (priority) query.priority = priority;
  if (date) query.sentAt = { $gte: new Date(date) };

  const notifications = await Notification.find(query);
  res.json(notifications);
};

module.exports = { getNotifications };
    