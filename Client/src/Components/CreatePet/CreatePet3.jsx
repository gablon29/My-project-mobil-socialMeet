import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import Button from "../Buttons/Button";

export const CreatePet3 = ({
  steps,
  setSteps,
  name,
  setName,
  weight,
  setWeight,
  age,
  setAge,
  breed,
  setBreed,
  sex,
  setSex,
}) => {
  const options = ["ShiTzu", "Salchicha", "Poodle"];

  const [years, setYears] = useState("");
  const [months, setMonths] = useState("");

  const handleAge = () => {
    const petAge = {
      years: years,
      months: months,
    };
    setAge(petAge);
  };

  return (
    <View className="w-screen h-screen">
      <Text className="font-poppinsBold text-center mt-16">
        ¿Cómo se llama tu mascota?
      </Text>
      <TextInput
        placeholder=""
        value={name}
        onChangeText={(text) => setName(text)}
        className="w-full rounded-full bg-gris h-10 px-4 mb-4"
      />
      <Text className="font-poppinsBold text-center">Peso en KG</Text>
      <TextInput
        placeholder=""
        value={weight}
        onChangeText={(text) => setWeight(text)}
        className="w-full rounded-full bg-gris h-10 px-4 mb-4"
      />
      <View className="flex flex-row">
        <View className="flex-1">
          <Text className="font-poppinsBold text-center">Edad (Años)</Text>
          <TextInput
            placeholder=""
            value={years}
            onChangeText={(text) => setYears(text)}
            className="w-full rounded-full bg-gris h-10 px-4 mb-4"
          />
        </View>
        <View className="flex-1">
          <Text className="font-poppinsBold text-center">Edad en (Meses)</Text>
          <TextInput
            placeholder=""
            value={months}
            onChangeText={(text) => setMonths(text)}
            className="w-full rounded-full bg-gris h-10 px-4 mb-4"
          />
        </View>
      </View>

      <Text className="font-poppinsBold text-center">Raza de la mascota</Text>
      <SelectList
        data={options}
        setSelected={setBreed}
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
            <TouchableOpacity
              onPress={() => setSex("Macho")}
              className="bg-gris rounded-full"
            >
              <Text className="font-poppinsBold text-center">Macho</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-1 mx-3">
            <TouchableOpacity
              onPress={() => setSex("Hembra")}
              className="bg-gris rounded-full"
            >
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
          onPress={() => {
            handleAge();
            console.log("edad", age);
            console.log("nombre", name);
            console.log("peso", weight);
            console.log("raza", breed);
            console.log("sexo", sex);
            setSteps(3);
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
