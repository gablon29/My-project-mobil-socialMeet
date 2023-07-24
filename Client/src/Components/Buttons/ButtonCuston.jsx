import { TouchableOpacity, Text, View } from 'react-native';
import React from 'react';

const Button = ({ buttonClass, onPress, title, component, titleClass, dissable }) => {
  dissable === undefined ? dissable = true : dissable
  return (
    <>
    {dissable ? 
      <TouchableOpacity className={`${buttonClass} opacity-1`} onPress={onPress}
      style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
      >
        <Text className={`${titleClass ? titleClass : "hidden"}`}>{title}</Text>
        {component}
      </TouchableOpacity>
    : 
      <View className={`${buttonClass} opacity-80`}>
        <Text className={`${titleClass ? titleClass : "hidden"}`}>{title}</Text>
        {component}
      </View>
    }
    </>
  );
};

export default Button;
