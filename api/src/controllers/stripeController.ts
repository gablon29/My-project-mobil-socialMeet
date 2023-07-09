import * as Stripe from "stripe";
import { response } from "../utils";
import { Request, RequestHandler } from "express";
import { ClientError } from "../utils/errors";
//require('dotenv').config();
const UserModel = require('../models/user.model'); //por si hay que hacer que cambie algun estado del usuario que compró algo


interface input extends Express.Request {
  headers,
  body,
  params,
  query,
  user: {userId, email}
}

const stripe_secret_key:string = process.env.STRIPE_SECRET_KEY;//se obtiene de stripe la página, luego de el registro completo, el modo dev no requiere de registro completo.
const STRIPE_WEBHOOK_SECRET:string = process.env.STRIPE_WEBHOOK_SECRET; // se obtiene de: https://stripe.com/docs/stripe-cli
const STRIPE_PUBLISHABLE_KEY:string = process.env.STRIPE_PUBLISHABLE_KEY

const stripe = new Stripe.Stripe(stripe_secret_key,null);

export async function processPurchase(req: input, res) {
  let { amount, name, product_id, address, customer_id } = req.headers;
  if (!amount || !name || !address || !product_id || !customer_id) throw new ClientError('Datos insuficientes', 400);

  amount = parseInt(amount);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(amount * 100),
    currency: 'EUR',
    payment_method_types: ['card'],
    metadata: {
      amount: Math.round(amount * 100),
      name,
      customer_id,
      address,
    },
  });
  

  const clientSecret = paymentIntent.client_secret;
  response(res, 200, {clientSecret});
}

export async function getApiKey(req, res) {
  if(!STRIPE_PUBLISHABLE_KEY) throw new ClientError("STRIPE_PUBLISHABLE_KEY no existe en las variables de entorno", 500);
  response(res, 200, STRIPE_PUBLISHABLE_KEY)
}

// Stripe va llamando a esta ruta con "eventos", cada evento es diferente
// y pueden ser eventos de diferente compras concurrentes, pero cada
// evento contiene informacion suficiente para determinar a quien le pertenece
// la compra, y algun METADATA
// y lo manejamos dentro de un switch case.
export async function stripeCallback(req, res) {
  const sig = req.headers['stripe-signature'];
  let event: Stripe.Stripe.Event;
  // Check if the event is sent from Stripe or a third party
  // And parse the event
  console.log("event",event);
  event = await stripe.webhooks.constructEvent(req.body, sig, STRIPE_WEBHOOK_SECRET);
  console.log("event2222",event);
  // Event when a payment is initiated
  if (event.type === 'payment_intent.created') {
    console.log(`${JSON.stringify(event.data.object)} initated payment!`);
    // Si el valor de lo que quiere pagar no coincide con su precio real, no aceptar el pago!!!
    // event.data.object.metadata
  }
  // Event when a payment is succeeded
  if (event.type === 'payment_intent.succeeded') {
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
      console.log(`payment_intent.created ${JSON.stringify(event.data.object)} initated payment!`);
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
      console.log(`payment_intent.succeeded: ${JSON.stringify(event.data.object)} succeeded payment!`);
      // Se podria hacer que envíe un email al Dueño de la cuenta de stripe diciendole que tiene que
      // enviar un producto que le acaban de comprar.
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ ok: true }); //?NO TOCAR NUNCA??, Creo que stripe depende de esta respuesta.
}

