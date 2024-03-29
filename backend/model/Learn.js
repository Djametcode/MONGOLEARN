const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide name"],
    minLength: 3,
  },
  address: {
    type: String,
    required: [true],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  secret: {
    type: String,
    default: "Gak ada secret message",
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModel",
    required: [true],
  },
  profile_picture: {
    type: String,
    secure_url: {
      type: String,
      default: "",
    },
  },
  image: {
    public_id: String,
    secure_url: {
      type: String,
      default: "",
    },
  },
  like: {
    type: Number,
    default: 0,
  },
  comments: [
    {
      comment: {
        type: String,
      },
    },
  ],
  chat: [
    {
      chats: String,
      createdBy: String,
    },
  ],
});

module.exports = mongoose.model("Schemas", Schema);
