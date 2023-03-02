import {} from "dotenv/config";
import express from "express";
import { connectDB } from "./db/connect.js";
const app = express();
const port = process.env.PORT || 3000;

//router import
import { router } from "./routes/routes.js";

app.use(express.json());
app.use("/api/v3/user", router);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`server running on localhost:${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
