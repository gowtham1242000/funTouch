const express = require("express");
const { registerUser } = require("../controllers/userController");
const { createEvent } = require("../controllers/eventController");
const { getNotifications } = require("../controllers/notificationController");

const router = express.Router();

router.post("/users", registerUser);
router.post("/events", createEvent);
router.get("/notifications/:userId", getNotifications);

module.exports = router;
