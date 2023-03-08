const UserModel = require("../model/users");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const user = await UserModel.create({ ...req.body });
    const token = await user.createJWT();
    res.status(200).json({
      user: { name: user.username },
      token,
      msg: "Registrasi berhasil",
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
    res.status(200).json({ user: { name: user.username }, token });
  } catch (error) {
    console.log(error);
  }
};

const getAlluser = async (req, res) => {
  const user = await UserModel.find({});
  res.status(200).json({ list: { user } });
};

module.exports = { login, register, getAlluser };
