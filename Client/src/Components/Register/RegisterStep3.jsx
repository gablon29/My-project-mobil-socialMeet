import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";

export const RegisterStep3 = () => {
  //aca se setea la contraseña
  const profile = useSelector((state) => state.ReducerAuth);

  return (
    <>
      <View className="mt-36 ml-28">
        <Text>HOLA</Text>
        <Text>HOLA</Text>
        <Text>HOLA</Text>
        <Text>HOLA</Text>
        <Text>HOLA</Text>
      </View>
      <ScrollView>
        <View>
          <Text>1</Text>

          <Text>5</Text>
          <Text>6</Text>
        </View>
      </ScrollView>
    </>
  );
};
