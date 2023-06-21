import { TouchableOpacity, Text } from "react-native";
import React from "react";

const Button = ({ title, onPress, colorButton, colorText }) => {
  const buttonClasses = `rounded-full ${colorButton}`;
  const textClasses = `text-lg font-bold ${colorText}`;

  return (
    <TouchableOpacity className={buttonClasses} onPress={onPress}>
      <Text className={textClasses}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
