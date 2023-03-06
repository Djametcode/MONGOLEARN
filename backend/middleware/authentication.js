const UserModel = require("../model/users");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(501).json({ msg: "User tidak punya izin" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // const user = UserModel.findById(payload.id).select("-password");
    // req.UserModel = user;

    req.UserModel = { userId: payload.userID, username: payload.username };
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = auth;
