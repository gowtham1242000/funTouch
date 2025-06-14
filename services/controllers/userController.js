const User = require("../models/User");

const registerUser = async (req, res) => {
  const { name, email, phone, preferences } = req.body;
  const user = await User.create({ name, preferences, email, phone });
  res.status(201).json(user);
};
module.exports = { registerUser };
