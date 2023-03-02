import express from "express";
const router = express.Router();
import { addData, getAllData } from "../controller/add.js";

router.post("/", addData);
router.get("/", getAllData);

export { router };
