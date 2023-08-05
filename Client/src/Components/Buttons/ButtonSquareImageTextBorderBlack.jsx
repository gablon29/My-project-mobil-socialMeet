import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import img from '../../../images/ic_default.png';

const ButtonSquareImageTextBorderBlack = ({ register, isRegister, touchClass, texto = 'Texto', textClass, imagen = img, activado = true, onPress = () => alert('no implementado') }) => {
  register === undefined ? register = true : register
  
  if(register) {
    return (
      <TouchableOpacity onPress={isRegister ? null : onPress} className={touchClass}>
        {activado ? (
          <View className={`w-20 h-20 mx-2 mt-2 ${isRegister ? "bg-gris" : "bg-new"} rounded-xl shadow-xl justify-center items-center ${isRegister ? "" : "border-4"}`}>
            <Image source={imagen} className="h-16 w-16" resizeMode="contain" />
          </View>
        ) : (
          <View className={`w-20 h-20 mx-2 mt-2 ${isRegister ? "bg-gris" : "bg-new"} rounded-xl shadow-xl justify-center items-center`}>
            <Image source={imagen} className="h-16 w-16" resizeMode="contain" />
          </View>
        )}
        <Text className={`${textClass ? textClass : "text-center font-poppins text-lg"}`}>{texto}</Text>
      </TouchableOpacity>
    )
  }
  
  return (
    <TouchableOpacity onPress={isRegister ? onPress : null} className={touchClass}>
      {activado ? (
        <View className={`w-20 h-20 mx-2 mt-2 bg-new rounded-xl shadow-xl justify-center items-center border-4`}>
          <Image source={imagen} className="h-16 w-16" resizeMode="contain" />
        </View>
      ) : (
        <View className={`w-20 h-20 mx-2 mt-2 ${isRegister ? "bg-new" : "bg-gris"} rounded-xl shadow-xl justify-center items-center`}>
          <Image source={imagen} className="h-16 w-16" resizeMode="contain" />
        </View>
      )}
      <Text className={`${textClass ? textClass : "text-center font-poppins text-lg"}`}>{texto}</Text>
    </TouchableOpacity>
  );
};

export default ButtonSquareImageTextBorderBlack;
