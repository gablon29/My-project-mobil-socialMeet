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
        <Text className="font-poppins text-center py-12">
          Introduce el código que te hemos enviado por correo
        </Text>

        <View className="w-4/5">
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {code.map((value, index) => (
              <TextInput
                key={index}
                ref={(input) => (codeInputs.current[index] = input)}
                placeholder=""
                value={value}
                onChangeText={(value) => handleChangeCode(index, value)}
                className="w-1/6 rounded-full bg-naranja px-4 mb-4 h-14"
                maxLength={1}
                keyboardType="numeric"
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
