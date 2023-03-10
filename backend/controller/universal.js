const DataScheme = require("../model/Learn");

const getAllSecretMessage = async (req, res) => {
  const data = await DataScheme.find({}).sort("-date");
  res.status(200).json({ data });
};

const giveLike = async (req, res) => {
  try {
    const { Id } = req.params;
    const { like } = req.body;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllSecretMessage, giveLike };
