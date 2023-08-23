import { Alert } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const usePay = () => {
  const stripe = useStripe();

  const handleBuy = async ({ productId }) => {
    try {
      const shippingAddress = {
        address: {
          city: 'a',
          country: 'ES',
          line1: 'xd',
          line2: 'da',
          postal_code: '123',
          state: 'Sara',
        },
        tracking_number: '214124',

        name: 'nn',
        phone: 'zz',
      };


      const axios_body = { shippingAddress, productId, price: 22 };
      const axios_config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${await AsyncStorage.getItem('Token')}`,
        },
      };

      const response = await axios.post("api/stripe/start-pay-process", axios_body, axios_config);
      const data = response.data.payload;

      if (data.error) {
        Alert.alert(data.message);
        return;
      }

      const { clientSecret, customer } = data;

      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        merchantDisplayName: 'Whopaws',
        customerId: customer,
        defaultShippingDetails: shippingAddress
      });

      if (initSheet.error) {
        Alert.alert(initSheet.error.message);
        return;
      }

      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret: clientSecret,
      });

      if (presentSheet.error) {
        Alert.alert('Ops: ', presentSheet.error.message);
        return;
      }

      Alert.alert('Donated successfully! Thank you for the donation.');
    } catch (error) {
      Alert.alert('Error:', error.message);
    }
  };

  return {
    handleBuy,
  };
};
