import { View, TouchableOpacity, Text, Image } from 'react-native';
import React from 'react';

const ButtonWithImage = ({ title, onPress, colorButton, colorText, ancho, alto, textSize, textFont, margins, image, imageClasses }) => {
  const buttonClasses = `flex justify-center items-center rounded-full  ${margins} ${colorButton} ${ancho} ${alto} shadow`;
  const textClasses = `${textSize}  ${textFont ? textFont : 'font-poppinsBold '}  ${colorText} `;

  return (
    <TouchableOpacity className={buttonClasses} onPress={onPress}>
      <View className="flex flex-row">
        <Text className={textClasses}>{title}</Text>
        <Image source={image} className={imageClasses} />
      </View>
    </TouchableOpacity>
  );
};

export default ButtonWithImage;
