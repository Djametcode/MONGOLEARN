const express = require("express");
const router = express.Router();

const {
  login,
  register,
  getAlluser,
  deleteUser,
  getUserById,
  updateAvatar,
} = require("../controller/auth");

router.get("/user", getAlluser);
router.get("/user/:Id", getUserById);
router.post("/register", register);
router.post("/login", login);
router.delete("/user/:Id", deleteUser);
router.patch("/user/update-avatar/:Id", updateAvatar);

module.exports = router;
