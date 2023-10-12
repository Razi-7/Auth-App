import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config();
mongoose
  .connect(process.env.MONG)
  .then(() => {
    console.log(`connected MONGDB`);
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log(`server Listening on port 3000`);
});
//api
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
