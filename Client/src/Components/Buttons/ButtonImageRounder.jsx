import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const ButtonImageRounder = ({ onPress = () => alert('no implementado'), children, activado = false, texto = 'Texto' }) => {
  return (
    <TouchableOpacity onPress={onPress} className="p-2">
      {activado ? (
        <View>
          <View className="w-24 h-24 bg-naranja rounded-full justify-center items-center">
            <View className="w-[90px] h-[90px] bg-naranja rounded-full border-2 border-white justify-center items-center">{children}</View>
          </View>
          <Text className="text-center font-poppins text-lg">{texto}</Text>
        </View>
      ) : (
        <View>
          <View className="w-24 h-24 bg-white rounded-full justify-center items-center border border-gray-400">
            <View className="w-[90px] h-[90px] bg-white rounded-full border-2 border-white justify-center items-center">{children}</View>
          </View>
          <Text className="text-center font-poppins text-lg">{texto}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ButtonImageRounder;
