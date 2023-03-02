import express from "express";
const router = express.Router();
import {
  addData,
  getAllData,
  getDataById,
  deleteDAtaById,
  UpdateData,
} from "../controller/add.js";

router.post("/", addData);
router.get("/", getAllData);
router.get("/:Id", getDataById);
router.delete("/:Id", deleteDAtaById);
router.patch("/:Id", UpdateData);

export { router };
