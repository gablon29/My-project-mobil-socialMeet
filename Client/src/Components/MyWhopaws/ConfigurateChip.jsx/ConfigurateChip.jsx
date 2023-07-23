import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { useSelector } from 'react-redux';
import { useAuth } from '../../../CustomHooks/useAuth';
import { editChip } from '../../../metodos/petsMetodos';


export const ConfigurateChip = ({ navigation, route }, props) => {
  const { userPets } = useSelector((state) => state.ReducerPets);


  const { email, setEmail, firstName, setFirstName, phone, setPhone, address, setAddress, informacion, setInformacion } = useAuth();
  const [image, setImage] = useState("")
  const [chipId, setChipId] = useState("")

  useEffect(() => 
  {

    let mascota = userPets.find((ele) => ele.id == route.params.id)
    setImage(mascota?.profilePic)
    setEmail(mascota?.chip.email),
    setFirstName(mascota?.chip.veterinaria)
    setPhone(mascota?.chip.telefono)
    setAddress(mascota?.chip.veterinariaAdress)
    setInformacion(mascota?.chip.information)
    setChipId(mascota.chip.id)
    console.log(route.params)
  },
  [])

  const edit = async () => {
    const chipData = {
      chipId: chipId,
      telefono: phone,
      email: email,
      veterinaria: firstName,
      veterinariaAdress: address,
      information: informacion,
      petId: route.params.id,
    };
    await editChip({
      chipData,
      loading: (v) => dispatch(setLoadingPets(v)),
      error: (msg) => dispatch(setErrorPets(msg)),
      success: (res) =>  navigation.navigate("Profile")
    });
  };


  return (
    <>
      <View className="flex items-center bg-white">
        <ScrollView>
          <Text className="text-xl font-poppinsBold text-black mt-12 ml-15 mr-15 text-center px-2">¿Quieres editar informacion{'\n'} de tu chip?</Text>
          <View className="flex flex-row flex-wrap justify-center my-4">

              <TouchableOpacity className="w-20 h-20 rounded-lg">
                <Image source={{ uri: image  }} style={{ height: 80, width: 80 }} resizeMode="contain" className="rounded-lg" />
              </TouchableOpacity>
          </View>
          <View>
          </View>

          <View className="flex items-center my-2">
            <Text className="text-xl font-poppinsBold text-black mt-12 ml-26 mr-26 text-center">Datos de contacto de {'\n'} emergencia</Text>
          </View>
          <View className="mx-2">
            <Text className="font-poppinsBold">Teléfono</Text>
            <TextInput placeholder="" value={phone} onChangeText={(text) => setPhone(text)} className=" w-full rounded-lg bg-gris h-8 px-4 mb-4 " />
            <Text className="font-poppinsBold">Email</Text>
            <TextInput placeholder="" value={email} onChangeText={(text) => setEmail(text)} className="w-full rounded-lg bg-gris h-8 px-4 mb-4" />
          </View>
          <View className="ml-12 mr-12">
            <Text className="text-xl font-poppinsBold text-black  mr-26 text-center">¿Cuál es su centro veterinario habitual?</Text>
          </View>

          <View className="mt-7  mx-2">
            <Text className="font-poppinsBold">Nombre de la clínica </Text>
            <TextInput placeholder="" value={firstName} onChangeText={(text) => setFirstName(text)} className="w-full rounded-lg bg-gris h-8 px-4 mb-4" />
            <Text className="font-poppinsBold">Dirección de la clínica</Text>
            <TextInput placeholder="" value={address} onChangeText={(text) => setAddress(text)} className="w-full rounded-lg bg-gris h-8 px-4 mb-4" />
            <View className="">
              <Text className="text-xl font-poppinsBold text-black mt-12 text-center">¿Alguna información importante a tener en cuenta?</Text>
              <Text className="text-md font-poppins  mt-2 ml-26 mr-26 text-center">Medicamentos, enfermedades, dolencias...</Text>
            </View>
            <TextInput placeholder="" value={informacion} onChangeText={(text) => setInformacion(text)} className="w-full rounded-lg bg-gris h-28 px-4 mb-4 mt-5" />
          </View>
          <View className="mt-5">
            <TouchableOpacity className="w-64 h-12 mx-auto rounded-xl bg-naranja justify-center items-center my-4" onPress={() =>edit()}>
              <Text className="text-sm text-center text-white font-poppinsSemiBold">Actualizar datos</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
};
