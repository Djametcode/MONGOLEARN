const DataScheme = require("../model/Learn");

const getAllSecretMessage = async (req, res) => {
  const data = await DataScheme.find({});
  res.status(200).json({ data });
};

module.exports = { getAllSecretMessage };
