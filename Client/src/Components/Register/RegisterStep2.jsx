import React, { useEffect } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import Button from "../Buttons/Button";
import logo from "../../../images/logo.png";

export const RegisterStep2 = ({
  password,
  setPassword,
  setRegisterSteps,
  handleRegister,
  checkPassword,
  setCheckPassword,
}) => {
  const createAcount = async () => {
    await handleRegister()
      .then((succes) => setRegisterSteps(3))
      .catch((error) => Alert.alert("Ocurrio un error: ", error.message));
  };

  return (
    <>
      <View className="flex-1 items-center justify-center bg-white">
        <Image source={logo} />
        <View className="mt-8 px-10">
          <Text className="font-poppins text-center py-12">
            Crea un contraseña segura para tu cuenta, recuerda añadir mayúsculas
            y números para mayor seguridad.
          </Text>
        </View>
        <View className="w-4/5 ">
          <Text className="font-poppinsBold">Contraseña</Text>
          <TextInput
            placeholder=""
            value={password}
            onChangeText={(text) => setPassword(text)}
            className="w-full rounded-full bg-gris h-8 px-4 mb-4"
          />
        </View>
        <View className="w-4/5">
          <Text className="font-poppinsBold">Repetir contraseña</Text>
          <TextInput
            placeholder=""
            value={checkPassword}
            onChangeText={(text) => setCheckPassword(text)}
            className="w-full rounded-full bg-gris h-8 px-4 mb-4"
          />
        </View>
        <View className="my-8" />
        <View className="flex items-center mt-2">
          <Button
            title="Registrarme"
            onPress={() => createAcount()}
            colorButton="bg-naranja"
            colorText="text-white"
            ancho="w-40"
            alto="h-11"
            textSize="text-base"
          />
        </View>
        <View className="my-5" />
        <View className="mt-28">
          <TouchableOpacity
            onPress={() => navigation.navigate("ResetPassword")}
          >
            <Text className="font-poppins underline text-xs">
              ¿Has olvidado tu contraseña? Recupérala aquí
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
