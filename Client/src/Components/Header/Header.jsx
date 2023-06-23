import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import logo from "../../../images/logo.png";

export default function Header() {
  return (
    <View className="flex flex-row justify-between items-center p-2 h-24 bg-black">
      <TouchableOpacity onPress={() => {}}>
        <Icon name="menu" size={28} color="white" className="ml-2" />
      </TouchableOpacity>

      <Image source={logo} className="w-32 h-10" resizeMode="contain" />

      <TouchableOpacity onPress={() => {}}>
        <Icon name="bell" size={28} color="white" className="mr-2" />
      </TouchableOpacity>
    </View>
  );
}
