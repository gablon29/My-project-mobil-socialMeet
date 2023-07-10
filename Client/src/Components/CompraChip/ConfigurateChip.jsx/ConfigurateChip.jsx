import React, { useState } from "react";
import { ScrollView, Text, View, Image, FlatList, TouchableOpacity, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Buttons/Button";
import CreatePet from "../../CreatePet/CreatePet";
import { useAuth } from "../../../CustomHooks/useAuth";
import { addCart, setErrorCart, setLoadingCart } from "../../../Redux/ReducerCart";
import { getChip } from "../../../metodos/getStripeMetodos";
import AddPet from "../../Pets/Create/AddPet";

export const ConfigurateChip = ({ navigation }) => {
  const { userPets } = useSelector((state) => state.ReducerPets);



  if (!userPets.length) {
    return (
      <ScrollView>
        <View className="flex items-center">
          <View className="flex items-center">
            <Text className="text-xl font-poppinsBold text-black mt-12">
             ¡Ups! Vemos que aún no tienes mascotas
            </Text>
            <Text className="text-xs font-poppins text-black mt-12 ml-4 mr-4">
              Agrega una mascota a tu cuenta para configurar tu chip
            </Text>
          </View>
          <View className="mt-1">
          <TouchableOpacity className="w-64 h-12 mx-auto rounded-xl bg-naranja justify-center items-center my-4" onPress={navigation.navigate("AddPet")} >
            <Text className="text-sm text-center text-white font-poppinsSemiBold">Agregar nueva mascota</Text>
          </TouchableOpacity>       
             </View>
        </View>
      </ScrollView>
    );
  }
  const { email, setEmail, firstName, setFirstName, phone, setPhone, address, setAddress, informacion, setInformacion} = useAuth();

const [petSelect, setPetSelect] = useState("")  
const dispatch = useDispatch()
  const addToCart = () =>{
    ChipConfiguration ={
        pet: petSelect,
        email: email,
        telefono: phone,
        veterinarioName: firstName,
        veterinarioAdress: address,
        informacion: informacion
    }
    // if(pet && email && telefono && veterinarioName && veterinarioAdress) {
        getChip({
            reg: "price_1NQutGD6q36zl0IbXT9cRqri", //le pasamos el nombre del producto
            loading: (v) => dispatch(setLoadingCart(v)),
            error: (msg) => dispatch(setErrorCart(msg)),
            success: async (res) => {
              dispatch(addCart(res, ChipConfiguration))
              navigation.navigate('Checkout');
            }
            ,
          });
        
  }
const {cart} = useSelector((state) => state.ReducerCart)
  return (
    <>
      <View className="flex items-center">
        <ScrollView>
          <Text className="text-xl font-poppinsBold text-black mt-12 ml-15 mr-15 text-center">
            Selecciona la mascota a la que va asociado este Chip
          </Text>
          <View>
            <FlatList
              data={userPets}
              keyExtractor={(item, index) => index.toString()}
              numColumns={3}
              contentContainerStyle={{ justifyContent: "center" }}
              renderItem={({ item }) => (
                <View style={{ marginTop: 8, marginLeft: 10, marginRight: 10, marginTop: 15 }}>
                    <TouchableOpacity onPress={() => setPetSelect(item.id)}>
                  <Image
                    source={{ uri: item.coverImage }}
                    style={{ height: 80, width: 80, borderRadius: 80, marginLeft: 6, marginTop: 15 }}
                    resizeMode="contain"
                  />
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>

          <View className="flex items-center">
          <Text className="text-xl font-poppinsBold text-black mt-12 ml-26 mr-26 text-center">
          Datos de contacto de {'\n'}  emergencia
          </Text>
          </View>
          <View>
          <Text className="font-poppinsBold">Teléfono</Text>
          <TextInput placeholder="" value={phone} onChangeText={(text) => setPhone(text)} className="w-full rounded-full bg-gris h-8 px-4 mb-4" />
          <Text className="font-poppinsBold">Email</Text>
          <TextInput placeholder="" value={email} onChangeText={(text) => setEmail(text)} className="w-full rounded-full bg-gris h-8 px-4 mb-4" />
          </View>
          <View className="ml-12 mr-12">
          <Text className="text-xl font-poppinsBold text-black  mr-26 text-center">
          ¿Cuál es su centro veterinario habitual?
          </Text>
          </View>

          <View className="mt-7">
          <Text className="font-poppinsBold">Nombre de la clínica </Text>
          <TextInput placeholder="" value={firstName} onChangeText={(text) => setFirstName(text)} className="w-full rounded-full bg-gris h-8 px-4 mb-4" />
          <Text className="font-poppinsBold">Dirección de la clínica</Text>
          <TextInput placeholder="" value={address} onChangeText={(text) => setAddress(text)} className="w-full rounded-full bg-gris h-8 px-4 mb-4" />
          <View className="ml-12 mr-12">
          <Text className="text-xl font-poppinsBold text-black mt-12 ml-26 mr-26 text-center">
          ¿Alguna información importante a tener en cuenta?
          </Text>
          <Text className="text-md font-poppins  mt-2 ml-26 mr-26 text-center">
          Medicamentos, enfermedades, dolencias... 
          </Text>
          </View>
          <TextInput placeholder="" value={address} onChangeText={(text) => setAddress(text)} className="w-full rounded-lg bg-gris h-28 px-4 mb-4 mt-5" />
          </View>
          <View className="mt-5">

          <TouchableOpacity className="w-64 h-12 mx-auto rounded-xl bg-naranja justify-center items-center my-4" onPress={addToCart} >
            <Text className="text-sm text-center text-white font-poppinsSemiBold">Actualizar datos</Text>
          </TouchableOpacity>
          
                    </View>
        </ScrollView>
     
      </View>
     
              </>
  );
};
