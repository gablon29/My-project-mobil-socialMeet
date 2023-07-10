// import { Alert, Button, TextInput, View } from 'react-native';
// import { useState } from 'react';
// import { useStripe } from '@stripe/stripe-react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// // example
// const API_STRIPE_ROUTE = 'api/stripe/start-pay-process';

// /* 
// type ShippingData = {
//   address: {
//     city: string;
//     country: string;
//     line1: string;
//     line2: string;
//     postal_code: string;
//     state: string;
//   };
//   tracking_number: string;
//   name: string;
//   phone: string;

// }; */

// export default function Checkout() {
//   const [product_id, setProduct_id] = useState('1337');
//   const [shippingAdress, setShippingAdress] = useState({
//     address: {
//       city: '',
//       country: '',
//       line1: '',
//       line2: '',
//       postal_code: '',
//       state: '',
//     },
//     name: '',
//     phone: '',
//   });

//   const handleChange = (e, key) => {
//     console.log("EEEEEEEEEEEEEEEEEEEEEEEee");
//     console.log(e);
//     console.log(e);
//     console.log(e);
//     console.log(e);
//     console.log(e);
//     console.log(e);
//     console.log(e);
//     console.log(e);
//     console.log(e);
//     console.log(e);
//     console.log(e);
//     console.log(e);
//     if (key == 'name' || key == 'phone') {
//       setShippingAdress({ ...shippingAdress, [key]: e });
//     } else {
//       setShippingAdress({ ...shippingAdress, address: { ...shippingAdress.address, [key]: e } });
//     }
//   };

//   const stripe = useStripe();

//   const handleBuy = async () => {
//     const finalAmount = parseInt(amount);

//     const axios_body = { amount: finalAmount, name, address, product_id, customer_id };
//     const axios_config = {
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${await AsyncStorage.getItem('Token')}`,
//       },
//     };

//     if (finalAmount <= 1) return Alert.alert('El precio minimo es 1 EURO');

//     const response = await axios.post(API_STRIPE_ROUTE, axios_body, axios_config).catch((err) => {
//       throw new Error(err.response.data.message);
//     });

//     const data = response.data.payload;
//     const { clientSecret, ephemeralKey, customer } = data;
//     if (data.error) return Alert.alert(data.message);
//     const initSheet = await stripe.initPaymentSheet({
//       paymentIntentClientSecret: clientSecret,
//       merchantDisplayName: 'Whopaws',
//       customerId: customer,
//     });

//     if (initSheet.error) return Alert.alert(initSheet.error.message);
//     //if(initSheet.paymentOption==undefined) return Alert.alert("Falta agregar en el .env del server las API keys de STRIPE")
//     const presentSheet = await stripe.presentPaymentSheet({
//       clientSecret: clientSecret,
//     });

//     if (presentSheet.error) {
//       return Alert.alert('Ops: ', presentSheet.error.message);
//     }
//     Alert.alert('Donated successfully! Thank you for the donation.');
//   };
//   return (
//     <View>
//       <TextInput
//         placeholder="Nombre"
//         style={{ padding: 10, borderColor: 'black', borderWidth: 1 }}
//         value={shippingAdress.name}
//         onChangeText={(e) => {
//           handleChange(e, 'name');
//         }}
//       />
//       <TextInput
//         placeholder="Teléfono"
//         style={{ padding: 10, borderColor: 'black', borderWidth: 1 }}
//         value={shippingAdress.phone}
//         onChangeText={(e) => {
//           handleChange(e, 'phone');
//         }}
//       />
//       <TextInput
//         placeholder="País"
//         style={{ padding: 10, borderColor: 'black', borderWidth: 1 }}
//         value={shippingAdress.address.country}
//         onChangeText={(e) => {
//           handleChange(e, 'country');
//         }}
//       />
//       <TextInput
//         placeholder="Provincia"
//         style={{ padding: 10, borderColor: 'black', borderWidth: 1 }}
//         value={shippingAdress.address.staate}
//         onChangeText={(e) => {
//           handleChange(e, 'postal_code');
//         }}
//       />
//       <TextInput
//         placeholder="Ciudad"
//         style={{ padding: 10, borderColor: 'black', borderWidth: 1 }}
//         value={shippingAdress.address.city}
//         onChangeText={(e) => {
//           handleChange(e, 'city');
//         }}
//       />
//       <TextInput
//         placeholder="Código Postal"
//         style={{ padding: 10, borderColor: 'black', borderWidth: 1 }}
//         value={shippingAdress.address.postal_code}
//         onChangeText={(e) => {
//           handleChange(e, 'postal_code');
//         }}
//       />
//       <TextInput
//         placeholder="Linea 1"
//         style={{ padding: 10, borderColor: 'black', borderWidth: 1 }}
//         value={shippingAdress.address.line1}
//         onChangeText={(e) => {
//           handleChange(e, 'line1');
//         }}
//       />
//       <TextInput
//         placeholder="Linea 2 (opcional)"
//         style={{ padding: 10, borderColor: 'black', borderWidth: 1 }}
//         value={shippingAdress.address.line2}
//         onChangeText={(e) => {
//           handleChange(e, 'line2');
//         }}
//       />

//       <Button
//         title="Buy"
//         onPress={() => {
//           handleBuy()
//             .then((_) => {
//               //luego de comprar, por ejemplo, que lo redirigjha a algun lugar
//             })

//             .catch((err) => {
//               let extra_message = '';
//               if (err.message.includes('Unexpected token: <')) {
//                 extra_message += '\r\nLa direccion de stripe webhooks no está configurada correctamente';
//               }
//               if (err.code) {
//                 extra_message += '\r\n' + err.code;
//               }
//               Alert.alert(err.message);
//             });
//         }}
//       />
//     </View>
//   );
// }
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';
import { CardField, useStripe } from '@stripe/stripe-react-native';

const AddCard = () => {
  const { createToken } = useStripe();
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expMonth: '',
    expYear: '',
    cvc: '',
  });

  const handleAddCard = async () => {
    try {
      const cardToken = await createToken({
        card: {
          number: cardDetails.number,
          expMonth: cardDetails.expMonth,
          expYear: cardDetails.expYear,
          cvc: cardDetails.cvc,
        },
      });

      // Enviar el token de tarjeta al backend para guardar en la cuenta del usuario
      const response = await axios.post('TU_ENDPOINT_DE_BACKEND', {
        token: cardToken.id,
      });

      // Procesar la respuesta del backend, por ejemplo, mostrar un mensaje de éxito
      Alert.alert('Tarjeta añadida exitosamente');
    } catch (error) {
      // Manejar errores, por ejemplo, mostrar un mensaje de error
      Alert.alert('Error al añadir la tarjeta', error.message);
    }
  };

  return (
    <View>
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: 'Número de tarjeta',
          expiration: 'MM/YY',
          cvc: 'CVC',
        }}
        cardStyle={{
          backgroundColor: '#FFFFFF',
          textColor: '#000000',
        }}
        style={{
          width: '100%',
          height: 50,
          marginVertical: 20,
        }}
        onCardChange={(cardDetails) => setCardDetails(cardDetails)}
      />
      <Button title="Añadir tarjeta" onPress={handleAddCard} />
    </View>
  );
};

export default AddCard;