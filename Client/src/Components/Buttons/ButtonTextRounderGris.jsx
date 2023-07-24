import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const ButtonTextRounderGris = ({ texto = 'Texto', activado = true, onPress = () => alert('no implementado') }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {activado ? (
        <View className={`w-16 h-11 bg-new rounded-full shadow-xl justify-center items-center border-2`}>
          <Text className='text-black font-poppinsSemiBold'>{texto}</Text>
        </View>
      ) : (
        <View className={`w-16 h-11 bg-new rounded-full shadow-xl justify-center items-center`}>
          <Text className='text-black font-poppinsSemiBold'>{texto}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ButtonTextRounderGris;
