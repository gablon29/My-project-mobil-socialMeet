import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Button from '../Buttons/Button';
import chip from '../../../images/chip.png';

import juguetePerro from '../../../images/juguetePerro.jpg';
import * as Notifications from 'expo-notifications';

import { useNavigation } from '@react-navigation/native';
import { SignOffMethod } from '../../metodos/authMetodos';
import { setErrorAuth, setLoadingAuth, signOffAuth } from '../../Redux/ReducerAuth';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import veterinarios from '../../../images/dropDownMenu/veterinarios.png';
import cuidadores from '../../../images/dropDownMenu/cuidadores.png';
import paseadores from '../../../images/dropDownMenu/paseadores.png';

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: true,
//   }),
// });

export default function Home() {
  // ESTADOS LOCALES y GLOBALES:
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [dev_menu, set_dev_menu] = useState(1);


  const profile = useSelector((state) => state.ReducerAuth.profile);
const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);

  const notificationListener = useRef();
  const responseListener = useRef();

//   useEffect(() => {
//     registerForPushNotificationsAsync().then(async (token) => {
//       setExpoPushToken(token);
//       alert(token)
//       await saveToken({
//         token: token,
//         tokenSession: await AsyncStorage.getItem('Token'),
//         loading: (isLoading) => {
//           // Manejar estado de carga
//         },
//         success: (response) => {
//           console.log(response);
//         },
//         error: (err) => {
//           console.log(err);
//         },
//       });
//     });

//     notificationListener.current = Notifications.addNotificationReceivedListener((notification) => {
//       setNotification(notification);
//     });

//     responseListener.current = Notifications.addNotificationResponseReceivedListener((response) => {
//       const {
//         notification: {
//           request: {
//             content: {
//               data: { screen },
//             },
//           },
//         },
//       } = response;

//       if (screen) {
//         // Navegar a la pantalla especificada en la notificación
//       }
//     });

//     return () => {
//       Notifications.removeNotificationSubscription(notificationListener.current);
//       Notifications.removeNotificationSubscription(responseListener.current);
//     };
//   }, []);
//   async function registerForPushNotificationsAsync() {
//   let token;

//   if (Platform.OS === 'android') {
//     Notifications.setNotificationChannelAsync('default', {
//       name: 'default',
//       showBadge: true,
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: '#FE9018',
//     });
//   }

//   if (Platform.OS === 'android' && !Constants.isDevice) {
//     Alert.alert('Error', 'Must use physical device for push notifications');
//   } else {
//     const { status: existingStatus } = await Notifications.getPermissionsAsync();
//     let finalStatus = existingStatus;

//     if (existingStatus !== 'granted') {
//       const { status } = await Notifications.requestPermissionsAsync();
//       finalStatus = status;
//     }

//     if (finalStatus !== 'granted') {
//       Alert.alert('Error', 'Failed to get push token for push notifications');
//     } else {
//       try {
//         if (Device.isDevice && !Device.isExpo) {
//           // Si estamos en un dispositivo físico (producción) y no en Expo, usamos getDevicePushTokenAsync para obtener el token de FCM
//           token = (await Notifications.getDevicePushTokenAsync()).data;
//         } else {
//           // Si estamos en Expo, usamos getExpoPushTokenAsync para obtener el token de notificación de Expo
//           token = (await Notifications.getExpoPushTokenAsync()).data;
//         }
//         alert(token)

//       await saveToken({
//         token: token,
//         tokenSession: await AsyncStorage.getItem('Token'),
//         loading: (isLoading) => {
//           // Manejar estado de carga
//         },
//         success: (response) => {
//           console.log(response);
//         },
//         error: (err) => {
//           console.log(err);
//         },
//       });
//         // Aquí puedes guardar el token en tu base de datos o enviarlo al servidor, según tus necesidades.
//       } catch (error) {
//         console.error('Error al obtener el token de notificación:', error);
//       }
//     }
//   }

