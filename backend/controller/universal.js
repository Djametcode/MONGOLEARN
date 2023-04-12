const DataScheme = require("../model/Learn");
const comment = require("../model/comment");
const UserModel = require("../model/users");

const getAllSecretMessage = async (req, res) => {
  const data = await DataScheme.find({}).sort("-date");
  res.status(200).json({ data });
};

const giveLike = async (req, res) => {
  try {
    const { Id } = req.params;
    const { like } = req.body;
    const data = await comment.findOneAndUpdate(
      { _id: Id },
      { ...req.body },
      {
        new: true,
        runValidators: false,
      }
    );
    res.status(200).json({ data: { like: data.like } });
  } catch (error) {
    console.log(error);
  }
};

const givecomment = async (req, res) => {
  try {
    const { Id } = req.params;
    const data = await comment.findOneAndUpdate(
      { _id: Id },
      {
        $push: {
          comments: {
            ...req.body,
          },
        },
      },
      { new: true }
    );
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

const getComment = async (req, res) => {
  try {
    const data = await comment.find({});
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

const getCommentById = async (req, res) => {
  const { Id } = req.params;

  const data = await comment.findOne({ _id: Id });
  if (!data) {
    return res.status(404).json({ msg: "Komentar mungkin sudah di hapus" });
  }

  return res.status(200).json({ data });
};
module.exports = {
  getAllSecretMessage,
  giveLike,
  givecomment,
  getComment,
  getCommentById,
};
