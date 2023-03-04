require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const cors = require("cors");
const auth = require("./middleware/authentication");

const app = express();
const port = process.env.PORT || 3000;

//router import
const dataRouter = require("./routes/routes");
const authRouter = require("./routes/userroutes");

app.use(cors());
app.use(express.json());

app.use("/api/v3/user", dataRouter);
app.use("/api/v3/auth", authRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`server running on localhost:${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
