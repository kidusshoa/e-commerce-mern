import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

const app = express();

app.use(express.json());

dotenv.config();

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("Error in fetching products", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.post("/api/products", async (req, res) => {
  const product = req.body;
  if (!product.name || !product.price || !product.image) {
    return res
      .status(404)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({
      success: true,
      data: newProduct,
    });
  } catch (error) {
    console.log("Error in creating product", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res
      .status(201)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.log("Error in deleting product", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.listen(4000, () => {
  connectDB();
  console.log("listening on port 4000");
});
