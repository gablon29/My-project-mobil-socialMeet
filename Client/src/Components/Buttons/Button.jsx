import { TouchableOpacity, Text } from 'react-native';
import React from 'react';

const Button = ({ title, onPress, colorButton, colorText, ancho, alto, textSize, textFont, otrosButton, shadow, margin }) => {
  const buttonClasses = `shadow ${shadow} flex justify-center items-center rounded-full ${colorButton} ${ancho} ${alto} ${otrosButton ? otrosButton : ''} ${margin}`;
  const textClasses = `${textSize}  ${textFont ? textFont : 'font-poppinsBold'} ${colorText} `;

  return (
    <TouchableOpacity className={buttonClasses} onPress={onPress}>
      <Text className={textClasses}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
