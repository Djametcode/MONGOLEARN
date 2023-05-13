const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide username"],
  },
  avatar: {
    type: String,
    default:
      "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1480&t=st=1683963287~exp=1683963887~hmac=26eb6d7448f846bb86109810b367faf0c7341abc2809f0187efead68982a1f84",
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  chat: [
    {
      text: {
        type: String,
      },
      createdBy: {
        type: String,
      },
    },
  ],
});

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign(
    { userID: this._id, username: this.username },
    process.env.JWT_SECRET,
    { expiresIn: process.env.EXPIRES }
  );
};

UserSchema.methods.comparePass = async function (userPass) {
  const isMatch = await bcrypt.compare(userPass, this.password);
  return isMatch;
};

module.exports = mongoose.model("UserModel", UserSchema);
