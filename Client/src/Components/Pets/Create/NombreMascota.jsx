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
    <View className="justify-center items-center my-7">
      <Text className="text-xl text-center font-poppinsBold w-44 mb-7">¿Como se llama tu mascota?</Text>
      <TextInput placeholder="Escribe su nombre" value={name} onChangeText={change} className="w-full max-w-sm min-w-[250px] rounded-lg bg-gris h-12 px-4 mb-4" />
    </View>
  );
};

export default NombreMascota;
