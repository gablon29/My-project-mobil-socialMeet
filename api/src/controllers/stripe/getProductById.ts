import { response } from "../../utils";
import axios from "axios";
import { STRIPE_SECRET_KEY } from "../../config/env";

export default async function (req, res) {
  const item_id: string = req.params.productId || "prod_ODLaCJVZYdeqvM"
  const price_id: string = req.body.price_id

  const result = await axios.post(
    `https://dashboard.stripe.com/v1/products/${item_id}`,
    {
      default_price: price_id,
    },
    {
      headers: {
        Authorization:
          "Bearer "+STRIPE_SECRET_KEY,
      },
    }
  );
  response(res, 200, result)
};
