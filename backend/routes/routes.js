const express = require("express");
const router = express.Router();
const {
  addData,
  getAllData,
  getDataById,
  deleteDAtaById,
  UpdateData,
  updateProfile,
} = require("../controller/add");
const upload = require("../utlis/multer");

router.post("/", addData);
router.get("/", getAllData);
router.get("/:Id", getDataById);
router.delete("/:Id", deleteDAtaById);
router.patch("/:Id", UpdateData);
router.patch("/update-profile/:Id", updateProfile);

module.exports = router;
