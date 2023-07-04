import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Button from "../Buttons/Button";
import { CreatePetMethod } from "../../metodos/petsMetodos";

export const CreatePet5 = ({ steps, setSteps, health, setHealth, addPet }) => {
 
  const Create = () =>{
    try{
      addPet()
    }
    catch(err){
      console.log(err)
    }
  
  }
  return (
    <View className="w-screen h-screen">
      <View className="flex mt-10">
        <Text className="font-poppinsBold text-center">
          ¿Se lleva bien con perros?
        </Text>
        <View className="flex flex-row">
          <View className="flex-1 mx-3">
            <TouchableOpacity
              className="bg-naranja rounded-full"
              onPress={() => setHealth.setHealthOkWithDogs(true)}
            >
              <Text className="font-poppinsBold text-center text-white">
                Si
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-1 mx-3">
            <TouchableOpacity
              className="bg-naranja rounded-full"
              onPress={() => setHealth.setHealthOkWithDogs(false)}
            >
              <Text className="font-poppinsBold text-center text-white">
                No
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="flex mt-3">
        <Text className="font-poppinsBold text-center">
          ¿Se lleva bien con gatos?
        </Text>
        <View className="flex flex-row">
          <View className="flex-1 mx-3">
            <TouchableOpacity
              className="bg-naranja rounded-full"
              onPress={() => setHealth.setHealthOkWithCats(true)}
            >
              <Text className="font-poppinsBold text-center text-white">
                Si
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-1 mx-3">
            <TouchableOpacity
              className="bg-naranja rounded-full"
              onPress={() => setHealth.setHealthOkWithCats(false)}
            >
              <Text className="font-poppinsBold text-center text-white">
                No
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="flex mt-3">
        <Text className="font-poppinsBold text-center">
          ¿Se lleva bien con niños?
        </Text>
        <View className="flex flex-row">
          <View className="flex-1 mx-3">
            <TouchableOpacity
              className="bg-naranja rounded-full"
              onPress={() => setHealth.setHealthOkWithChildren(true)}
            >
              <Text className="font-poppinsBold text-center text-white">
                Si
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-1 mx-3">
            <TouchableOpacity
              className="bg-naranja rounded-full"
              onPress={() => setHealth.setHealthOkWithChildren(false)}
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
          onPress={() => setSteps(3)}
          colorButton="bg-black"
          colorText="text-white"
          ancho="w-40"
          alto="h-11"
          textSize="text-base"
        />
        <Button
          title="Continuar"
          onPress={Create}
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
