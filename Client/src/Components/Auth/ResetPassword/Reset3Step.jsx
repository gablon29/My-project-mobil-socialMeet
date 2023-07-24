import React from 'react';
import { View, TextInput, Text } from 'react-native';
import Button from '../../Buttons/Button';

export const Reset3Step = ({ password, setPassword, Code }) => {
  return (
    <View className="flex-1 items-center justify-start pt-10 bg-white">
      <Text className="text-center mb-12 px-8 font-poppins">Crea una nueva contraseña</Text>

      <View className="w-80 h-12 mb-5">
        <TextInput placeholder="   Nueva contraseña" placeholderTextColor="white" value={password} onChangeText={(text) => setPassword(text)} className="w-full rounded-lg bg-rosa px-4 h-14 font-poppinsBold text-black" />
      </View>
      <View className="flex mt-12">
        <Button title="Enviar" onPress={() => Code()} borderColor={"border-naranja"} colorButton="bg-white" colorText="text-naranja" ancho="w-40" alto="h-11" textSize="text-base" />
      </View>
    </View>
  );
};
