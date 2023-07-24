import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { View, Text } from 'react-native';

const NombreMascota = ({ setName, name, setValida }) => {
  const change = (text) => {
    if (text) {
      setValida(false);
    } 
    else {
      setValida(true);
    }
    setName(text);
  };

  return (
    <View className="justify-center items-center my-5">
      <Text className="text-2xl text-center font-poppinsBold mb-5">¿Como se llama {"\n"} tu mascota?</Text>
      <TextInput placeholder="Escribe su nombre" placeholderTextColor="black" value={name} onChangeText={change} className="w-full max-w-sm min-w-[250px] rounded-lg bg-new h-12 px-4 mb-4" />
    </View>
  );
};

export default NombreMascota;
