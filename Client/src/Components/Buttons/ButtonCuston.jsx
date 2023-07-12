import { TouchableOpacity, Text } from 'react-native';
import React from 'react';

const Button = ({ buttonClass, onPress, title }) => {
  const buttonClasses = `${buttonClass}`;
  return (
    <TouchableOpacity className={buttonClasses} onPress={onPress}>
      {title}
    </TouchableOpacity>
  );
};

export default Button;
