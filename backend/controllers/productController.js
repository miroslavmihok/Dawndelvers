import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// @desc    Fetch all Products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc    Fetch all Products
// @route   GET /api/products/:gameUrl
// @access  Public
const getProductsByGame = asyncHandler(async (req, res) => {
  const gameProducts = await Product.find({ gameUrl: req.params.gameUrl });

  if (gameProducts.length > 0) {
    res.json(gameProducts);
  } else {
    res.status(404);
    throw new Error(`No products found for game called ${req.params.gameUrl}`);
  }
});

// @desc    Fetch all Products
// @route   GET /api/products/:gameUrl/:productUrl
// @access  Public
const getSpecificProduct = asyncHandler(async (req, res) => {
  const product = await Product.findOne({
    gameUrl: req.params.gameUrl,
    url: req.params.productUrl,
  });

  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error(
      `No product found in ${req.params.gameUrl} with url ${req.params.gameUrl}`
    );
  }
});

export { getProducts, getProductsByGame, getSpecificProduct };
