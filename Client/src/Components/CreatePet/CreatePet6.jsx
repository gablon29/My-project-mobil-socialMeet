import { View, Text, Image } from "react-native";
import React from "react";
import mensajeDeBienvenida from "../../../images/mensajeDeBienvenida.png";
import Button from "../Buttons/Button";

export const CreatePet6 = ({ navigation }) => {
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
            onPress={() => navigation.navigate("MyPets")} //Tiene que llevar a ver la mascota en particular o todas?
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
