import { ScrollView, TextInput, View, Text } from "react-native";
import Button from "../Buttons/ButtonCuston";
import React, { useState } from "react";
import { addAdress } from "../../metodos/authMetodos";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setErrorAuth, setLoadingAuth, userRefresh } from "../../Redux/ReducerAuth";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const AddNewAddress = () => {
  const [addresses, setAddresses] = useState({
    address: "",
    number: "",
    addressProvince: "",
    location: "",
    addressZipCode: "",
  });

const navigation = useNavigation()
  const labels = [
    { label: "Calle", key: "address" },
    { label: "Número/Piso/Portal", key: "number" },
    { label: "Provincia", key: "addressProvince" },
    { label: "Localidad", key: "location" },
    { label: "Código Postal", key: "addressZipCode" },
  ];

  const handleChange = (key, value) => {
    setAddresses((prevAddresses) => ({
      ...prevAddresses,
      [key]: value,
    }));
  };
  
const dispatch = useDispatch()

const agregarDireccion = async() => {
   let token = await  AsyncStorage.getItem("Token")
    addAdress({
        addresses,
        token,
        succes: (v) => {dispatch(userRefresh(v), navigation.navigate("Profile"))},
        loading: (s) => {dispatch(setLoadingAuth(s))},
        error: (e) => {dispatch(setErrorAuth(e))}
    })
}

  const renderInputs = ({ input, index }) => {
    return (
      <View key={index} className="mb-7">
        <Text className="text-base font-medium left-5">{input.label}</Text>
        <TextInput
          className="bg-gris rounded-full p-3 shadow-xl shadow-black"
          value={addresses[input.key]} // Asigna el valor del estado local al input
          onChangeText={(value) => handleChange(input.key, value)} // Maneja el cambio de texto en el input
        />
      </View>
    );
  };

  return (
    <ScrollView className="bg-white">
      <View className="w-screen h-full items-center mt-10">
        <Text className="text-2xl font-bold font-poppins">Nueva dirección</Text>
        <View className="w-10/12 mt-10">
          {labels.map((input, index) => renderInputs({ input, index }))}
        </View>
        <Button
        onPress={agregarDireccion}
          title="Agregar dirección"
          buttonClass="rounded-full bg-black w-8/12 h-14 my-3 justify-center"
          titleClass="text-white text-center text-base font-semibold"
        />
      </View>
    </ScrollView>
  );
};

export default AddNewAddress;