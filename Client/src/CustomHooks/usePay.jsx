
//recibe un objeto ShipingAdress y el productId que es el producto que esta cargado en stripe cada ves que se carga un producto a stripe
//se le asigna un id y ese id se manda en la peticion para pagar.
//   const shippingAddress = {
//     address: {
//       city: 'a',
//       country: 'ES',
//       line1: 'xd',
//       line2: 'da',
//       postal_code: '123',
//       state: 'Sara',
//     },
//     name: 'nn',
//     phone: 'zz',
//   };

// import usepay
// const {handleBuy} = usePay()
// await handleBuy({
//   shippingAddress, ProductId,
//   loading: (v) => dispatch(setLoadingCart(v)),
//   error: (msg) => dispatch(setErrorCart(msg)),  navigation.navigate("errorpage")
//   success: (res) => dispatch(setCleanCart()), navigation.navigate("succespage")
// });



import { Alert } from 'react-native';
import { useState } from 'react';
import { useStripe } from '@stripe/stripe-react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const usePay = () => {

  const stripe = useStripe();

  const handleBuy = async ({shippingAdress, productId, succes, error, loading}) => {
loading(true)
    const axios_body = { shippingAdress, productId: productId };
    const axios_config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${await AsyncStorage.getItem('Token')}`,
      },
    };
    //Del bcakend nuestro, obtenemos el clientSecret que lo necesitamos mas adelante.
    //sería como un papelito firmado de parte del back, falta firmarlo de parte del front.
    const response = await axios.post("api/stripe/start-pay-process", axios_body, axios_config).catch((err) => {
      throw new Error(err.response.data.message);
      loading(false)

    });

    const data = response.data.payload;
    const { clientSecret, ephemeralKey, customer } = data;
    if (data.error) return Alert.alert(data.message);

    // Se utiliza stripe.initPaymentSheet para generar una plantilla de pago asociada al clientSecret obtenido 
    //del backend. 
    //Esto permite que Stripe muestre un formulario de pago personalizado en la aplicación.

    const initSheet = await stripe.initPaymentSheet({
      paymentIntentClientSecret: clientSecret,
      merchantDisplayName: 'Whopaws',
      customerId: customer,
      defaultShippingDetails: shippingAdress
    });

    if (initSheet.error) return Alert.alert(initSheet.error.message);
    //if(initSheet.paymentOption==undefined) return Alert.alert("Falta agregar en el .env del server las API keys de STRIPE")

    //Aqui renderizamos el componente de react, de stripe
    const presentSheet = await stripe.presentPaymentSheet({ //abre la interfas de usuario para que el usuario pague
      clientSecret: clientSecret,
    });

    if (presentSheet.error) {
      return Alert.alert('Ops: ', presentSheet.error.message);
      loading(false)

    }
    Alert.alert('Donated successfully! Thank you for the donation.');
   succes("Funciono")
    loading(false)
  };

  return {
    handleBuy,
  };
};