import * as Stripe from "stripe";
import { STRIPE_SECRET_KEY } from "../../config/env";

const stripe = new Stripe.Stripe(STRIPE_SECRET_KEY, {
  typescript: true,
  apiVersion: '2022-11-15',
});

export default stripe;