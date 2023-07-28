import { response } from "../../utils";
import axios from "axios";
import { STRIPE_SECRET_KEY } from "../../config/env";
import stripe from "./stripe";

export default async function (req, res) {
  const item_id: string = req.body.item_id || "prod_ODLaCJVZYdeqvM"
  const price_id: string = req.body.price_id


  const prices = await stripe.prices.list({
    /*  lookup_keys: ['sample_basic', 'sample_premium'], */
    expand: ['data.product'],
  });

  const allPrices = prices.data
  const formattedPrices = allPrices.map((price:any) => {
    return {
      active: price.active || true,
      currency: price.currency || '',
      id: price.id || '',
      type: price.type || '', // Replace with the appropriate type for your schema
      unit_amount: price.unit_amount || 70000,
      metadata: price.metadata || {},
      product: {
        name: price.product.name || '', // Replace with the appropriate name for your schema
        active: price.product.active || true,
        default_price: price.product.default_price || '',
        description: price.product.description || false, // Replace with the appropriate description for your schema
        id: price.product.id || '',
        images: price.product.images || [], // Add the appropriate images for your schema
        livemode: price.product.livemode || false,
        metadata: price.product.metadata || {}, // Add the appropriate metadata for your schema
      },
    };
  });

  //const products_and_prices = await products.findOneAndUpdate({ type: 'solo_para_no_sobrecrgar_db' }, { $set: { prices: formattedPrices } }, { upsert: true, new: true });
  //res.status(200).json({ success: true, payload: products_and_prices });


const result = await axios.post(
  `https://dashboard.stripe.com/v1/products/${item_id}`,
  {
    default_price: price_id,
  },
  {
    headers: {
      Authorization:
        "Bearer " + STRIPE_SECRET_KEY,
    },
  }
);
response(res, 200, result)
};
