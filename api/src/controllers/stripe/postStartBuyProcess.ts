import { ClientError } from "../../utils/errors";
import { response } from "../../utils";
import stripe from "./stripe";

//require('dotenv').config();
const UserModel = require('../../models/user.model'); //por si hay que hacer que cambie algun estado del usuario que compró algo



export default async function (req: input, res){

    //--------------------------------------------------------------
    let { shippingAdress, productId, price } = req.body;
    if (!productId) throw new ClientError('Debes enviar productId', 400);
  
    const user = await UserModel.findById(req.user.userId)
    if (!user || !user.email) throw new ClientError("El usuario no existe " + user, 500)
    //const dir: ShippingData = user.shippingaddresss
    //if (!(dir.name && dir.address.city && dir.address.country && dir.address.line1)) throw new ClientError("Usted no tiene agregada una dirección de entrega de producto.", 500)
  
    //--------------------------------------------------------------
    //Crea un cliente si no existe 
    let customer
    if (user.stripe.customer && user.stripe.customer.length > 1) {
      customer = user.stripe.customer
      console.log("usuario viejo");
  
    } else {
      const customerData = await stripe.customers.create(
        {
          email: user.email,
        })
      console.log("usuario nuevo");
      user.stripe.customer = customerData.id;
      await user.save();
      customer = customerData.id
    }
    console.log(customer);
  
  
    //--------------------------------------------------------------
    // Obtiene clave efímera, sea lo que sea eso.
    const ephemeralKey = await stripe.ephemeralKeys.create({ customer: customer },
      { apiVersion: '2022-11-15' })
  
  
    //--------------------------------------------------------------
    //Con los datos q enviamos a stripe se procesan y stripe nos devuelve datos X
    const paymentIntent = await stripe.paymentIntents.create({
      customer: customer,
      amount: Math.round(14.99 * 100),
      currency: 'EUR',
      payment_method_types: ['card'],
      metadata: {
        amount: Math.round(14.99 * 100),
      },
      receipt_email: user.email,
      shipping: shippingAdress
    });
  
    const clientSecret = paymentIntent.client_secret;
  
    response(res, 200, { ephemeralKey, clientSecret, customer: customer });
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
    name: string;
    phone: string;
  };