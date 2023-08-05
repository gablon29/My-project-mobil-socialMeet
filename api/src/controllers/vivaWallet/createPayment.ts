import axios from 'axios';
import getApiKey from './getApiKey';


export default async function (req, res) {

    //-----environment acá-----//
    const environmentUrl = 'https://demo-api.vivapayments.com/checkout/v2'; // esta es sandbox
    const accessToken = await getApiKey; // llamamos a la función validadora de la api key -> VIVA_WALLET_API_KEY ?

    const config = {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
    };

    const { amount, userEmail, fullName, subaccountId } = req.body; // datos para hacer más bonita la paga ♥

    const orderData = {
        amount: amount,
        customerTrns: "string",
        customer: {
            email: userEmail,
            fullName: fullName
        },
        subaccount: subaccountId // pasamos el id para que se realice la transaccion a esa subcuenta
    };

    const createOrderUrl = `${environmentUrl}/orders`;

    axios.post(createOrderUrl, orderData, config)
        .then(response => {
            console.log('Orden de pago creada exitosamente:', response.data);
            // Aquí podrías redirigir al usuario a la página de pago si lo deseas
            res.status(200).send('Orden de pago creada exitosamente');
        })
        .catch(error => {
            console.error('Error al crear la orden de pago:', error.response.data);
            res.status(500).send('Error al crear la orden de pago');
        });
}