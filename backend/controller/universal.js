const DataScheme = require("../model/Learn");
const comment = require("../model/comment");
const UserModel = require("../model/users");

const getAllSecretMessage = async (req, res) => {
  const data = await DataScheme.find({}).sort("-date").populate("createdBy");
  res.status(200).json({ data });
};

const giveLike = async (req, res) => {
  try {
    const { Id } = req.params;
    const data = await DataScheme.findOneAndUpdate(
      { _id: Id },
      { ...req.body },
      {
        new: true,
        runValidators: false,
      }
    );
    res.status(200).json({ msg: "success", data: { like: data.like } });
  } catch (error) {
    console.log(error);
  }
};

const givecomment = async (req, res) => {
  try {
    const { Id } = req.params;
    const data = await DataScheme.findOneAndUpdate(
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

  const data = await DataScheme.findOne({ _id: Id });
  if (!data) {
    return res.status(404).json({ msg: "Komentar mungkin sudah di hapus" });
  }
  return res.status(200).json({ data: data.comments });
};

const getAvatarByPost = async (req, res) => {
  const { name } = req.params;
  const data = await UserModel.findOne({ username: name });
  if (!data) {
    return res.status(404).json({ msg: "User not found" });
  }

  return res.status(200).json({ avatar: data.avatar });
};

const getAllUser = async (req, res) => {
  try {
    const user = await UserModel.find({});
    const userData = user.map((item) => ({
      data: {
        id: item._id,
        username: item.username,
        avatar:
          item.avatar === ""
            ? "https://as2.ftcdn.net/v2/jpg/01/18/03/35/1000_F_118033506_uMrhnrjBWBxVE9sYGTgBht8S5liVnIeY.jpg"
            : item.avatar,
      },
    }));
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllSecretMessage,
  giveLike,
  givecomment,
  getComment,
  getCommentById,
  getAvatarByPost,
  getAllUser,
};
