const UserModel = require("../model/users");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const chatSchema = new Schema({
  user1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModel",
    required: true,
  },
  user2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModel",
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Chat", chatSchema);
