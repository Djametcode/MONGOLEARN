const DataScheme = require("../model/Learn");
const Chat = require("../model/chat");
const cloudinary = require("../utlis/cloudinary");
const UserModel = require("../model/users");

const addData = async (req, res) => {
  try {
    req.body.createdBy = req.UserModel.userId;

    if (!req.file) {
      return res.status(501).json({ msg: "No file attached please add file" });
    }

    let file = req.file;
    const result = await cloudinary.uploader.upload(file.path, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
      folder: "Testing",
      width: 300,
      crop: "scale",
    });

    req.body.image = {
      public_id: result.public_id,
      secure_url: result.secure_url,
    };

    const data = await DataScheme.create({
      ...req.body,
    });
    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

const getAllData = async (req, res) => {
  const data = await DataScheme.find({ createdBy: req.UserModel.username });
  console.log(req.UserModel.userId);

  return res.status(200).json({ data });
};

const getDataById = async (req, res) => {
  try {
    const { Id } = req.params;
    const data = await DataScheme.findOne({ _id: Id });
    if (!data) {
      return res.status(404).send(`Data dengan id ${Id} tidak di temukan`);
    }
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

const deleteDAtaById = async (req, res) => {
  try {
    const { Id } = req.params;
    const data = await DataScheme.findOneAndDelete({ _id: Id });
    if (!data) {
      return res.status(404).json({ msg: `Tidak ada data dengan id ${Id}` });
    }
    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

const UpdateData = async (req, res) => {
  try {
    const { Id } = req.params;
    const { username, address, secret } = req.body;
    if (!username || !address || !secret) {
      return res.status(501).json({ msg: "Tolong isi username dan address" });
    }
    const data = await DataScheme.findOneAndUpdate({ _id: Id }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!data) {
      return res
        .status(404)
        .json({ msg: `gagal mengupdate data dengan id ${Id}` });
    }

    res.status(200).json({ msg: `Berhasil mengupdate data`, data });
  } catch (error) {
    console.log(error);
  }
};

const updateProfile = async (req, res) => {
  try {
    const { Id } = req.params;
    const data = await DataScheme.findById({ _id: Id });
    console.log(data);
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

const getChatUser = async (req, res) => {
  try {
    const { Id } = req.params;
    const data = await UserModel.find({ _id: Id });
    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

const createNewChat = async (req, res) => {
  const { participant } = req.body;
  const createdBy = req.UserModel.userId;
  const newChat = new Chat({
    participant,
    createdBy,
    message: [],
  });

  try {
    const savedChat = await newChat.save();
    return res.status(200).json({ savedChat });
  } catch (error) {
    console.log(error);
  }
};

const sendChat = async (req, res) => {
  const { Id } = req.params;
  const { text } = req.body;
  const sender = req.UserModel.userId;
  try {
    const chat = await Chat.findById(Id);
    if (!chat) {
      return res.status(404).json({ msg: "Chat not found" });
    }

    const newMessage = {
      text,
      sender,
    };

    chat.message.push(newMessage);
    await chat.save();

    return res.status(200).json({ chat });
  } catch (error) {
    console.log(error);
  }
};

const getChat = async (req, res) => {
  const { Id } = req.params;
  try {
    const chat = await Chat.findOne({ _id: Id })
      .populate("participant")
      .populate("message.sender");

    return res.status(200).json({ chat });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addData,
  getAllData,
  getDataById,
  UpdateData,
  deleteDAtaById,
  updateProfile,
  getChatUser,
  createNewChat,
  getChat,
  sendChat,
};
