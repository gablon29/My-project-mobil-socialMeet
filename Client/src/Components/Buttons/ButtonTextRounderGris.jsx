import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const ButtonTextRounderGris = ({ texto = 'Texto', activado = true, onPress = () => alert('no implementado') }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {activado ? (
        <View className={`w-fit h-fit py-1 px-6 bg-gray-300 rounded-full shadow-xl justify-center items-center border-2`}>
          <Text className='text-black font-poppinsSemiBold'>{texto}</Text>
        </View>
      ) : (
        <View className={`w-fit h-fit py-1 px-6 bg-gray-300 rounded-full shadow-xl justify-center items-center border-2 border-gray-300`}>
          <Text className='text-black font-poppinsSemiBold'>{texto}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ButtonTextRounderGris;
