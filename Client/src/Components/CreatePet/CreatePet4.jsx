import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Button from "../Buttons/Button";
import YesNoBoolean from "../Buttons/YesNoButton";

export const CreatePet4 = ({ steps, setSteps, health, setHealth }) => {
  function bordeable(react_state) {
    if (react_state) {
      return "bg-naranja rounded-full"
    } else {
      return "bg-naranja rounded-full border border-black-300"
    }
  }

  return (
    <View className="w-screen h-screen">
      <YesNoBoolean text="¿Está castrado o esterilizado?" setClassName={"flex mt-10 "} reactState={health.castrado} setReactState={setHealth.setHealthCastrado} />
      <YesNoBoolean text="¿Tiene microchip?" setClassName={"flex mt-3 "} reactState={health.microchip} setReactState={setHealth.setHealthMicrochip} />
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
