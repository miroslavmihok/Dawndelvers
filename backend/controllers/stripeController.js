import { stripe } from "../server.js";

// @desc    Fetch publishable Key
// @route   GET /api/stripe/config
// @access  Public

const getPublishKey = (req, res) => {
  res.send({ publishableKey: process.env.STRIPE_PUBLISH_KEY });
};

// @desc    Send client secret
// @route   POST /api/stripe/create-payment-intent
// @access  Public
const createPaymentIntent = async (req, res) => {
  const { amount, currency } = req.body;
  const amountInCents = Math.round(amount * 100);

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: currency,
      payment_method_types: ["card"],
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(400);
    throw new Error(`Error creating payment intent: ${error.message}`);
  }
};

export { getPublishKey, createPaymentIntent };
