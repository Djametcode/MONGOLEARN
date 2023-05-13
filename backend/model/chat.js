const mongoose = require("mongoose");
const { Schema } = mongoose;

const chatSchema = new Schema({
  participant: [
    {
      user: {
        type: String,
        default: mongoose.Schema.Types.ObjectId,
        ref: "UserModel",
      },
    },
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModel",
    required: true,
  },
  message: [
    {
      text: {
        type: String,
        required: true,
      },
      sender: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "UserModel",
      },
      timestamp: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
});

module.exports = mongoose.model("Chat", chatSchema);
