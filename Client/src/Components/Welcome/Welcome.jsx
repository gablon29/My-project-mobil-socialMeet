import { View, Text, Image } from "react-native";
import React from "react";
import logo from "../../../images/logo.png";
import welcomeImage from "../../../images/welcomeImage.png";
import Wuau from "../../icons/Wuau";
import Button from "../Buttons/Button";

export default function Welcome() {
  const testButton = () => {
    console.log("test");
  };

  return (
    <>
      <View className="mt-24">
        <View>
          <Image source={logo} />
          <Image source={welcomeImage} />
        </View>
        <View className="mt-5">
          <Wuau />
        </View>
      </View>
      <View className="flex-1 items-center justify-center">
        <View>
          <Button title="Test" onPress={testButton} />
          <View className="my-2" />
          <Button title="Test" onPress={testButton} />
        </View>
      </View>
    </>
  );
}
