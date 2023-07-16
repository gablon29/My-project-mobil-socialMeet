import React, { useState } from 'react';
import { View, TextInput,Text, Button, Alert } from 'react-native';
import axios from 'axios';
import { CardField, CardFieldInput, useStripe } from '@stripe/stripe-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


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

      const axios_config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await AsyncStorage.getItem('Token')}`,
        },
      };

      // Enviar el token de tarjeta al backend para guardar en la cuenta del usuario
      const response = await axios.post('api/stripe/save-credit-card', {
        token: cardToken.id,
      },axios_config);

      // Procesar la respuesta del backend, por ejemplo, mostrar un mensaje de éxito
      Alert.alert('Tarjeta añadida exitosamente');
    } catch (error) {
      // Manejar errores, por ejemplo, mostrar un mensaje de error
      Alert.alert('Error al añadir la tarjeta', error.message);
    }
};
  return (
    <View>
        <Text>Pagina de añadir tarjetas</Text>
    
      <View
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