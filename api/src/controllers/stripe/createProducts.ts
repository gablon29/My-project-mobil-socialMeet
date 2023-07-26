import { response } from "../../utils";
import axios from "axios";
import { STRIPE_SECRET_KEY } from "../../config/env";
const stripe = require('stripe')(STRIPE_SECRET_KEY);

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
