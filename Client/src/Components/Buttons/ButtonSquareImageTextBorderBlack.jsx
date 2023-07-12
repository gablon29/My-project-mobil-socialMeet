import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import img from '../../../images/ic_default.png';

const ButtonSquareImageTextBorderBlack = ({ texto = 'Texto', imagen = img, activado = true, onPress = () => alert('no implementado') }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {activado ? (
        <View className={`w-20 h-20 mx-2 mt-2 bg-naranja rounded-xl shadow-xl justify-center items-center border-4`}>
          <Image source={imagen} className="h-16 w-16" resizeMode="contain" />
        </View>
      ) : (
        <View className={`w-20 h-20 mx-2 mt-2 bg-naranja rounded-xl shadow-xl justify-center items-center`}>
          <Image source={imagen} className="h-16 w-16" resizeMode="contain" />
        </View>
      )}
      <Text className="text-center font-poppins text-lg">{texto}</Text>
    </TouchableOpacity>
  );
};

export default ButtonSquareImageTextBorderBlack;
