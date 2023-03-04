const UserModel = require("../model/users");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorzation;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(501).json({ msg: "User tidak punya izin" });
  }

  const token = authHeader;
  const item = token.split(" ")[1];

  try {
    const payload = jwt.verify(item, process.env.JWT_SECRET);
    req.user = { userId: payload.userId, username: payload.username };
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = auth;
