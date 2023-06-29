const UserModel = require('../models/user.model'); //por si hay que hacer que cambie algun estado del usuario que compró algo

const Stripe = require("stripe");
//require('dotenv').config();

//se obtiene de stripe la página, luego de el registro completo, el modo dev no requiere de registro completo.
const stripe_secret_key=process.env.STRIPE_SECRET_KEY || "sk_test_51NNLCpD6q36zl0Ib9bzWPLvXai9SE15p34hbHwXkiqCYVfQCDd4SOXK0dsoPA7xGXSPKFljW1gm3a1TFbfF66Taj00KsEMdevs"
// se obtiene de: https://stripe.com/docs/stripe-cli
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || "whsec_TmZeDc0LlCNQyv6bQtLeN33k41feZRcb"

const StripeUSABLE = Stripe(stripe_secret_key);



async function processPurchase(req,res) {
try {
	// Getting data from client
	let { amount, name , product_id, address,customer_id} = req.headers
    console.log("el body viene vacio no se porque: ", req.body);
    console.log("por eso usamos los headers para enviar datos: ", req.headers);
	// Simple validation
	if (!amount || !name || !address || !product_id || !customer_id )
	  return res.status(400).json({ message: "All fields are required" });
	amount = parseInt(amount);

  //Aqui buscar en la database si el productID y el precio con lo que lo paga, coinciden
  //buscar en mongodb...

	// Initiate payment, la siguiente linea manda informacion a stripe,
  // con esta informacion, stripe empieza a mandar EVENTOS a la ruta
  // "/stripe/callback" de nuestra api relacionada a esta compra en especifico.
	const paymentIntent = await StripeUSABLE.paymentIntents.create({
	  amount: Math.round(amount * 100),
	  currency: "EUR",
	  payment_method_types: ["card"],
	  metadata: { amount: Math.round(amount * 100),name,customer_id,customer_id,address},
	});

	// Extracting the client secret 
	const clientSecret = paymentIntent.client_secret;
	// Sending the client secret as response
	res.json({ message: "Payment initiated", clientSecret });
  } catch (err) {
	// Catch any error and send error 500 to client
	console.error(err);
	res.status(500).json({ message: "Internal Server Error" });
  }
}


// Stripe va llamando a esta ruta con "eventos", cada evento es diferente 
// y pueden ser eventos de diferente compras concurrentes, pero cada 
// evento contiene informacion suficiente para determinar a quien le pertenece
// la compra, y algun METADATA  
// y lo manejamos dentro de un switch case.
async function stripeCallback(req,res) {
    const sig = req.headers["stripe-signature"];
  console.log("Body que envia stripe: ",req.body,);
    let event;
    try {
        // Check if the event is sent from Stripe or a third party
        // And parse the event
        event = await StripeUSABLE.webhooks.constructEvent(
            req.body,
            sig,
            STRIPE_WEBHOOK_SECRET
        );
    } catch (err) {
        // Handle what happens if the event is not from Stripe
        console.log(err);
        return res.status(400).json({ message: err.message });
    }
    // Event when a payment is initiated
    if (event.type === "payment_intent.created") {
        console.log(`${JSON.stringify(event.data.object.metadata)} initated payment!`);
        // Si el valor de lo que quiere pagar no coincide con su precio real, no aceptar el pago!!!
    }
    // Event when a payment is succeeded
    if (event.type === "payment_intent.succeeded") {
        // fulfilment
    }
    
      // Manejar el tipo de evento
  switch (event.type) {
    case 'charge.refunded':
      const chargeRefunded = event.data.object;
      // Si el usuario que compró, le dijo a stripe que se arrepiente, aqui 
      // deberiamos de enviar una notificación al dueño del producto que no lo envíe
      // ya que el comprador cancelo la compra.  
      break;
    case 'charge.succeeded':
      const chargeSucceeded = event.data.object;
      // Cuando a un usuario que compro algo, se le quita el dinero de su cuenta y se transfirio
      // exitosamente a la cuenta maestra de esta API. 
      break;
    case 'payment_intent.canceled':
      const paymentIntentCanceled = event.data.object;
      // Then define and call a function to handle the event payment_intent.canceled
      break;
    case 'payment_intent.created':
      const paymentIntentCreated = event.data.object;
      console.log(`${JSON.stringify(event.data.object.metadata)} initated payment!`);
      //Ocurre cuando un usuario oprime el boton "BUY"
      
      break;

    case 'payment_intent.payment_failed':
      const paymentIntentPaymentFailed = event.data.object;
      // Cuando algo en el proceso falló
      break;
    case 'payment_intent.processing':
      const paymentIntentProcessing = event.data.object;
      // Then define and call a function to handle the event payment_intent.processing
      break;
    case 'payment_intent.requires_action':
      const paymentIntentRequiresAction = event.data.object;
      // Then define and call a function to handle the event payment_intent.requires_action
      break;
    case 'payment_intent.succeeded':
      const paymentIntentSucceeded = event.data.object;
      console.log(`${JSON.stringify(event.data.object)} succeeded payment!`);
      // Se podria hacer que envíe un email al Dueño de la cuenta de stripe diciendole que tiene que 
      // enviar un producto que le acaban de comprar.
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }


    res.json({ ok: true });

}



module.exports = {
    stripeCallback,
    processPurchase,

};
