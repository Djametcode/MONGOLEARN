const express = require("express");
const router = express.Router();
const {
  getAllSecretMessage,
  giveLike,
  givecomment,
  getComment,
  getCommentById,
} = require("../controller/universal");

router.get("/list", getAllSecretMessage);
router.get("/comment", getComment);
router.post("/like/:Id", giveLike);
router.post("/comment/:Id", givecomment);
router.get("/comment/:Id", getCommentById);

module.exports = router;
