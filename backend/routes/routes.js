const express = require("express");
const router = express.Router();
const {
  addData,
  getAllData,
  getDataById,
  deleteDAtaById,
  UpdateData,
  updateProfile,
  getChatUser,
  createNewChat,
  sendChat,
} = require("../controller/add");
const upload = require("../utlis/multer");

router.post("/", upload, addData);
router.get("/", getAllData);
router.get("/:Id", getDataById);
router.delete("/:Id", deleteDAtaById);
router.patch("/:Id", UpdateData);
router.patch("/update-profile/:Id", updateProfile);
router.post("/create-chat", createNewChat);
router.get("/chat/:Id", getChatUser);
router.post("/send-chat/:Id", sendChat);

module.exports = router;
