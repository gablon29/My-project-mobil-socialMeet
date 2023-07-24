import React, { useState, useRef } from 'react';
import { TextInput, View, Text, Alert } from 'react-native';
import Button from '../../Buttons/Button';

export const Reset2Step = ({ setSteps ,checkCode}) => {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const codeInputs = useRef([]);
  const handleChangeCode = (index, value) => {
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);
    if (value && index < verificationCode.length - 1) {
      codeInputs.current[index + 1].focus();
    }
  };

  const changePassword = () => {
    const enteredCode = verificationCode.join('');
    checkCode(enteredCode)
    .then(r=>{
      console.log(r);
      setSteps(2);
    })
    .catch(e=>{
      Alert.alert(e.message)
    })

  };

  return (
    <>
      <View className="flex-1 items-center justify-center bg-white w-screen">
        <Text className="text-base font-poppins text-center mb-10">Introduce el código que te hemos enviado por correo</Text>

        <View className="mx-5">
          <View style={{ flexDirection: 'row' }}>
            {verificationCode.map((value, index) => (
              <TextInput inputMode='numeric' key={index} ref={(input) => (codeInputs.current[index] = input)} placeholder="" value={value} onChangeText={(value) => handleChangeCode(index, value)} className="w-10 text-center font-bold text-2xl rounded bg-gray-300 mx-1 h-14" maxLength={1} keyboardType="default" />
            ))}
          </View>
        </View>

        <View className="flex mt-16">
          <Button title="Verificar" onPress={changePassword} borderColor={"border-naranja"} colorButton="bg-white" colorText="text-naranja" ancho="w-72" alto="h-14" textSize="text-lg" />
        </View>
      </View>
    </>
  );
};
