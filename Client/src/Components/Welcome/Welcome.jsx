import { View, Text, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import logo from "../../../images/logo.png";
import tw from "twrnc";

export default function Welcome() {
  const probar = useSelector((state) => state.ReducerAuth.usuarioAuth);
  console.log(probar);
  return (
    <>
      <View>
        <Text>Welcome</Text>
      </View>
      <View>
        <Image source={logo} style={tw``} />
      </View>
    </>
  );
}
