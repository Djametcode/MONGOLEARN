const express = require("express");
const router = express.Router();

const { login, register, getAlluser } = require("../controller/auth");

router.get("/user", getAlluser);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
