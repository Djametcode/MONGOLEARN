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
    type: String,
    ref: "UserModel",
    required: [true],
  },
  image: {
    public_id: String,
    secure_url: String,
  },
  like: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Schemas", Schema);
