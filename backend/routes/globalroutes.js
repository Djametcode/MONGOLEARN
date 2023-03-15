const express = require("express");
const router = express.Router();
const {
  getAllSecretMessage,
  giveLike,
  givecomment,
} = require("../controller/universal");

router.get("/list", getAllSecretMessage);
router.post("/list/:Id", giveLike);
router.patch("/comment/:Id", givecomment);

module.exports = router;
