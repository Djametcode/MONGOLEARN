const express = require("express");
const router = express.Router();
const {
  getAllSecretMessage,
  giveLike,
  givecomment,
  getComment,
} = require("../controller/universal");

router.get("/list", getAllSecretMessage);
router.get("/comment", getComment);
router.post("/list/:Id", giveLike);
router.post("/comment/", givecomment);

module.exports = router;
