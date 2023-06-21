import { View, Text, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import logo from "../../../images/logo.png";

export default function Welcome() {
  const probar = useSelector((state) => state.ReducerAuth.usuarioAuth);
  console.log(probar);
  return (
    <>
      <View className='mt-32'>
        <Text>Welcome</Text>
      </View>
      <View>
        <Image source={logo} />
      </View>
    </>
  );
}
