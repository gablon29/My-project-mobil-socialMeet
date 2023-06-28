import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Button from "../Buttons/Button";

export const CreatePet4 = ({
  steps,
  setSteps,
  health,
  setHealth,
  handleHealthProperty,
}) => {
  return (
    <View className="w-screen h-screen">
      <View className="flex mt-10">
        <Text className="font-poppinsBold text-center">
          ¿Está castrado o esterilizado?
        </Text>
        <View className="flex flex-row">
          <View className="flex-1 mx-3">
            <TouchableOpacity
              className="bg-naranja rounded-full"
              onPress={() => handleHealthProperty("castrado", true)}
            >
              <Text className="font-poppinsBold text-center text-white">
                Si
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-1 mx-3">
            <TouchableOpacity
              className="bg-naranja rounded-full"
              onPress={() => handleHealthProperty("castrado", false)}
            >
              <Text className="font-poppinsBold text-center text-white">
                No
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="flex mt-3">
        <Text className="font-poppinsBold text-center"> ¿Tiene microchip?</Text>
        <View className="flex flex-row">
          <View className="flex-1 mx-3">
            <TouchableOpacity
              className="bg-naranja rounded-full"
              onPress={() => handleHealthProperty("microchip", true)}
            >
              <Text className="font-poppinsBold text-center text-white">
                Si
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-1 mx-3">
            <TouchableOpacity
              className="bg-naranja rounded-full"
              onPress={() => handleHealthProperty("microchip", false)}
            >
              <Text className="font-poppinsBold text-center text-white">
                No
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="flex flex-row justify-between mx-6 mt-48">
        <Button
          title="Atrás"
          onPress={() => setSteps(2)}
          colorButton="bg-black"
          colorText="text-white"
          ancho="w-40"
          alto="h-11"
          textSize="text-base"
        />
        <Button
          title="Continuar"
          onPress={() => {
            setSteps(4);
            console.log("castrado y microchip", health);
          }}
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
