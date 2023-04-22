require("dotenv").config();
const express = require("express");
const fs = require("fs");
const connectDB = require("./db/connect");
const cors = require("cors");
const auth = require("./middleware/authentication");
// const fileupload = require("express-fileupload");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 8000;

//router import
const dataRouter = require("./routes/routes");
const authRouter = require("./routes/userroutes");
const universalRouter = require("./routes/globalroutes");

app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.json());
// app.use(fileupload({ useTempFiles: true }));

// app.use(fileUpload({ useTempFiles: true }));

app.use("/api/v3/u", universalRouter);
app.use("/api/v3/user", auth, dataRouter);
app.use("/api/v3/auth", authRouter);

// app.use(notfound);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`server running on localhost:${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
