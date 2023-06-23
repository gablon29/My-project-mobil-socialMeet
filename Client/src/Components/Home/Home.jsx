import React from "react";
import { View, Text, Image } from "react-native";
import Button from "../Buttons/Button";
import chip from "../../../images/chip.png";

export default function Home() {
  return (
    <View className="flex w-full h-full">
      <View className="flex h-32 w-fit mt-28 mx-10 rounded bg-naranja">
        <View className="flex w-8/12 ml-4 mt-3">
          <Text className="text-base font-poppinsBold  text-white">
            Tu mascota siempre segura con Whopaws
          </Text>
          <Text
            style={{ fontSize: 6.7 }} //Tailwind no deja agregar una clase de texto más pequeña en RN
            className="font-poppins  mt-1 text-white"
          >
            Un chip NFC, ligero y accesible para todo el mundo
          </Text>
          <View className="mt-2">
            <Button
              title="Más información"
              onPress={() => console.log("botón activado")}
              colorButton="bg-black"
              colorText="text-white"
              ancho="w-36"
              alto="h-7"
              textSize="text-xs"
            />
          </View>
        </View>
      </View>
      <Image source={chip} className="absolute ml-60 mt-16" />
    </View>
  );
}
