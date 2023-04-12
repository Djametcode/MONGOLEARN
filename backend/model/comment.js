const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  comments: [
    {
      comment: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("Comment", commentSchema);
