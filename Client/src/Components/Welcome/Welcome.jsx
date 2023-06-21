import { View, Text, Image } from "react-native";
import React from "react";
import logo from "../../../images/logo.png";
import welcomeImage from "../../../images/welcomeImage.png";

export default function Welcome() {
  return (
    <>
      <View className="mt-32"></View>
      <View>
        <Image source={logo} />
        <Image source={welcomeImage} />
      </View>
    </>
  );
}
