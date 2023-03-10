const DataScheme = require("../model/Learn");

const getAllSecretMessage = async (req, res) => {
  const data = await DataScheme.find({}).sort("-date");
  res.status(200).json({ data });
};

const giveLike = async (req, res) => {
  try {
    const { Id } = req.params;
    const { like } = req.body;
    const data = await DataScheme.findOneAndUpdate(
      { _id: Id },
      { ...req.body },
      {
        new: true,
        runValidators: false,
      }
    );
    res.status(200).json({ data: { like: data.like } });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllSecretMessage, giveLike };
