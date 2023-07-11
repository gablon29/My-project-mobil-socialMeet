import { TouchableOpacity, Text } from 'react-native';
import React, { Component } from 'react';

const Button = ({ title, Component, onPress, colorButton, colorText, ancho, alto, textSize, textFont, otrosButton, flexDirection }) => {
  const buttonClasses = `flex justify-center items-center rounded-full ${colorButton} ${ancho} ${alto} ${otrosButton ? otrosButton : ''} ${flexDirection}`;
  const textClasses = `${textSize}  ${textFont ? textFont : 'font-poppinsBold'} ${colorText} `;

  return (
    <TouchableOpacity className={buttonClasses} onPress={onPress}>
        <Text className={textClasses}>{title}</Text>
        {Component}
    </TouchableOpacity>
  );
};

export default Button;