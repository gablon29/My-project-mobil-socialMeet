import getProductById from "./getProductById"
import getAllProducts from "./getAllProducts"
import getApiKey from "./getApiKey"
import postStartBuyProcess from "./postStartBuyProcess"
import postHandleStripeEvents from "./postHandleStripeEvents"

const stripeControllers =
{
    getAllProducts,
    getProductById,
    postHandleStripeEvents,
    getApiKey,
    postStartBuyProcess,

}

export default stripeControllers