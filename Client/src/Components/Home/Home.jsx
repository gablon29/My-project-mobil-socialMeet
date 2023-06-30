import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Button from "../Buttons/Button";
import chip from "../../../images/chip.png";
import juguetePerro from "../../../images/juguetePerro.jpg";
import Checkout from "../Stripe/Checkout";
import * as Notifications from "expo-notifications";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Home({ navigation }) {
  useEffect(() => {
    const sendNotification = async (token, title, body) => {
      const notification = {
        to: token,
        title: title,
        body: body,
      };

      try {
        await axios.post(
          "https://whopaws-production.up.railway.app/api/send/send-notification",
          notification
        );
        console.log("Notificación enviada");
      } catch (error) {
        console.error('Error al enviar la notificación:dc', error);

      }
    };

    const registerForPushNotifications = async () => {
      const { status } = await Notifications.requestPermissionsAsync();

      if (status === "granted") {
        const { data: token } = await Notifications.getExpoPushTokenAsync();
        console.log("Token del dispositivo:", token);

        sendNotification(
          token,
          "¡Bienvenido a MyPets!",
          "Disfruta de tus mascotas"
        );
      }
    };

    registerForPushNotifications();
  }, []);

  const productosDestacados = [
    {
      id: 1,
      imagen: juguetePerro,
      nombre: "Producto 1",
      descripcion: "Descripción del Producto 1",
      precio: "10.99€",
    },
    {
      id: 2,
      imagen: juguetePerro,
      nombre: "Producto 2",
      descripcion: "Descripción del Producto 2",
      precio: "19.99€",
    },
    {
      id: 3,
      imagen: juguetePerro,
      nombre: "Producto 3",
      descripcion: "Descripción del Producto 3",
      precio: "14.99€",
    },
  ];

  return (
    <View className="flex w-full h-full">
      <View className="flex h-32 w-fit mt-14 mx-10 rounded-md bg-naranja">
        <View className="flex w-8/12 ml-4 mt-3">
          <Text className="text-base font-poppinsBold  text-white">
            Tu mascota siempre segura con Whopaws
          </Text>
          <Text
            style={{ fontSize: 6.7 }}
            className="font-poppins  mt-1 text-white"
          >
            Un chip NFC, ligero y accesible para todo el mundo
          </Text>
          <View className="mt-2">
            <Button
              title="Más información"
              onPress={() => alert("botón activado")}
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
            <View
              key={producto.id}
              className=" m-1 w-28 h-44 rounded-lg shadow-md bg-naranja"
            >
              <Image
                source={producto.imagen}
                className="w-24 h-24 m-2 rounded-lg"
              />
              <Text
                className="mx-1 font-poppins text-white"
                style={{ fontSize: 6.7 }}
              >
                {producto.nombre}. {producto.descripcion}
              </Text>
              <Text className="mx-1 text-sm font-poppinsBold text-white">
                {producto.precio}
              </Text>
            </View>
          ))}
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("MyPets")}>
        <Text className="font-poppins underline text-xs mt-10">
          ACCESO TEMPORAL A MYPETS
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Text className="font-poppins underline text-xs mt-10">
          ACCESO TEMPORAL A PROFILE
        </Text>
      </TouchableOpacity>
        <Checkout />
      </View>
    </View>
  );
}
