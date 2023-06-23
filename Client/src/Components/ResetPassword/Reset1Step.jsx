import React from "react";
import { View, Image, TextInput, Text } from "react-native";
import Button from "../Buttons/Button";
import leftIcon from "../../../images/leftIcon.png";

export const Reset1Step = ({
  email,
  setEmail,
  password,
  setPassword,
  steps,
  setSteps,
  emailPassword,
  verification,
}) => {
  const Code = async () => {
    try {
      await emailPassword();
      setSteps(1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View className="flex-1 items-center justify-start pt-10 bg-white">
      <View className="flex flex-row items-center mb-32">
        <Image source={leftIcon} className="ml-6" />
        <View className="flex-1 justify-center">
          <Text className="text-center text-base font-poppinsBold mr-16">
            Iniciar sesión
          </Text>
        </View>
      </View>
      <Text className="text-center mb-8 px-8 font-poppins">
        Escribe el email asociado a tu cuenta y te enviaremos un código para
        recuperar tu cuenta
      </Text>

      <View className="w-4/5">
        <TextInput
          placeholder="   Email"
          placeholderTextColor="white"
          value={email}
          onChangeText={(text) => setEmail(text)}
          className="w-full rounded-full bg-naranja px-4 mb-4 h-14 font-poppinsBold"
        />
      </View>
      <View className="flex mt-12">
        <Button
          title="Recuperar"
          onPress={() => Code()}
          colorButton="bg-black"
          colorText="text-white"
          ancho="w-40"
          alto="h-11"
          textSize="text-base"
        />
      </View>
    </View>
  );
};
