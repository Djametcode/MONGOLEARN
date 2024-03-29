const express = require("express");
const router = express.Router();
const {
  getAllSecretMessage,
  giveLike,
  givecomment,
  getComment,
  getCommentById,
  getAvatarByPost,
  getAllUser,
} = require("../controller/universal");
const { getUserById } = require("../controller/auth");

router.get("/list", getAllSecretMessage);
router.get("/comment", getComment);
router.post("/like/:Id", giveLike);
router.post("/comment/:Id", givecomment);
router.get("/comment/:Id", getCommentById);
router.get("/user/avatar/:name", getAvatarByPost);
router.get("/all-users", getAllUser);

module.exports = router;
