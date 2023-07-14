import { TouchableOpacity, Text } from 'react-native';
import React from 'react';

const Button = ({ buttonClass, onPress, title, component, titleClass }) => {
  const buttonClasses = `${buttonClass}`;
  const textClasses = `${titleClass}`
  return (
    <TouchableOpacity className={buttonClasses} onPress={onPress}>
      <Text className={textClasses}>{title}</Text>
      {component}
    </TouchableOpacity>
  );
};

export default Button;
