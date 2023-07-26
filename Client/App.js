import React, { useEffect, useState, useRef } from 'react';
import { Text } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/Redux/Store';
import { useFonts } from 'expo-font';
import axios from 'axios';

//Stripe imports:
import { StripeProvider } from '@stripe/stripe-react-native';
import Navigations from './src/Navigations';
import { saveToken } from './src/metodos/notificationsMetodos';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);

  const notificationListener = useRef();
  const responseListener = useRef();
  
  async function registerForPushNotificationsAsync() {
    let token;
  
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        showBadge: true,
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FE9018',
      });
    }
  
    if (Platform.OS === 'android' && !Constants.isDevice) {
      Alert.alert('Error', 'Must use physical device for push notifications');
    } else {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
  
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
  
      if (finalStatus !== 'granted') {
        Alert.alert('Error', 'Failed to get push token for push notifications');
      } else {
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
        await saveToken({
          token: token,
          tokenSession: await AsyncStorage.getItem('Token'),
          loading: (isLoading) => {
            // Manejar estado de carga
          },
          success: (response) => {
            console.log(response);
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    }
  
    return token;
  }
  useEffect(() => {
    registerForPushNotificationsAsync().then(async (token) => {
      setExpoPushToken(token);
      await saveToken({
        token: token,
        tokenSession: await AsyncStorage.getItem('Token'),
        loading: (isLoading) => {
          // Manejar estado de carga
        },
        success: (response) => {
          console.log(response);
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
  
    notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
      setNotification(notification);
    });
  
    responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
      const {
        notification: {
          request: {
            content: {
              data: { screen },
            },
          },
        },
      } = response;
  
      if (screen) {
        // Navegar a la pantalla especificada en la notificación
        // props.navigation.navigate("");
      }
    });
  
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
  

  const [fontsLoaded] = useFonts({
    Poppins: require('./src/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./src/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./src/fonts/Poppins-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  // Configuración de axios y otros códigos de la app
  // ...

  // DESARROLLO
  // Agregar aquí la configuración de desarrollo y la llamada a axios.defaults.baseURL
  // ...
  // DESARROLLO

  // axios.defaults.baseURL = 'http://192.168.100.60:8080'; // LUIS CASA
  //  axios.defaults.baseURL = "http://192.168.18.6:8080"; // LUIS LOCAL
  // axios.defaults.baseURL = 'http://192.168.1.84:8080'; // IP IGNA
  //axios.defaults.baseURL = 'http://192.168.1.84:8080'; // IP IGNA
  //  axios.defaults.baseURL = 'http://192.168.0.12:8080'; // Rodri
    //axios.defaults.baseURL = 'http://192.168.1.5:8080'; // Vini
    axios.defaults.baseURL = 'http://192.168.178.211:8080'; // santiago

    // PRODUCCION
  
     // axios.defaults.baseURL = 'https://whopaws-production.up.railway.app';
     
  // PRODUCCION
  // Agregar aquí la configuración de producción y la llamada a axios.defaults.baseURL
  // ...

  return (
    //headerLeft: null, // Bloquea el botón de retroceso en la barra de navegación
    <Provider store={store}>
      <StripeProvider publishableKey="pk_test_51NNLCpD6q36zl0IbOK1XimHKkX0UZDNfaynRibRe2giRgPosRrlF7EgKrRR9M0yxbn1RWCFLH4KZrBDueekZx2oA00hRChKSeS" merchantIdentifier="merchant.com.stripe.react.native" urlScheme="go-back-to-whopaws" setUrlSchemeOnAndroid={true}>
        <Navigations />
      </StripeProvider>
    </Provider>
  );
}

