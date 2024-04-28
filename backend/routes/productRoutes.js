import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductsByGame,
  getSpecificProduct,
  addProduct,
  deleteProduct,
  getSingleProduct,
  updateProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router
  .route("/")
  .get(getProducts)
  .post(protect, admin, addProduct)
  .put(protect, admin, updateProduct);
router.route("/details/:id").get(protect, admin, getSingleProduct);
router.route("/delete/:id").delete(protect, admin, deleteProduct);
router.route("/:gameUrl").get(getProductsByGame);
router.route("/:gameUrl/:productUrl").get(getSpecificProduct);

export default router;
