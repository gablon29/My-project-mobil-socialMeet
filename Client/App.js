import React, { useEffect, useState, useRef } from 'react';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from "expo-constants"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/Redux/Store';
import { useFonts } from 'expo-font';
import axios from 'axios';

//Stripe imports:
import { StripeProvider } from '@stripe/stripe-react-native';
import Navigations from './src/Navigations';
import { saveToken } from './src/metodos/notificationsMetodos';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, Platform } from 'react-native';
import { BACK_URL } from './src/config/env';
import noImplementado from './src/metodos/noImplementado';

const Stack = createNativeStackNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});


async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (
      await Notifications.getExpoPushTokenAsync({
        projectId: Constants.expoConfig.extra.eas.projectId,
      }))
      console.log(token)
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
console.log(token)
  return token;
}

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  const [isLoadingNotif, setIsLoadingNotif] = useState(false)



  async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS !== 'android') {
      Alert.alert('Error Must use physical device for push notifications');
    } else {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        showBadge: true,
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FE9018',
      });

      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;

      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        Alert.alert('Error No ha brindado los permisos de notificación');
      } else {

        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
        await saveToken({
          token: token,
          tokenSession: await AsyncStorage.getItem('Token'),
          loading: (isLoading) => {
            // Manejar estado de carga
            setIsLoadingNotif(isLoading);
          },
          success: (response) => {
            console.log(response);
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    noImplementado("Notif Token: "+token)
    }
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
    }).catch(e => {
      console.log("Error al ejecutar registerForPushNotificationsAsync()", e.message)
    })


    //Escuchadores de Eventos:
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

  axios.defaults.baseURL = BACK_URL  //CTRL+CLICK PARA CAMBIAR IP


  return (
    //headerLeft: null, // Bloquea el botón de retroceso en la barra de navegación
    <Provider store={store}>
      <StripeProvider publishableKey="pk_test_51NFk5oK2GsED70TU1eFSkUtgzvs03Up0s6zxOPyJsgTVuNXk3CZ6r1SnuEh25yGCIuqo5Vsh5jtS00gVgRt71b4300fd0LMniG" merchantIdentifier="merchant.com.stripe.react.native" urlScheme="go-back-to-whopaws" setUrlSchemeOnAndroid={true}>
        <Navigations />
      </StripeProvider>
    </Provider>
  );
}

