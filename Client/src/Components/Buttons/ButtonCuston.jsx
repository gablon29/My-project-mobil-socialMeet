import { TouchableOpacity, Text } from 'react-native';
import React from 'react';

const Button = ({ buttonClass, onPress, title, component, titleClass }) => {
  return (
    <TouchableOpacity className={`${buttonClass}`} onPress={onPress}>
      <Text className={`${titleClass ? titleClass : "hidden"}`}>{title}</Text>
      {component}
    </TouchableOpacity>
  );
};

export default Button;
