const express = require("express");
const router = express.Router();

const {
  login,
  register,
  getAlluser,
  deleteUser,
  getUserById,
} = require("../controller/auth");

router.get("/user", getAlluser);
router.get("/user/:Id", getUserById);
router.post("/register", register);
router.post("/login", login);
router.delete("/user/:Id", deleteUser);

module.exports = router;
