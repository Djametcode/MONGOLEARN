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
  like: {
    type: Number,
  },
});

module.exports = mongoose.model("Schemas", Schema);
