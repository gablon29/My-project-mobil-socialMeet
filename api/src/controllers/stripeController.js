const UserModel = require('../models/user.model'); //por si hay que hacer que cambie algun estado del usuario que compró algo

const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
STRIPE_WEBHOOK_SECRET = "ASDASD" // se obtiene de: https://stripe.com/docs/stripe-cli

async function processPurchase(req,res) {
try {
	// Getting data from client
	let { amount, name } = req.body;
	// Simple validation
	if (!amount || !name)
	  return res.status(400).json({ message: "All fields are required" });
	amount = parseInt(amount);
	// Initiate payment
	const paymentIntent = await stripe.paymentIntents.create({
	  amount: Math.round(amount * 100),
	  currency: "EUR",
	  payment_method_types: ["card"],
	  metadata: { name },
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

async function stripeCallback(req,res) {
    const sig = req.headers["stripe-signature"];
    let event;
    try {
        // Check if the event is sent from Stripe or a third party
        // And parse the event
        event = await stripe.webhooks.constructEvent(
            req.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err) {
        // Handle what happens if the event is not from Stripe
        console.log(err);
        return res.status(400).json({ message: err.message });
    }
    // Event when a payment is initiated
    if (event.type === "payment_intent.created") {
        console.log(`${event.data.object.metadata.name} initated payment!`);
    }
    // Event when a payment is succeeded
    if (event.type === "payment_intent.succeeded") {
        console.log(`${event.data.object.metadata.name} succeeded payment!`);
        // fulfilment
    }
    res.json({ ok: true });

}



module.exports = {
    stripeCallback,
    processPurchase,

};
