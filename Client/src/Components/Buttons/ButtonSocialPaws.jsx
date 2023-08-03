import { TouchableOpacity, Text, View } from 'react-native';
import React from 'react';

const ButtonSocial = ({ buttonClass, onPress, title, titleClass }) => {
  
  return (
    <>     
      <TouchableOpacity className={`${buttonClass} opacity-1`} onPress={onPress}
      style={{boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}}
      >
        <Text className={`${titleClass}`}>{title}</Text>
      </TouchableOpacity>    
    </>
  );
};

export default ButtonSocial;