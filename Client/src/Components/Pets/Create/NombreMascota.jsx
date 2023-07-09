import React from "react";
import { TextInput } from "react-native";
import { View, Text } from "react-native";

const NombreMascota = () => {
  return (
    <View className='justify-center items-center my-7'>
        <Text className='text-xl text-center font-poppinsBold w-44 mb-7'>¿Como se llama tu mascota?</Text>
        <TextInput placeholder="Escribe su nombre" /* value={lastName} */ /* onChangeText={(text) => setLastName(text)} */ className="w-full max-w-sm min-w-[250px] rounded-lg bg-gris h-12 px-4 mb-4" />
    </View>
    )
};

export default NombreMascota;
