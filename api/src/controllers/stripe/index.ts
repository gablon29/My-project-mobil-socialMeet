import getProductById from "./getProductById"
import getAllProducts from "./getAllProducts"
import getApiKey from "./getApiKey"
import postStartBuyProcess from "./postStartBuyProcess"
import postHandleStripeEvents from "./postHandleStripeEvents"
import createProducts from "./createProducts"
import createPrice from './createPrice'
import editPrice from "./editPrice"

const stripeControllers =
{
    getAllProducts,
    getProductById,
    postHandleStripeEvents,
    getApiKey,
    postStartBuyProcess,
    createProducts,
    createPrice,
    editPrice
}

export default stripeControllers