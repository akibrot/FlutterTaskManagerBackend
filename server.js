import express from "express";
import cors from "cors";
import router from "./routes/routes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
app.use(express.json({ limit: "50mb" }));

app.use(cors());

dotenv.config();
mongoose.connect(process.env.MONGODBURL, () => {
  console.log("created");
});

app.listen(process.env.PORT || 8080, () => {
  console.log("app started");
});
app.use(router);
