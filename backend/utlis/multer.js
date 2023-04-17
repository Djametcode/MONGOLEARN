const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const storageCloud = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Testing",
    format: async (req, file) => "auto",
    public_id: (req, file) => "avatar",
  },
});
const upload = multer({ storage: storageCloud });

module.exports = upload;
