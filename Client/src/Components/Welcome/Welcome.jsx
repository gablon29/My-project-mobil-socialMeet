import { View, Text, Image } from "react-native";
import React from "react";
import logo from "../../../images/logo.png";
import welcomeImage from "../../../images/welcomeImage.png";
import wuau from "../../../images/wuau.png";

import Button from "../Buttons/Button";

export default function Welcome() {
  const testButton = () => {
    console.log("test");
  };

  return (
    <View className="flex-1 items-center justify-center">
      <Image source={logo} />
      <Image source={welcomeImage} />

      <Image source={wuau} />
      <View className="flex">
        <Button
          title="Iniciar sesión"
          onPress={testButton}
          colorButton="bg-naranja"
          colorText="text-white"
        />

        <Button
          title="Registrarme"
          onPress={testButton}
          colorButton="bg-black"
          colorText="text-white"
        />
      </View>
    </View>
  );
}
