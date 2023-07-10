import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const ButtonTextRounder = ({ onPress = () => alert('no implementado'), texto = 'Texto', activado = false }) => {
  return (
    <TouchableOpacity onPress={onPress} className='p-2'>
      {activado ? (
        <View className="w-24 h-24 bg-naranja rounded-full justify-center items-center">
          <View className="w-[90px] h-[90px] bg-naranja rounded-full border-2 border-white justify-center items-center">
            <Text className="text-center text-white font-poppins text-lg">{texto}</Text>
          </View>
        </View>
      ) : (
        <View className="w-24 h-24 bg-white rounded-full justify-center items-center border border-gray-400">
          <View className="w-[90px] h-[90px] bg-white rounded-full border-2 border-white justify-center items-center">
            <Text className="text-center font-poppins text-lg text-gray-400">{texto}</Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ButtonTextRounder;
