import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import logo from "../../../images/logo.png";

import Button from "../Buttons/Button";
import { Picker } from "@react-native-picker/picker";
import countrys from "../../../extras/countrys.json"

export default function RegisterStep1(props, { navigation  }) {

const {
  email,  setEmail, 
  password,  setPassword,
  firstName,setFirstName,
  lastName,setLastName,
  phone,  setPhone,
  country, setCountry,
  province, setProvince,
  city, setCity,
  zipcode,setZipcode,
  address,setAddress,
  handleRegister,
  confirmEmail, setConfirmEmail,
  setRegisterSteps
} = props

const [countryOptions, setCountryOptions] = useState([]);
const [provinceOptions, setProvinceOptions] = useState([]);


useEffect(() => {
  const countries = countrys.map((country) => country.name);
  setCountryOptions(countries);
}, []);

useEffect(() => {
  if (country) {
    // Obtener provincias del país seleccionado en el JSON importado
    const selectedCountry = countrys.find((c) => c.name === country);
    if (selectedCountry) {
      const provinces = selectedCountry.provinces;
      setProvinceOptions(provinces);
    }
  }
}, [country]);

  return (
    
    <View className="flex-1 items-center justify-center bg-white">
      <Image source={logo} />

      <View className="w-4/5">
        <Text className="font-poppins">Nombre</Text>
        <TextInput
          placeholder=""
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
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
            <View className="relative rounded-full bg-gris h-8 px-4 mb-4 text-center">
              <Picker
                selectedValue={province}
                onValueChange={(itemValue) => setProvince(itemValue)}
                className="w-full pù"
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
              value={zipcode}
              onChangeText={(text) => setZipcode(text)}
              className="w-full rounded-full bg-gris h-8 px-4 mb-4"
            />
          </View>
        </View>

        <View className="flex items-center mt-2">
          <Button
            title="Siguiente"
            onPress={() => setRegisterSteps(1)}
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
