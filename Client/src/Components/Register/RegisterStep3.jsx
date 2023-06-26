import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import logo from "../../../images/logo.png";
import mensajeDeBienvenida from "../../../images/mensajeDeBienvenida.png";
import Button from "../Buttons/Button";

export function RegisterStep3({ navigation }) {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image source={logo} className="mb-32" />
      <View className="flex items-center mb-20">
        <Image source={mensajeDeBienvenida} />
        <View className="my-10">
          <Text className="font-poppinsBold text-center text-lg mt-5">
            ¡Enhorabuena, tu cuenta ya ha sido creada!
          </Text>
        </View>
        <View className="flex items-center mt-10">
          <Button
            title="Ir a inicio"
            onPress={() => navigation.navigate("Home")}
            colorButton="bg-naranja"
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
