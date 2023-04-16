const UserModel = require("../model/users");
const jwt = require("jsonwebtoken");
const cloudinary = require("../utlis/cloudinary");
const upload = require("../utlis/multer");

const register = async (req, res) => {
  try {
    const user = await UserModel.create({ ...req.body });
    const token = await user.createJWT();
    res.status(200).json({
      user: { name: user.username },
      token,
      msg: "Registrasi berhasil",
      avatar: user.avatar,
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(501).json({ msg: "please provide email or password" });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      res.status(404).json({ msg: "User Not Found" });
    }

    const isPassCorrect = await user.comparePass(password);

    if (!isPassCorrect) {
      res.status(501).json({ msg: "Password Salah" });
    }
    const token = await user.createJWT();
    const email_user = user.email;
    const id_user = user._id;
    res.status(200).json({
      user: { name: user.username, email_user: email_user, id_user: id_user },
      token,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAlluser = async (req, res) => {
  const user = await UserModel.find({});
  res.status(200).json({
    list: { jumlah: user.length },
    username: user.map((item) => item.username),
  });
};
const getUserById = async (req, res) => {
  try {
    const { Id: userId } = req.params;
    const user = await UserModel.findOne({ _id: userId });
    if (!user) {
      res.status(404).json({ msg: "User tidak di temukan" });
    }

    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { Id: userId } = req.params;
    const user = await UserModel.findOneAndDelete({ _id: userId });
    if (!user) {
      res.status(404).json({ msg: "User tidak di temukan" });
    }
    res.status(200).json({ user, msg: "Berhasil menghapus User" });
  } catch (error) {
    console.log(error);
  }
};

const updateAvatar = async (req, res) => {
  try {
    const { Id } = req.params;

    const file = req.files.file;
    console.log(file);

    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      resource_type: "auto",
      public_id: `${Date.now()}`,
      width: 100,
      folder: "Testing",
    });

    req.body.avatar = result.secure_url;

    const data = await UserModel.findOneAndUpdate(
      { _id: Id },
      { ...req.body },
      { new: true }
    );

    return res.status(200).json({ msg: "success", data });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  login,
  register,
  getAlluser,
  deleteUser,
  getUserById,
  updateAvatar,
};
