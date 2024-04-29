import asyncHandler from '../middleware/asyncHandler.js';
import Product from '../models/productModel.js';

// @desc    Fetch all Products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc    Fetch Products by Game Category
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

// @desc    Fetch Product by specific Game url and product url
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
      `No product found in ${req.params.gameUrl} with url ${req.params.productUrl}`
    );
  }
});

// @desc    Fetch Product by its id
// @route   GET /api/products/details/:id
// @access  Private/Admin
const getSingleProduct = asyncHandler(async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });

  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error(`No product found with this id`);
  }
});

// @desc    Update product information
// @route   PUT /api/products
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findOne({ _id: req.body.id });

  if (product) {
    product.title = req.body.title;
    product.url = req.body.url;
    product.imgSrc = req.body.imgSrc;
    product.category = req.body.category;
    product.description = req.body.description;
    product.price = req.body.price;
    product.priceBeforeDiscount = req.body.priceBeforeDiscount;
    product.deal = req.body.deal;
    product.filters = req.body.filters;

    const updatedProduct = await product.save();

    res.status(200).json({
      title: updatedProduct.title,
      url: updatedProduct.url,
      imgSrc: updatedProduct.imgSrc,
      category: updatedProduct.category,
      description: updatedProduct.description,
      price: updatedProduct.price,
      priceBeforeDiscount: updatedProduct.priceBeforeDiscount,
      deal: updatedProduct.deal,
      filters: updatedProduct.filters,
    });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc    Add product
// @route   POST /api/products
// @access  Private/Admin
const addProduct = asyncHandler(async (req, res) => {
  const {
    title,
    url,
    imgSrc,
    game,
    gameUrl,
    category,
    description,
    price,
    priceBeforeDiscount,
    deal,
    filters,
  } = req.body;

  const productExists = await Product.findOne({ url });

  if (
    !title ||
    !url ||
    !imgSrc ||
    !game ||
    !gameUrl ||
    !category ||
    !description ||
    !price ||
    !priceBeforeDiscount ||
    !deal ||
    !filters
  ) {
    res.status(400);
    throw Error('All fields must be filled');
  } else if (productExists && productExists.gameUrl === gameUrl) {
    res.status(400);
    throw new Error('Product with this url path name already exists');
  } else {
    const product = new Product({
      user: req.user._id,
      title,
      url,
      imgSrc,
      game,
      gameUrl,
      category,
      description,
      price,
      priceBeforeDiscount,
      deal,
      filters,
      reviews: [],
      rating: 0,
      numReviews: 0,
    });

    const createdProduct = await product.save();

    res.status(201).json(createdProduct);
  }
});

// @desc    Remove product
// @route   DELETE /api/products/delete/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await Product.deleteOne({ _id: product._id });
    res.status(200).json({ message: 'Product deleted' });
  } else {
    res.status(404);
    throw new Error('Resource not found');
  }
});

export {
  getProducts,
  getProductsByGame,
  getSpecificProduct,
  getSingleProduct,
  updateProduct,
  addProduct,
  deleteProduct,
};