//   return token;
// }
 

  const productosDestacados = [
    {
      id: 1,
      imagen: juguetePerro,
      nombre: 'Producto 1',
      descripcion: 'Descripción del Producto 1',
      precio: '10.99€',
    },
    {
      id: 2,
      imagen: juguetePerro,
      nombre: 'Producto 2',
      descripcion: 'Descripción del Producto 2',
      precio: '19.99€',
    },
    {
      id: 3,
      imagen: juguetePerro,
      nombre: 'Producto 3',
      descripcion: 'Descripción del Producto 3',
      precio: '14.99€',
    },
  ];

  return (
    <ScrollView>
      <View className="flex w-full h-full bg-white">
        <View className="flex h-36 w-fit mt-14 mx-4 rounded-lg bg-clarito">
          <View className="flex ml-4 mt-3">
            <Text className="text-sm font-poppinsBold text-black pr-24">Tu mascota siempre segura con Whopaws</Text>
            <Text style={{ fontSize: 7 }} className="font-poppins mt-1 text-black pr-24">
              Un chip NFC, ligero y accesible para todo el mundo
            </Text>
            <View className="mt-2">
              <Button
                onPress={() => navigation.navigate("ChipWhopaws")}
                title="Más información"
        
                colorButton="bg-naranja"
                colorText="text-white"
                ancho="w-36"
                alto="h-10"
                textSize="text-xs"
              />
            </View>
          </View>
          <Image source={chip} className="absolute -top-12 right-0" />
        </View>

        <View className="mx-4 my-4">
          {/* View container de Servicios Destacados */}
          <View className="flex flex-row justify-between">
            <Text className="text-sm font-poppinsBold">Servicios destacados</Text>
            <TouchableOpacity onPress={() => alert('FUNCIONALIDAD PENDIENTE')}>
              <Text className="text-sm font-poppins text-naranja">Ver Más</Text>
            </TouchableOpacity>
          </View>

          <View className="flex flex-row gap-3 flex-wrap justify-center items-center mt-5">
            <TouchableOpacity onPress={() => alert('FUNCIONALIDAD PENDIENTE')}>
              <View>
                <View className="w-20 h-20 bg-rosa rounded-xl justify-center items-center shadow-lg mr-4">
                  <Image source={veterinarios} className="h-16 w-16" resizeMode="contain" />
                </View>
                <Text className="text-xs font-poppins text-center pt-1">Veterinarios</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('FUNCIONALIDAD PENDIENTE')}>
              <View>
                <View className="w-20 h-20 bg-rosa rounded-xl justify-center items-center shadow-lg mr-4">
                  <Image source={cuidadores} className="h-16 w-16" resizeMode="contain" />
                </View>
                <Text className="text-xs font-poppins text-center pt-1">Cuidadores</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('FUNCIONALIDAD PENDIENTE')}>
              <View>
                <View className="w-20 h-20 bg-rosa rounded-xl justify-center items-center shadow-lg mr-4">
                  <Image source={paseadores} className="h-16 w-16" resizeMode="contain" />
                </View>
                <Text className="text-xs font-poppins text-center pt-1">Paseadores</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mx-4 my-4">
          {/* View container de Productos destacados */}
          <View className="flex flex-row justify-between">
            <Text className="text-sm font-poppinsBold">Productos destacados</Text>
            <TouchableOpacity onPress={() => alert('FUNCIONALIDAD PENDIENTE')}>
              <Text className="text-sm font-poppins text-naranja">Ver Más</Text>
            </TouchableOpacity>
          </View>

          <View className="flex flex-row gap-2 flex-wrap justify-center items-center mt-5">
            {productosDestacados.map((producto) => (
              <View key={producto.id} className="w-28 h-40  rounded-lg  flext items-center shadow-lg bg-celeste">
                <Image source={producto.imagen} className="w-[88px]  h-20 m-1 rounded-lg" />
                <Text className="mx-1 font-poppins text-white" style={{ fontSize: 7 }}>
                  {producto.nombre}. {producto.descripcion}
                </Text>
                <Text className="mx-1 text-sm font-poppinsBold text-white mt-5 mr-4">{producto.precio}</Text>
                <TouchableOpacity className="absolute z-10 rounded-full bg-white bottom-0 right-0 m-2" onPress={() => alert('FUNCIONALIDAD PENDIENTE')}>
                  <Icon name="plus" size={24} color="black" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
        <View className="mx-4 my-4">
          {/* View container de Tiendas destacados */}
          <View className="flex flex-row justify-between">
            <Text className="text-sm font-poppinsBold">Tiendas destacadas</Text>
            <TouchableOpacity onPress={() => alert('FUNCIONALIDAD PENDIENTE')}>
              <Text className="text-sm font-poppins text-naranja">Ver Más</Text>
            </TouchableOpacity>
          </View>

          <View className="flex flex-row gap-2 flex-wrap justify-center items-center mt-5">
            <TouchableOpacity onPress={() => alert('FUNCIONALIDAD PENDIENTE')}>
              <View className="w-24 h-12 rounded-lg shadow-lg justify-center items-center bg-naranja">
                <Text className="text-xs text-white font-poppinsBold">LOGO</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('FUNCIONALIDAD PENDIENTE')}>
              <View className="w-24 h-12 rounded-lg shadow-lg justify-center items-center bg-naranja">
                <Text className="text-xs text-white  font-poppinsBold">LOGO</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => alert('FUNCIONALIDAD PENDIENTE')}>
              <View className="w-24 h-12 rounded-lg shadow-lg justify-center items-center bg-naranja">
                <Text className="text-xs text-white font-poppinsBold">LOGO</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="flex items-center mt-8">
            <Button
              title="cerrar sesion"
              colorButton="bg-black"
              colorText="text-white"
              ancho="w-56"
              alto="h-10"
              textSize="text-xs"
              onPress={() => {
                SignOffMethod({
                  loading: (v) => {
                    dispatch(setLoadingAuth(v));
                  },
                  error: (msg) => dispatch(setErrorAuth(msg)),
                  success: (res) => {
                    dispatch(signOffAuth());
                    // navigation.navigate('Login');
                  },
                });
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
