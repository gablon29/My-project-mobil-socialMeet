import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ButtonImageRounder = ({ onPress = () => alert('no implementado'), children, activado = false, texto = 'Texto' }) => {
  return (
    <TouchableOpacity onPress={onPress} className="p-2">
      {activado ? (
        <View>
          <View className="w-24 h-24 bg-naranja rounded-full justify-center items-center">
            <View className="w-[90px] h-[90px] bg-naranja rounded-full border-2 border-white justify-center items-center">
              {/* <Icon name="gender-male" size={60} color="white" /> */}
              {children}
            </View>
          </View>
          <Text className="text-center font-poppins text-lg">{texto}</Text>
        </View>
      ) : (
        <View>
          <View className="w-24 h-24 bg-white rounded-full justify-center items-center border border-gray-400">
            <View className="w-[90px] h-[90px] bg-white rounded-full border-2 border-white justify-center items-center">
              {/* <Icon name="gender-female" size={60} color="gray" /> */}
              {children}
            </View>
          </View>
          <Text className="text-center font-poppins text-lg">{texto}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ButtonImageRounder;
