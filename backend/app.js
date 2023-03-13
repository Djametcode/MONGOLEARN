require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const cors = require("cors");
const auth = require("./middleware/authentication");
const fileUpload = require("express-fileupload");

const app = express();
const port = process.env.PORT || 3000;

//router import
const dataRouter = require("./routes/routes");
const authRouter = require("./routes/userroutes");
const universalRouter = require("./routes/globalroutes");

app.use(cors());
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

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
