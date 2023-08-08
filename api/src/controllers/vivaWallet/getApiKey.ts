import { response } from "../../utils";
import { ClientError } from "../../utils/errors";
import { VIVA_WALLET_API_KEY } from "../../config/env";

export default async function (req, res) {
  if (!VIVA_WALLET_API_KEY) {
    throw new ClientError("VIVA_WALLET_API_KEY no existe en las variables de entorno", 500);
  }
  response(res, 200, VIVA_WALLET_API_KEY);
}