const express = require('express');
const {
  handl
} = require('../controllers/userController');
const { checkJwt } = require('../utils/jwtUtils');
const { limit5cada30minutos } = require('../utils/rate-limiters');
const UserModel = require('../models/user.model');

const router = express.Router();


//cliente hace un post con sus datos
//se reciben aquí, y se hace una peticion a stripe para confirmar la compra
//esta ruta es /api/stripe-buy-checkout/


router.post('/', async (req, res) => {
  console.log("datos body: ",req.body)

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
});

module.exports = router;