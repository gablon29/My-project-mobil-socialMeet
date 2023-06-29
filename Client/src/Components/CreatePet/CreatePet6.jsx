import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import mensajeDeBienvenida from "../../../images/mensajeDeBienvenida.png";
import Button from "../Buttons/Button";

export const CreatePet6 = ({ navigation, addPet, token }) => {
  const handleAddPet = async () => {
    try {
      const agregarPet = await addPet(token);
      console.log("TOKEN", token);
      console.log("agregandopet", agregarPet);
      /*       agregarPet; */

      navigation.navigate("MyPets");
    } catch (error) {
      console.log("No se creó la mascota", error);
    }
  };

  return (
    <View className="flex-1 items-center justify-center mt-40">
      <View className="flex items-center mb-20">
        <Image source={mensajeDeBienvenida} />
        <View className="my-10">
          <Text className="font-poppinsBold text-center text-lg mt-5">
            ¡Enhorabuena, tu mascota ya ha sido creada!
          </Text>
        </View>
        <View className="flex items-center mt-10">
          <Button
            title="Ver mi mascota"
            onPress={handleAddPet}
            colorButton="bg-naranja"
            colorText="text-white"
            ancho="w-40"
            alto="h-11"
            textSize="text-base"
          />
        </View>
      </View>
    </View>
  );
};
