import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import leftIcon from '../../../images/leftIcon.png';

export default function HeaderLeftArrow({ text, goBack, steps, setSteps, textSize, font, imagenMargen }) {
  const textClasses = `text-center ${textSize ? textSize : 'text-base'}  ${font ? font : 'font-poppinsBold'} mr-16  `;
  const imagenStyles = `${imagenMargen ? imagenMargen : 'ml-6'}`;
  return (
    <View className="flex flex-row items-center mb-14">
      <TouchableOpacity onPress={() => (steps === 0 ? goBack() : steps === 1 ? setSteps(0) : setSteps(1))}>
        <Image source={leftIcon} className={imagenStyles} />
      </TouchableOpacity>

      <View className="flex-1 justify-center">
        <Text className={textClasses}>{text}</Text>
      </View>
    </View>
  );
}
