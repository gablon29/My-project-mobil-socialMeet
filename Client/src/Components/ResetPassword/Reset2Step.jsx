import React, { useState, useRef } from "react";
import { TextInput, View, Text } from "react-native";
import Button from "../Buttons/Button";

export const Reset2Step = ({ verification, setSteps }) => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const codeInputs = useRef([]);

  const handleChangeCode = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < code.length - 1) {
      codeInputs.current[index + 1].focus();
    }
  };

  const changePassword = () => {
    const enteredCode = code.join("");
    if (enteredCode === verification.code) {
      console.log("pasa");
      setSteps(2);
    }
  };

  return (
    <>
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-base font-poppins text-center mb-10">
          Introduce el código que te hemos enviado por correo
        </Text>

        <View className="w-3/5">
          <View style={{ flexDirection: "row" }}>
            {code.map((value, index) => (
              <TextInput
                key={index}
                ref={(input) => (codeInputs.current[index] = input)}
                placeholder=""
                value={value}
                onChangeText={(value) => handleChangeCode(index, value)}
                className="w-1/6 rounded bg-gray-300 mx-1 h-14"
                maxLength={1}
                keyboardType="default"
              />
            ))}
          </View>
        </View>

        <View className="flex mt-16">
          <Button
            title="Verificar"
            onPress={changePassword}
            colorButton="bg-black"
            colorText="text-white"
            ancho="w-72"
            alto="h-14"
            textSize="text-lg"
          />
        </View>
      </View>
    </>
  );
};