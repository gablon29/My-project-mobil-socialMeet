import { TouchableOpacity, Text } from "react-native";
import React from "react";

const Button = ({ title, onPress, colorButton, colorText, ancho, alto }) => {
  const buttonClasses = `flex justify-center items-center rounded-full ${colorButton} ${ancho} ${alto}`;
  const textClasses = `text-lg font-bold font-Poppins ${colorText} `;

  return (
    <TouchableOpacity className={buttonClasses} onPress={onPress}>
      <Text className={textClasses}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
