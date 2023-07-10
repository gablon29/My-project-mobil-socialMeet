import { Alert, Button, TextInput, View } from 'react-native';
import { useState } from 'react';
import { useStripe } from '@stripe/stripe-react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// example
const API_STRIPE_ROUTE = 'api/stripe/start-pay-process';

/* 
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

}; */

export default function Checkout() {
  const [productId, setProductId] = useState('1337');
  const [shippingAdress, setShippingAdress] = useState({
    address: {
      city: 'a',
      country: 'ES',
      line1: 'xd',
      line2: 'da',
      postal_code: '123',
      state: 'Sara',
    },
    name: 'nn',
    phone: 'zz',
  });

  const handleChange = (e, key) => {
    if (key == 'name' || key == 'phone') {
      setShippingAdress({ ...shippingAdress, [key]: e });
    } else {
      setShippingAdress({ ...shippingAdress, address: { ...shippingAdress.address, [key]: e } });
    }
  };

  const stripe = useStripe();


  //Cuando se preciona el boton, ejecuta est afunción.
  const handleBuy = async () => {


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
    const response = await axios.post(API_STRIPE_ROUTE, axios_body, axios_config).catch((err) => {
      throw new Error(err.response.data.message);
    });

    const data = response.data.payload;
    const { clientSecret, ephemeralKey, customer } = data;
    if (data.error) return Alert.alert(data.message);

    //Aqui le decimos a striple que nos genere una plantilla de pago asociada al ClientSecret generado en el backend:
    // aqui el front firma el papelito enviandoselo a stripe, y stripe revisa a ver si esta todo bien nos devuelve un formulario o algo aasi
    const initSheet = await stripe.initPaymentSheet({
      paymentIntentClientSecret: clientSecret,
      merchantDisplayName: 'Whopaws',
      customerId: customer,
    });

    if (initSheet.error) return Alert.alert(initSheet.error.message);
    //if(initSheet.paymentOption==undefined) return Alert.alert("Falta agregar en el .env del server las API keys de STRIPE")

    //Aqui renderizamos el componente de react, de stripe
    const presentSheet = await stripe.presentPaymentSheet({
      clientSecret: clientSecret,
    });

    if (presentSheet.error) {
      return Alert.alert('Ops: ', presentSheet.error.message);
    }
    Alert.alert('Donated successfully! Thank you for the donation.');
  };
  return (
    <View>
      <TextInput
        placeholder="Nombre"
        style={{ padding: 10, borderColor: 'black', borderWidth: 1 }}
        value={shippingAdress.name}
        onChangeText={(e) => {
          handleChange(e, 'name');
        }}
      />
      <TextInput
        placeholder="Teléfono"
        style={{ padding: 10, borderColor: 'black', borderWidth: 1 }}
        value={shippingAdress.phone}
        onChangeText={(e) => {
          handleChange(e, 'phone');
        }}
      />
      <TextInput
        placeholder="País"
        style={{ padding: 10, borderColor: 'black', borderWidth: 1 }}
        value={shippingAdress.address.country}
        onChangeText={(e) => {
          handleChange(e, 'country');
        }}
      />
      <TextInput
        placeholder="Provincia"
        style={{ padding: 10, borderColor: 'black', borderWidth: 1 }}
        value={shippingAdress.address.state}
        onChangeText={(e) => {
          handleChange(e, 'state');
        }}
      />
      <TextInput
        placeholder="Ciudad"
        style={{ padding: 10, borderColor: 'black', borderWidth: 1 }}
        value={shippingAdress.address.city}
        onChangeText={(e) => {
          handleChange(e, 'city');
        }}
      />
      <TextInput
        placeholder="Código Postal"
        style={{ padding: 10, borderColor: 'black', borderWidth: 1 }}
        value={shippingAdress.address.postal_code}
        onChangeText={(e) => {
          handleChange(e, 'postal_code');
        }}
      />
      <TextInput
        placeholder="Linea 1"
        style={{ padding: 10, borderColor: 'black', borderWidth: 1 }}
        value={shippingAdress.address.line1}
        onChangeText={(e) => {
          handleChange(e, 'line1');
        }}
      />
      <TextInput
        placeholder="Linea 2 (opcional)"
        style={{ padding: 10, borderColor: 'black', borderWidth: 1 }}
        value={shippingAdress.address.line2}
        onChangeText={(e) => {
          handleChange(e, 'line2');
        }}
      />

      <Button
        title="Buy"
        onPress={() => {
          handleBuy()
            .then((_) => { //Se suele usar _ como nombre de variable cuando no se usa la respuesta para nada.
              //luego de comprar, por ejemplo, que lo redirigjha a algun lugar
            })

            .catch((err) => {
              let extra_message = '';
              if (err.message.includes('Unexpected token: <')) {
                extra_message += '\r\nLa direccion de stripe webhooks no está configurada correctamente';
              }
              if (err.code) {
                extra_message += '\r\n' + err.code;
              }
              Alert.alert(err.message);
            });
        }}
      />
    </View>
  );
}
