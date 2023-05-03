const express = require("express");
const router = express.Router();
const {
  addData,
  getAllData,
  getDataById,
  deleteDAtaById,
  UpdateData,
  updateProfile,
  newChat,
  getChatUser,
} = require("../controller/add");
const upload = require("../utlis/multer");

router.post("/", upload, addData);
router.get("/", getAllData);
router.get("/:Id", getDataById);
router.delete("/:Id", deleteDAtaById);
router.patch("/:Id", UpdateData);
router.patch("/update-profile/:Id", updateProfile);
router.post("/send-chat/:Id", newChat);
router.get("/chat/:Id", getChatUser);

module.exports = router;
