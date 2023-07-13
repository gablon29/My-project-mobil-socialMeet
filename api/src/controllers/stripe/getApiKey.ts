import { STRIPE_PUBLISHABLE_KEY } from "../../config/env";
import { response } from "../../utils";
import { ClientError } from "../../utils/errors";

export default async function (req, res) {
    if (!STRIPE_PUBLISHABLE_KEY) throw new ClientError("STRIPE_PUBLISHABLE_KEY no existe en las variables de entorno", 500);
    response(res, 200, STRIPE_PUBLISHABLE_KEY)
  }
  