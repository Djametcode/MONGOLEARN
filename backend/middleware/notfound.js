const motfound = (req, res, next) => {
  res.json({ msg: "Silahkan Login Lagi" });
  next();
};
