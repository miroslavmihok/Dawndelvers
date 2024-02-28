import mongoose from "mongoose";
import Product from "./productModel";

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  bg: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  productList: {
    type: [Product],
    required: true,
  },
});

const Game = mongoose.model("Game", gameSchema);

export default Game;
