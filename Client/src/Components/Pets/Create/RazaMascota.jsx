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
      <Text className="text-xl text-center font-poppinsBold w-48 mb-7">¿Cuál es su raza?</Text>
      <TextInput placeholder="Escribe su raza" value={breed} onChangeText={change} className="w-full max-w-sm min-w-[250px] rounded-lg bg-gris h-12 px-4 mb-4" />
      <TouchableOpacity onPress={() => alert('no implementado')}>
        <Text className="text-sm font-poppins">No se cual es</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RazaMascota;