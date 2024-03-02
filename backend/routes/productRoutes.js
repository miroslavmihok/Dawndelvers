import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductsByGame,
  getSpecificProduct,
} from "../controllers/productController.js";

router.route("/").get(getProducts);
router.route("/:gameUrl").get(getProductsByGame);
router.route("/:gameUrl/:productUrl").get(getSpecificProduct);

export default router;
