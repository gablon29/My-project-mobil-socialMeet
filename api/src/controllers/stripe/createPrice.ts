import { STRIPE_SECRET_KEY } from "../../config/env";
const stripe = require('stripe')(STRIPE_SECRET_KEY);

export default async function (req, res) {

    const { productId, interval, interval_count } = req.body || req

    const price = await stripe.prices.create({
        unit_amount: 99999,
        currency: 'eur',
        product: productId,
      });
      return price
};
