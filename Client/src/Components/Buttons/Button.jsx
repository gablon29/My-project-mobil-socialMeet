import { TouchableOpacity, Text } from "react-native";
import React from "react";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      className="
        w-296 h-55 rounded-full bg-blue-500 items-center justify-center"
      onPress={onPress}
    >
      <Text className="text-white text-lg font-bold">{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;
