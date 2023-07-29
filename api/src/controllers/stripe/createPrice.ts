import { STRIPE_SECRET_KEY } from "../../config/env";
const stripe = require('stripe')(STRIPE_SECRET_KEY);

export default async function (req, res) {

    const { productId, interval, interval_count, unit_amount } = req.body || req

    const price = await stripe.prices.create({
        unit_amount: unit_amount,
        currency: 'eur',
        product: productId,
      });
      return price
};
