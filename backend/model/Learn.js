import mongoose from "mongoose";

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
    default: new Date().getHours() + ":" + new Date().getMinutes,
  },
  secretMessage: {
    type: String,
    default: "Gak ada secret message",
  },
});

const model = mongoose.model("Schemas", Schema);
export { model };
