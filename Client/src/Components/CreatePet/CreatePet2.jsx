import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import dog from "../../../images/iconos/dog.png";
import cat from "../../../images/iconos/cat.png";
import other from "../../../images/iconos/other.png";

const options = [{ name: "Tortuga" }, { name: "Ave" }, { name: "Conejo" }];

export const CreatePet2 = ({ steps, setSteps }) => {
  const [animalType, setAnimalType] = useState("");

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl text-center">¿Qué mascota es?</Text>
      <View className="flex-row mt-4">
        <View className="flex-1 items-center">
          <View className="w-24 h-24 bg-orange-500 rounded-full">
            <Image source={dog} className="w-20 h-20 mx-auto my-2" />
          </View>
          <Text className="text-center mt-2">Perro</Text>
        </View>
        <View className="flex-1 items-center">
          <View className="w-24 h-24 bg-orange-500 rounded-full">
            <Image source={cat} className="w-20 h-20 mx-auto my-2" />
          </View>
          <Text className="text-center mt-2">Gato</Text>
        </View>
        <View className="flex-1 items-center">
          <View className="w-24 h-24 bg-orange-500 rounded-full">
            <Image source={other} className="w-20 h-20 mx-auto my-2" />
          </View>
          <Text className="text-center mt-2">Otro</Text>
        </View>
      </View>
      <Text className="text-center mt-4">Especifica qué animal es:</Text>
      <View className="w-60 bg-gray-300 mt-2">
        <SelectList
          data={options}
          setSelected={setAnimalType}
          placeholder="Seleccionar"
          search={false}
          fontFamily="Poppins"
          boxStyles={{
            backgroundColor: "#DADADA",
            borderRadius: 999,
            borderColor: "#DADADA",
          }}
          dropdownStyles={{ backgroundColor: "#DADADA" }}
        />
      </View>
    </View>
  );
};
