const multer = require("multer");
const fs = require("fs");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const storage2 = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Testing",
    format: async (req, file) => "png",
  },
});

const upload = multer({ storage, limits: { fileSize: 1000000 } }).single(
  "file"
);

module.exports = upload;
