import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import products from "./data/products.js";

dotenv.config();

connectDB();

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:gameUrl", (req, res) => {
  const game = products.find((g) => g.url === req.params.gameUrl);
  res.json(game);
});

app.get("/api/products/:gameUrl/:productUrl", (req, res) => {
  const game = products.find((g) => g.url === req.params.gameUrl);
  const product = game.productList.find((p) => p.url === req.params.productUrl);
  res.json(product);
});

app.listen(port, () => console.log(`Server running on ${port}`));
