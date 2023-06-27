import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import Button from "../Buttons/Button";

export const CreatePet3 = ({ steps, setSteps }) => {
  const options = ["ShiTzu, Salchicha, Poodle"];
  const [breedType, setBreedType] = useState("");
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [years, setYears] = useState("");
  const [months, setMonths] = useState("");
  return (
    <View className="w-screen h-screen">
      <Text className="font-poppinsBold text-center mt-16">
        ¿Cómo se llama tu mascota?
      </Text>
      <TextInput
        placeholder=""
        secureTextEntry={true}
        value={name}
        onChangeText={(text) => setName(text)}
        className="w-full rounded-full bg-gris h-10 px-4 mb-4" //color custom
      />
      <Text className="font-poppinsBold text-center">Peso en KG</Text>
      <TextInput
        placeholder=""
        secureTextEntry={true}
        value={weight}
        onChangeText={(text) => setWeight(text)}
        className="w-full rounded-full bg-gris h-10 px-4 mb-4" //color custom
      />
      <View className="flex flex-row">
        <View className="flex-1">
          <Text className="font-poppinsBold text-center">Edad (Años)</Text>
          <TextInput
            placeholder=""
            secureTextEntry={true}
            value={years}
            onChangeText={(text) => setYears(text)}
            className="w-full rounded-full bg-gris h-10 px-4 mb-4" //color custom
          />
        </View>
        <View className="flex-1">
          <Text className="font-poppinsBold text-center">Edad en (Meses)</Text>
          <TextInput
            placeholder=""
            secureTextEntry={true}
            value={months}
            onChangeText={(text) => setMonths(text)}
            className="w-full rounded-full bg-gris h-10 px-4 mb-4" //color custom
          />
        </View>
      </View>

      <Text className="font-poppinsBold text-center">Raza de la mascota</Text>
      <SelectList
        data={options}
        setSelected={setBreedType}
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
      <View className="flex mt-3">
        <Text className="font-poppinsBold text-center">Sexo</Text>
        <View className="flex flex-row">
          <View className="flex-1 mx-3">
            <TouchableOpacity className="bg-gris rounded-full">
              <Text className="font-poppinsBold text-center">Macho</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-1 mx-3">
            <TouchableOpacity className="bg-gris rounded-full">
              <Text className="font-poppinsBold text-center">Hembra</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="flex flex-row justify-between mx-6 mt-48">
        <Button
          title="Atrás"
          onPress={() => setSteps(1)}
          colorButton="bg-black"
          colorText="text-white"
          ancho="w-40"
          alto="h-11"
          textSize="text-base"
        />
        <Button
          title="Continuar"
          onPress={() => setSteps(3)}
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
