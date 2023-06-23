import React from "react";
import { View, Text } from "react-native";
import Button from "../Buttons/Button";

export default function Home() {
  return (
    <View>
      <View className="flex h-32 w-80 mx-7 mt-20 rounded bg-naranja" />
      <View className="flex items-start">
        <Text className="text-2xl font-bold ">
          Tu mascota siempre segura con Whopaws
        </Text>
        <Text className="font-bold text-sm  mt-2">
          Un chip NFC, ligero y accesible para todo el mundo
        </Text>
        <View className="mt-10">
          <Button
            title="Más información"
            onPress={() => console.log("botón activado")}
            colorButton="bg-black"
            colorText="text-white"
            ancho="w-40"
            alto="h-11"
            textSize="text-base"
          />
        </View>
      </View>
    </View>
  );
}
