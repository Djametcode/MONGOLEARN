const DataScheme = require("../model/Learn");
const cloudinary = require("../utlis/cloudinary");

const addData = async (req, res) => {
  try {
    req.body.createdBy = req.UserModel.username;
    const file = req.files.image;

    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
      folder: "Testing",
    });

    const data = await DataScheme.create({
      image: {
        public_id: result.public_id,
        url: result.secure_url,
      },
      ...req.body,
    });
    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

const getAllData = async (req, res) => {
  const data = await DataScheme.find({ createdBy: req.UserModel.username });
  console.log(req.UserModel.userId);

  return res.status(200).json({ data });
};

const getDataById = async (req, res) => {
  try {
    const { Id } = req.params;
    const data = await DataScheme.findOne({ _id: Id });
    if (!data) {
      return res.status(404).send(`Data dengan id ${Id} tidak di temukan`);
    }
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

const deleteDAtaById = async (req, res) => {
  try {
    const { Id } = req.params;
    const data = await DataScheme.findOneAndDelete({ _id: Id });
    if (!data) {
      return res.status(404).json({ msg: `Tidak ada data dengan id ${Id}` });
    }
    return res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

const UpdateData = async (req, res) => {
  try {
    const { Id } = req.params;
    const { username, address, secret } = req.body;
    if (!username || !address || !secret) {
      return res.status(501).json({ msg: "Tolong isi username dan address" });
    }
    const data = await DataScheme.findOneAndUpdate({ _id: Id }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!data) {
      return res
        .status(404)
        .json({ msg: `gagal mengupdate data dengan id ${Id}` });
    }

    res.status(200).json({ msg: `Berhasil mengupdate data`, data });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addData,
  getAllData,
  getDataById,
  UpdateData,
  deleteDAtaById,
};
