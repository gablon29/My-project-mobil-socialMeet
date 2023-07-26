import { response } from "../../utils";
import axios from "axios";
import { STRIPE_SECRET_KEY } from "../../config/env";
const stripe = require('stripe')(STRIPE_SECRET_KEY);
//ejemplo_crear_producto_subscripcion
// const BEST = await stripe.products.create({
//   id: 'BEST', 
//   type: 'service',
//   name: 'Best Plan',
//   shippable: false,
//   active: true,
//   metadata: { tier: "BEST" }
// })
//ejemplo_crear_producto_subscripcion
// const BEST_PRICE = await stripe.prices.create({
//   metadata: { tier: "BEST" },
//   product: BEST.id,
//   unit_amount: 7000,
//   currency: 'eur',
//   active: true,
//   recurring: {
//     interval: 'month',
//     usage_type: 'licensed',
//   },
// })
// BEST_PRICE.product = BEST
export default async function (req, res) {

    console.log(req.params)
    const product = await stripe.products.create({
      "name": "asdasd",
      "active": true,
      "metadata":{
        vendedor: "asdasd"
      }
    })
    console.log(product)
};
