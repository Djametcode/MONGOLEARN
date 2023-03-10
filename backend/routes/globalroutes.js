const express = require("express");
const router = express.Router();
const { getAllSecretMessage, giveLike } = require("../controller/universal");

router.get("/list", getAllSecretMessage);
router.post("/list/:Id", giveLike);

module.exports = router;
