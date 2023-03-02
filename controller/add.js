import { model } from "../model/Learn.js";

const addData = async (req, res) => {
  const data = await model.create({ ...req.body });
  return res.status(200).json({ data });
};

const getAllData = async (req, res) => {
  const data = await model.find({});
  return res.status(200).json({ data });
};

const getDataById = async (req, res) => {};

export { addData, getAllData };
