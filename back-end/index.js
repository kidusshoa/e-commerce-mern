import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

const app = express();

dotenv.config();

app.get("/products", (req, res) => {
  res.send("It is ready");
});

app.listen(4000, () => {
  connectDB();
  console.log("listening on port 4000");
});
