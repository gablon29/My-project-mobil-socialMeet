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
    <View className="items-center justify-center">
      <Text className="text-base text-center font-poppinsBold mt-32">
        ¿Qué mascota es?
      </Text>
      <View className="flex-row mt-4">
        <View className="w-24 h-24 bg-orange-500 rounded-2xl mx-2">
          <Image source={dog} className="w-14 h-14 mx-auto my-2 " />
          <Text className="text-center text-white font-poppinsBold">Perro</Text>
        </View>
        <View className="w-24 h-24 bg-orange-500 rounded-2xl mx-2">
          <Image source={cat} className="w-14 h-14 mx-auto my-2" />
          <Text className="text-center text-white font-poppinsBold">Gato</Text>
        </View>
        <View className="w-24 h-24 bg-orange-500 rounded-2xl mx-2">
          <Image source={other} className="w-14 h-14 mx-auto my-2" />
          <Text className="text-center text-white font-poppinsBold">Otro</Text>
        </View>
      </View>
      <Text className="text-center mt-8 font-poppinsBold">
        Especifica qué animal es:
      </Text>
      <View className="w-60 bg-gray-300 rounded-full">
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