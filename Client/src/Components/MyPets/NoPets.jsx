import { View, Text, Image } from 'react-native';
import React from 'react';
import noPets from '../../../images/noPets.png';
import Button from '../Buttons/Button';

export const NoPets = ({ navigation }) => {
  return (
    <View className="flex-1 items-center justify-center mt-40">
      <View className="flex items-center mb-20">
        <Image source={noPets} />
        <View className="my-10">
          <Text className="font-poppinsBold text-center text-lg mt-5">Aún no has añadido ninguna mascota, agrega una ahora</Text>
        </View>
        <View className="flex items-center mt-10">
          <Button title="Añadir mascota" onPress={() => navigation.navigate('CreatePet')} colorButton="bg-naranja" colorText="text-white" ancho="w-40" alto="h-11" textSize="text-base" />
        </View>
      </View>
    </View>
  );
};
