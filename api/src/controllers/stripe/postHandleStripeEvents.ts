
import Stripe from "stripe";
import { ADMIN_EMAIL, STRIPE_WEBHOOK_SECRET } from "../../config/env";
import stripe from "./stripe";
import { emailSendAddressAndCustomerData } from "../../utils/sendInBlueEmail";

//require('dotenv').config();
const UserModel = require('../../models/user.model'); //por si hay que hacer que cambie algun estado del usuario que compró algo



//Nosotros nunca usamos esta ruta, stripe lo hace.
export default async function (req, res) {

    const sig = req.headers['stripe-signature'];

    const event: Stripe.Event = await stripe.webhooks.constructEvent(req.body, sig, STRIPE_WEBHOOK_SECRET);
  
    switch (event.type) {
      case 'charge.refunded':
        const chargeRefunded = event.data.object;
        
        break;
      case 'charge.succeeded':
        const chargeSucceeded = event.data.object;
        
        break;
      case 'payment_intent.canceled':
        const paymentIntentCanceled = event.data.object;


        break;
      case 'payment_intent.created':
        const paymentIntentCreated = event.data.object;
        console.log(`payment_intent.created ${JSON.stringify(event.data.object)} initated payment!`);
       
  
        break;
  
      case 'payment_intent.payment_failed':
        const paymentIntentPaymentFailed = event.data.object;
        

        break;
      case 'payment_intent.processing':
        const paymentIntentProcessing = event.data.object;
        
        break;
      case 'payment_intent.requires_action':
        const paymentIntentRequiresAction = event.data.object;
        
        

        break;
      case 'payment_intent.succeeded':
        const paymentIntentSucceeded = event.data.object;
        console.log(`payment_intent.succeeded: ${JSON.stringify(event.data.object)} succeeded payment!`);
        const customerData = {
         "id": paymentIntentSucceeded["id"],
        "customer": paymentIntentSucceeded["customer"], 
        "currency": paymentIntentSucceeded["currency"], 
        "amount_received": paymentIntentSucceeded["amount_received"], 
        "amount": paymentIntentSucceeded["amount"], 
        "metadata": paymentIntentSucceeded["metadata"], 
        }
        const send=await emailSendAddressAndCustomerData(ADMIN_EMAIL,event.data.object["shipping"],customerData)
        
        break;
      
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
    
    res.json({ ok: true }); //?NO TOCAR NUNCA??, Creo que stripe depende de esta respuesta.
  }


  interface input extends Express.Request {
    headers,
    body,
    params,
    query,
    user: { userId, email }
  }
  
  type ShippingData = {
    address: {
      city: string;
      country: string;
      line1: string;
      line2: string;
      postal_code: string;
      state: string;
    };
    tracking_number: string;
    name: string;
    phone: string;
  };
  