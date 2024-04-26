import express from "express";
const router = express.Router();
import {
  getPublishKey,
  createPaymentIntent,
} from "../controllers/stripeController.js";

router.route("/config").get(getPublishKey);
router.route("/create-payment-intent").post(createPaymentIntent);

export default router;
