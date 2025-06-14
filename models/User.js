const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String }, // <- Add this
  phone: { type: String }, // <- And this
  preferences: [
    {
      type: { type: String, required: true },
      methods: [{ type: String, enum: ["email", "sms", "inApp"] }],
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
