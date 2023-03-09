const notfound = (req, res) => {
  res.json({ msg: "route tidak ditemukan" });
};

module.exports = notfound;
