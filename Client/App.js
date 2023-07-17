import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/Redux/Store';
import { useFonts } from 'expo-font';
import axios from 'axios';

//Stripe imports:
import { StripeProvider } from '@stripe/stripe-react-native';
//devmode
import Navigations from './src/Navigations';

const Stack = createNativeStackNavigator();

export default function App() {
  // DESARROLLO

  // axios.defaults.baseURL = 'http://192.168.100.60:8080'; // LUIS CASA
  //  axios.defaults.baseURL = "http://192.168.18.6:8080"; // LUIS LOCAL
  // axios.defaults.baseURL = 'http://192.168.1.84:8080'; // IP IGNA
  //axios.defaults.baseURL = 'http://192.168.1.84:8080'; // IP IGNA
  //  axios.defaults.baseURL = 'http://192.168.0.12:8080'; // Rodri
  // axios.defaults.baseURL = 'http://192.168.1.5:8080'; // Vini
   axios.defaults.baseURL = 'http://192.168.178.211:8080'; // santiago

  // PRODUCCION

  // axios.defaults.baseURL = 'https://whopaws-production.up.railway.app/';
   


  const [fontsLoaded] = useFonts({
    Poppins: require('./src/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./src/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./src/fonts/Poppins-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    //headerLeft: null, // Bloquea el botón de retroceso en la barra de navegación
    <Provider store={store}>
      <StripeProvider publishableKey="pk_test_51NNLCpD6q36zl0IbOK1XimHKkX0UZDNfaynRibRe2giRgPosRrlF7EgKrRR9M0yxbn1RWCFLH4KZrBDueekZx2oA00hRChKSeS" merchantIdentifier="merchant.com.stripe.react.native" urlScheme="go-back-to-whopaws" setUrlSchemeOnAndroid={true}>
        <Navigations />
      </StripeProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
