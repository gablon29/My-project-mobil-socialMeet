import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import logo from "../../../images/logo.png";
import welcomeImage from "../../../images/welcomeImage.png";
import wuau from "../../../images/wuau.png";
import Button from "../Buttons/Button";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Welcome({ navigation }) {


  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('Token');
        if (value !== null) {
          reloadUser(value).then((succes) => console.log(succes))
        } else {
          console.log('No se encontraron datos.');
        }
      } catch (error) {
        console.log('Error al obtener datos:', error);
      }
    };
  
    getData();
  }, []);
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image source={logo} />
      <Image source={welcomeImage} className="mt-8" />

      <Image source={wuau} className="mt-8" />
      <View className="flex mt-16">
        <Button
          title="Iniciar sesión"
          onPress={() => navigation.navigate("Login")}
          colorButton="bg-naranja"
          colorText="text-white"
          ancho="w-72"
          alto="h-14"
          textSize="text-lg"
        />
        <View className="my-4" />

        <Button
          title="Registrarme"
          onPress={() => navigation.navigate("Register")}
          colorButton="bg-black"
          colorText="text-white"
          ancho="w-72"
          alto="h-14"
          textSize="text-lg"
        />
      </View>
    </View>
  );
}
