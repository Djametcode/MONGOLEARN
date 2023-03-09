const express = require("express");
const router = express.Router();
const { getAllSecretMessage } = require("../controller/universal");

router.get("/list", getAllSecretMessage);

module.exports = router;
