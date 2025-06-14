const sendNotification = (method, user, event) => {
  console.log(`[${method.toUpperCase()}] To ${user.name}: ${event.title}`);
};

module.exports = { sendNotification };
