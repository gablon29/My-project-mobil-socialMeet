import { STRIPE_SECRET_KEY } from "../../config/env";
const stripe = require('stripe')(STRIPE_SECRET_KEY);

export default async function (req, res) {

    const { newPrice, priceId } = req.body || req

    const precioActualizado = await stripe.prices.update(priceId, {
        unit_amount: newPrice,
        currency: 'eur',
      });
  
    return precioActualizado
};
