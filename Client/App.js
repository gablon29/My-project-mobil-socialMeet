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
  // axios.defaults.baseURL = 'http://192.168.0.12:8080'; // LUIS CASA
  axios.defaults.baseURL = "http://192.168.18.6:8080"; // LUIS LOCAL
  // axios.defaults.baseURL = 'http://192.168.1.84:8080'; // IP IGNA
  //axios.defaults.baseURL = 'http://192.168.1.84:8080'; // IP IGNA

  // PRODUCCION
 //axios.defaults.baseURL = 'https://whopaws-production.up.railway.app';

  const [fontsLoaded] = useFonts({
    Poppins: require('./src/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('./src/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('./src/fonts/Poppins-SemiBold.ttf'),
  });

  // const showHeader = (route) => {
  //   //función para mostrar Header, excluyendo los siguientes:
  //   const screenNamesToHideHeader = ['Welcome', 'Register', 'Login', 'ResetPassword'];
  //   return !screenNamesToHideHeader.includes(route.name);
  // };

  if (!fontsLoaded) {
    return null;
  }

  return (
    //headerLeft: null, // Bloquea el botón de retroceso en la barra de navegación
    <Provider store={store}>
      <StripeProvider publishableKey="pk_test_51NNLCpD6q36zl0IbOK1XimHKkX0UZDNfaynRibRe2giRgPosRrlF7EgKrRR9M0yxbn1RWCFLH4KZrBDueekZx2oA00hRChKSeS" merchantIdentifier="merchant.com.stripe.react.native" urlScheme="go-back-to-whopaws" setUrlSchemeOnAndroid={true}>
        <Navigations />
        {/* <NavigationContainer>
          <Stack.Navigator screenOptions={{ header: (props) => showHeader(props.route) && <Header />, headerShown: true }}>
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerStyle: { backgroundColor: '#ACACAC' }, headerShown: true, headerTintColor: '#AB4E68', title: 'Reseñas que te dieron', headerBackTitle: true, headerBackTitleVisible: true }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: true, headerLeft: null }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: true }} />
            <Stack.Screen name="MyPets" component={MyPets} options={{ headerShown: true }} />
            <Stack.Screen name="CreatePet" component={CreatePet} options={{ headerShown: true }} />
            <Stack.Screen name="CreatePet6" component={CreatePet6} options={{ headerShown: true }} />
            <Stack.Screen name="RegisterStep3" component={RegisterStep3} options={{ headerShown: true }} />
            <Stack.Screen name="PetProfile" component={PetProfile} options={{ headerShown: true }} />
            <Stack.Screen name="EditPetProfile" component={EditPetProfile} options={{ headerShown: true }} />
            <Stack.Screen name="Selecturl" component={Apiurlselector} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer> */}
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
