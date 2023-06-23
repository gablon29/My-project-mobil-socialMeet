import { TouchableOpacity, Text } from "react-native";
import React from "react";

const Button = ({
  title,
  onPress,
  colorButton,
  colorText,
  ancho,
  alto,
  textSize,
}) => {
  const buttonClasses = `flex justify-center items-center rounded-full ${colorButton} ${ancho} ${alto}`;
  const textClasses = `${textSize}  font-poppinsBold  ${colorText} `;

  return (
    <TouchableOpacity className={buttonClasses} onPress={onPress}>
      <Text className={textClasses}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
