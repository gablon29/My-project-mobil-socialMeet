import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Button from '../Buttons/Button';
import chip from '../../../images/chip.png';
import juguetePerro from '../../../images/juguetePerro.jpg';
import Checkout from '../Stripe/Checkout';
import * as Notifications from 'expo-notifications';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-root-toast';
import { useNavigation } from '@react-navigation/native';
import { SignOffMethod } from '../../metodos/authMetodos';
import { setErrorAuth, setLoadingAuth, signOffAuth } from '../../Redux/ReducerAuth';
import { useDispatch } from 'react-redux';

export default function Home() {
  // ESTADOS LOCALES y GLOBALES:
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [dev_menu, set_dev_menu] = useState(1);

  const sendNotification = async (token, title, body) => {
    const notification = {
      to: token,
      title: title,
      body: body,
    };
    await axios.post('api/send/send-notification', notification);
  };

  const registerForPushNotifications = async () => {
    const { status } = await Notifications.requestPermissionsAsync();

    if (status === 'granted') {
      const { data: token } = await Notifications.getExpoPushTokenAsync();
      console.log('Token de notificaciones del dispositivo:', token);
      await sendNotification(token, '¡Bienvenido a MyPets!', 'Disfruta de tus mascotas');
    }
  };
  useEffect(() => {
    registerForPushNotifications()
      .then((resp) => {
        console.log('Notificacion enviada!');
      })
      .catch((err) => {
        console.error('Notif: ', err.message);
      });
  }, []);

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
    <View className="flex w-full h-full">
    
      <View className="flex h-32 w-fit mt-14 mx-10 rounded-md bg-naranja">
        <View className="flex w-8/12 ml-4 mt-3">
          <Text className="text-base font-poppinsBold  text-white">Tu mascota siempre segura con Whopaws</Text>
          <Text style={{ fontSize: 6.7 }} className="font-poppins  mt-1 text-white">
            Un chip NFC, ligero y accesible para todo el mundo
          </Text>
          <View className="mt-2">
            <Button
              title="Más información"
              onPress={() => {
                /* alert("botón activado") */
                Toast.show('Testeando Toast o Mensajito Lindo', {
                  position: Toast.positions.CENTER,
                  shadow: true,
                  animation: true,
                  hideOnPress: false,
                  delay: 0,
                  onShow: () => {
                    // calls on toast\`s appear animation start
                  },
                  onShown: () => {
                    // calls on toast\`s appear animation end.
                  },
                  onHide: () => {
                    // calls on toast\`s hide animation start.
                  },
                  onHidden: () => {
                    // calls on toast\`s hide animation end.
                  },
                });

                // You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
                // setTimeout(function () {
                //   Toast.hide(toast);
                // }, 10000);
              }}
              colorButton="bg-black"
              colorText="text-white"
              ancho="w-36"
              alto="h-7"
              textSize="text-xs"
            />
          </View>
        </View>
      </View>
      <Image source={chip} className="absolute ml-60 mt-2" />

      <View className="mt-10 ml-4">
        {/* View container de Productos destacados */}

        <Text className="text-sm font-poppinsBold">Productos destacados</Text>

        <View className="flex flex-row flex-wrap mt-5">
          {productosDestacados.map((producto) => (
            <View key={producto.id} className=" m-1 w-28 h-44 rounded-lg shadow-md bg-naranja">
              <Image source={producto.imagen} className="w-24 h-24 m-2 rounded-lg" />
              <Text className="mx-1 font-poppins text-white" style={{ fontSize: 6.7 }}>
                {producto.nombre}. {producto.descripcion}
              </Text>
              <Text className="mx-1 text-sm font-poppinsBold text-white">{producto.precio}</Text>
            </View>
          ))}
        </View>
        {/* <TouchableOpacity
          onPress={() => {
            set_dev_menu(dev_menu + 1);
            if (dev_menu > 2) set_dev_menu(0);
          }}
        >
          <Text className="font-poppins underline text-xs mt-10">Cambiar opciones de abajo ciclica</Text>
        </TouchableOpacity> */}
        {/* {dev_menu === 0 ? <Text>"si dev_menu==0, no aparece nada seriaa lo ideal"</Text> : <></>} */}
        {/* {dev_menu === 1 ? (
          <>
            <TouchableOpacity onPress={() => navigation.navigate('MyPets')}>
              <Text className="font-poppins underline text-xs mt-10">ACCESO TEMPORAL A MYPETS</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Text className="font-poppins underline text-xs mt-10">ACCESO TEMPORAL A PERFIL</Text>
            </TouchableOpacity>
          </>
        ) : (
          <></>
        )}
        {dev_menu === 2 ? (
          <>
            <Button title="Ir al Welcome" onPress={() => navigation.navigate('Welcome')} colorButton="bg-black" colorText="text-white" ancho="w-72" alto="h-14" textSize="text-lg" />
            <View className="my-2" />
            <Button
              title="CAMBIAR IP DE API_URL"
              onPress={() => {
                axios.defaults.baseURL = null;
                navigation.navigate('Selecturl');
              }}
              colorButton="bg-black"
              colorText="text-white"
              ancho="w-72"
              alto="h-14"
              textSize="text-lg"
            />
          </>
        ) : (
          <></>
        )} */}
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
      /></View>
        {/* {dev_menu === 3 ? <Checkout /> : <></>} */}
      </View>
    </View>
    </ScrollView>
  );
}
