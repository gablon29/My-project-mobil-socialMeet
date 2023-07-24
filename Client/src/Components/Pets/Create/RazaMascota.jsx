import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const RazaMascota = ({ setBreed, breed, setValida }) => {

  const change = (text) => {
    if (text) {
      setValida(false);
    } else {
      setValida(true);
    }
    setBreed(text);
  };

  return (
    <View className="justify-center items-center my-7">
      <Text className="text-2xl text-center font-poppinsBold mb-5">¿Cuál es su raza?</Text>
      <TextInput placeholder="Escribe su raza" placeholderTextColor="black" value={breed} onChangeText={change} className="w-full max-w-sm min-w-[250px] rounded-lg bg-new h-12 px-4 mb-4" />
      <TouchableOpacity onPress={() => change('No se cual es')}>
        <Text className="text-sm font-poppins underline">No se cual es</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RazaMascota;
