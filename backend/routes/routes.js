const express = require("express");
const router = express.Router();
const {
  addData,
  getAllData,
  getDataById,
  deleteDAtaById,
  UpdateData,
} = require("../controller/add");

router.post("/", addData);
router.get("/", getAllData);
router.get("/:Id", getDataById);
router.delete("/:Id", deleteDAtaById);
router.patch("/:Id", UpdateData);

module.exports = router;
