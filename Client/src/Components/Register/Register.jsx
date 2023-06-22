import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import logo from "../../../images/logo.png";

import Button from "../Buttons/Button";
import { Picker } from "@react-native-picker/picker";

const countryOptions = ["Argentina", "Chile", "España"];
const provinceOptions = ["Opción A", "Opción B", "Opción C"];

export default function Register({ navigation }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const handleRegister = () => {
    console.log("Nombre:", name);
    console.log("Apellidos:", lastName);
    console.log("Email:", email);
    console.log("Repetir Email:", confirmEmail);
    console.log("Teléfono:", phone);
    console.log("País:", country);
    console.log("Provincia:", province);
    console.log("Código Postal:", postalCode);
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image source={logo} />

      <View className="w-4/5">
        <Text className="font-poppins">Nombre</Text>
        <TextInput
          placeholder=""
          value={name}
          onChangeText={(text) => setName(text)}
          className="w-full rounded-full bg-gris h-8 px-4 mb-4"
        />

        <Text className="font-poppins">Apellidos</Text>
        <TextInput
          placeholder=""
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          className="w-full rounded-full bg-gris h-8 px-4 mb-4"
        />

        <Text className="font-poppins">Email</Text>
        <TextInput
          placeholder=""
          value={email}
          onChangeText={(text) => setEmail(text)}
          className="w-full rounded-full bg-gris h-8 px-4 mb-4"
        />

        <Text className="font-poppins">Repetir Email</Text>
        <TextInput
          placeholder=""
          value={confirmEmail}
          onChangeText={(text) => setConfirmEmail(text)}
          className="w-full rounded-full bg-gris h-8 px-4 mb-4"
        />

        <Text className="font-poppins">Teléfono</Text>
        <TextInput
          placeholder=""
          value={phone}
          onChangeText={(text) => setPhone(text)}
          className="w-full rounded-full bg-gris h-8 px-4 mb-4"
        />

        <Text className="font-poppins">País</Text>
        <View className="relative rounded-full bg-gris h-8  px-4 mb-4">
          <Picker
            selectedValue={country}
            onValueChange={(itemValue) => setCountry(itemValue)}
            className="w-full"
          >
            {countryOptions.map((option, index) => (
              <Picker.Item key={index} label={option} value={option} />
            ))}
          </Picker>
        </View>
        <View className="flex flex-row">
          <View className="flex-1 mr-2">
            <Text className="font-poppins">Provincia</Text>
            <View className="relative rounded-full bg-gris h-8 px-4 mb-4">
              <Picker
                selectedValue={province}
                onValueChange={(itemValue) => setProvince(itemValue)}
                className="w-full"
              >
                {provinceOptions.map((option, index) => (
                  <Picker.Item key={index} label={option} value={option} />
                ))}
              </Picker>
            </View>
          </View>
          <View className="flex-1 ml-2">
            <Text className="font-poppins">Código Postal</Text>
            <TextInput
              placeholder=""
              value={postalCode}
              onChangeText={(text) => setPostalCode(text)}
              className="w-full rounded-full bg-gris h-8 px-4 mb-4"
            />
          </View>
        </View>

        <View className="flex items-center mt-2">
          <Button
            title="Registrarme"
            onPress={handleRegister}
            colorButton="bg-naranja"
            colorText="text-white"
            ancho="w-40"
            alto="h-11"
            textSize="text-base"
          />
        </View>
      </View>
      <View className="my-4" />
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text className="font-poppins underline text-xs">
            ¿Ya tienes una cuenta? Inicia sesión
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
