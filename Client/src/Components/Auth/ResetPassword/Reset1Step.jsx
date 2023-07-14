import React from "react";
import { View, TextInput, Text, Alert } from "react-native";
import Button from "../../Buttons/Button";

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
  const sendEmail = async () => {
    try {
      await emailPassword();
      setSteps(1);
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <View className="flex-1 items-center justify-start pt-10 bg-white">
      <Text className="text-center mb-12 px-8 font-poppins">
        Escribe el email asociado a tu cuenta y te enviaremos un código para
        recuperar tu cuenta
      </Text>

      <View className="w-80 h-12 mb-5">
        <TextInput
          placeholder="   Email"
          placeholderTextColor="white"
          inputMode="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          className="w-full rounded-full bg-naranja px-4 h-14 font-poppinsBold text-white"
        />
      </View>
      <View className="flex mt-12">
        <Button
          title="Recuperar"
          onPress={() => sendEmail()}
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
