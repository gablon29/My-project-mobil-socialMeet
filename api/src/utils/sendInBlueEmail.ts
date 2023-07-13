import axios from "axios";
import { ADMIN_EMAIL, ADMIN_NAME, SENDINBLUE_KEY } from "../config/env";
import SibApi from 'sib-api-v3-sdk'

const SibClient = SibApi.ApiClient.instance;
SibClient.authentications['api-key'].apiKey = SENDINBLUE_KEY

const transactionEmailApi = new SibApi.TransactionalEmailsApi();

let smtpMailData = new SibApi.SendSmtpEmail();

const sender = {
  email: ADMIN_EMAIL, // your email address
  name: ADMIN_NAME,
};



export async function emailSendVerifCode(email, code) {
    const sendSmtpEmail = {
        to: [
            {
                email: email,
                name: 'de whopaws',
            },
        ],
        templateId: 2,
        params: {
            code: code,
        },
        headers: {
            'X-Mailin-custom': 'custom_header_1:custom_value_1|custom_header_2:custom_value_2',
        },
    };

    const result = await axios.post('https://api.sendinblue.com/v3/smtp/email', sendSmtpEmail, {
        headers: {
            'api-key': SENDINBLUE_KEY,
            'Content-Type': 'application/json',
        },
    })
    return result.data
}


export async function emailSendAddressAndCustomerData(email:string, shipping,customerData) {
    try {
        smtpMailData.sender = sender;

       smtpMailData.to = [{
            email: email,
            name: "de whopaws",
        }];

       smtpMailData.subject = 'Whopaws: ¡Han relizado una compra!';

       smtpMailData.params = {
            'shipping':JSON.stringify(shipping),
            'customerdata':JSON.stringify(customerData),
        };

       smtpMailData.htmlContent = "<html><body><p>¡Han realizado una compra!\r\n "
                 + "welcome to makeuseof.com waitlist. We'll notify you "
                  + "Detalles de compra:\r\n {{ params.customerdata }}"
                 + "Dirección a enviar el pedido:\r\n{{ params.shipping }}.</p></body></html>";

        // send email
        await transactionEmailApi.sendTransacEmail(smtpMailData)
            .then((data) => { 
                console.log(data) // log the email id
            })
            .catch((error) => {
                console.error(error)
                throw new Error(error) // handle errors
            })
    } catch (error) {
        console.log('An error occured...')
        console.error(error.message)

    }
}



const EJEMPLO_PAGO_EXITOSO = { 
"id": "pi_3NTIW5D6q36zl0Ib1mYMqUtx",
"customer": "cus_OFgp6QSHDfPbWc", 
"currency": "eur", 
"amount_received": 1499, 
"amount": 1499, 
"metadata": { "amount": "1499" }, 
"shipping": { 
    "address": { "city": "Madrid", "country": "ES", "line1": "Chingo", "line2": "Gorda", "postal_code": "538", "state": "Madrid" }, 
    "carrier": null,
    "name": "Haahah", 
    "phone": "646464646", 
    "tracking_number": "21321" 
}, 
"object": "payment_intent",
"amount_capturable": 0, 
"amount_details": { "tip": {} }, 
"application": null, 
"application_fee_amount": null, 
"automatic_payment_methods": null, 
"canceled_at": null, 
"cancellation_reason": null, 
"capture_method": "automatic", 
"client_secret": "pi_3NTIW5D6q36zl0Ib1mYMqUtx_secret_Ve7FPKy7SRGvr49MlL0gZYjyx", 
"confirmation_method": "automatic", 
"created": 1689227801, 
"description": null, 
"invoice": null, 
"last_payment_error": null, 
"latest_charge": "ch_3NTIW5D6q36zl0Ib1F1bhCfE", 
"livemode": false, 
"next_action": null, 
"on_behalf_of": null, 
"payment_method": "pm_1NTIWTD6q36zl0IbUfPrDdz9", 
"payment_method_options": { "card": 
{ "installments": null, "mandate_options": null, "network": null, "request_three_d_secure": "automatic" } }, 
"payment_method_types": ["card"], "processing": null, "receipt_email": null, "review": null, 
"setup_future_usage": null, 
"source": null, "statement_descriptor": null, "statement_descriptor_suffix": null, "status": "succeeded", "transfer_data": null, "transfer_group": null }