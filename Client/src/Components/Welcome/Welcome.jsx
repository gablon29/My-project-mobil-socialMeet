import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function Welcome() {
  const probar = useSelector((state) => state.ReducerAuth.usuarioAuth);
  console.log(probar);
  return (
    <View>
      <Text>Welcome</Text>
    </View>
  );
}
