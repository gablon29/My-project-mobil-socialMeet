import { Alert, Button, TextInput, View } from 'react-native';
import { useState } from 'react';
import { useStripe } from '@stripe/stripe-react-native';
import axios from 'axios';

// example
const API_STRIPE_ROUTE = 'stripe/start-pay-process';

export default function Checkout() {
  const [product_id, setProduct_id] = useState('1337');
  const [customer_id, setCustomer_id] = useState('4124');
  const [address, setAdress] = useState('España, Madrid, Valenciana 3882');
  const [name, setName] = useState('Sandro Meda');
  const [amount, setAmount] = useState('12');
  const stripe = useStripe();

  const handleBuy = async () => {
    const finalAmount = parseInt(amount);

    const axios_body =  { amount: finalAmount, name, address, product_id, customer_id }
    const axios_config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          amount: finalAmount,
          name, //Edna Scripts 6
          address,
          product_id,
          customer_id,
        },
      };
    if (finalAmount <= 1) return Alert.alert('El precio minimo es 1 USD');
    console.log(API_STRIPE_ROUTE);
    const response = await axios.post(API_STRIPE_ROUTE, axios_body,axios_config);
    const data = await response.data;
    console.log(data,"asdsasadsa");
    if (data.error) return Alert.alert(data.message);
    const initSheet = await stripe.initPaymentSheet({
      paymentIntentClientSecret: data.payload.clientSecret,
      merchantDisplayName: 'Whopaws',
    }); 

    if(initSheet.error) return Alert.alert(initSheet.error.message);
    if(initSheet.paymentOption==undefined) return Alert.alert("Falta agregar en el .env del server las API keys de STRIPE")
    const presentSheet = await stripe.presentPaymentSheet({
      clientSecret: data.payload.clientSecret,
    });
    if (presentSheet.error) {
      return Alert.alert(presentSheet.error.message);
    }
    Alert.alert('Donated successfully! Thank you for the donation.');
  };
  return (
    <View>
      <TextInput placeholder="Name" style={{ padding: 10, borderColor: 'black', borderWidth: 1 }} value={name} onChangeText={(e) => setName(e)} />
      <TextInput placeholder="Address" style={{ padding: 10, borderColor: 'black', borderWidth: 1 }} value={address} onChangeText={(e) => setAdress(e)} />
      <TextInput
        placeholder="ProductID, poner cualquier numero" //DEV
        keyboardType="numeric"
        style={{ padding: 10, borderColor: 'black', borderWidth: 1 }}
        value={product_id}
        onChangeText={(e) => setProduct_id(e)}
      />
      <TextInput placeholder="Amount" keyboardType="numeric" style={{ padding: 10, borderColor: 'black', borderWidth: 1 }} value={amount} onChangeText={(e) => setAmount(e)} />
      <Button
        title="Buy"
        onPress={() => {
          handleBuy()
            .then((_) => {
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
              Alert.alert('Payment failed!' + extra_message);
            });
        }}
      />
    </View>
  );
}
