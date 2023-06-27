import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Button from "../Buttons/Button";
import cruz from "../../../images/iconos/cruz.png";

export const CreatePet1 = ({ profilePic, setProfilePic, steps, setSteps }) => {
  return (
    <View>
      <View className="mx-32 mt-20">
        <TouchableOpacity className="flex justify-center items-center rounded-full bg-naranja w-36 h-36">
          <Image source={cruz} />
        </TouchableOpacity>
        <Text className="font-poppinsBold mt-5">Imagen de perfil</Text>
      </View>
      <View className="flex my-10 mx-7">
        <Text className="font-poppins text-center">
          Agrega una imagen de perfil de tu mascota para que otros usuarios y
          profesionales puedan conocerla mejor.
        </Text>
      </View>
      <View className="flex flex-row justify-between mx-6 mt-48">
        <Button
          title="Saltar"
          onPress
          colorButton="bg-black"
          colorText="text-white"
          ancho="w-40"
          alto="h-11"
          textSize="text-base"
        />
        <Button
          title="Continuar"
          onPress={() => setSteps(1)}
          colorButton="bg-naranja"
          colorText="text-white"
          ancho="w-40"
          alto="h-11"
          textSize="text-base"
        />
      </View>
    </View>
  );
};
