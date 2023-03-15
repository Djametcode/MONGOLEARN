const DataScheme = require("../model/Learn");
const cloudinary = require("../utlis/cloudinary");

const addData = async (req, res) => {
  try {
    req.body.createdBy = req.UserModel.username;

    const { image } = req.body;

    if (image === "") {
      req.body.image = "";
    } else {
      const result = await cloudinary.uploader.upload(image, {
        public_id: `${Date.now()}`,
        resource_type: "auto",
        folder: "Testing",
        width: 300,
        crop: "scale",
      });

      req.body.image = {
        public_id: result.public_id,
        secure_url: result.secure_url,
      };
    }

    const data = await DataScheme.create({
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
