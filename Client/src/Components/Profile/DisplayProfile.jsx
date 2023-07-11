import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import { useSelector } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import Button from '../Buttons/ButtonWithIcon';
import Icon from 'react-native-vector-icons/AntDesign';
import Email from 'react-native-vector-icons/Fontisto';
import Phone from 'react-native-vector-icons/Feather';
import Location from 'react-native-vector-icons/EvilIcons';
import Pencil from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';

const DisplayProfile = () => {
  const profile = useSelector((state) => state.ReducerAuth.profile);
  const navigation = useNavigation();
  return (
    <View className="w-screen h-full">
      <ScrollView>
        <View 
        style={{
                height: 550,
          }} className="relative mx-auto rounded-lg bg-black justify-center items-center mt-40 mb-10 w-11/12">
          <View className="bg-naranja w-32 h-32 rounded-full absolute -top-14">
            {/* <Image source={require("../../../images/dog1.png")} className="w-[100%] h-[100%] rounded-full"/> */}
          </View>
          <View className="border-b border-white flex-row pb-3 mb-5" style={{width: 330}}>
            <Icon name="idcard" size={32} color="white" className="pr-4" />
            {/* <TextInput bg placeholder="Nombre de la persona" className="placeholder-white text-lg" placeholderTextColor="white"/> */}
            <Text className="text-white text-lg">Nombre de la persona</Text>
          </View>
          <View className="border-b border-white flex-row pb-3 mb-5" style={{width: 330}}>
            <Email name="email" size={32} color="white" className="pr-4" />
            <Text className="text-white text-lg">Email de la persona</Text>
          </View>
          <View className="border-b border-white flex-row pb-3 mb-5" style={{width: 330}}>
            <Phone name="phone" size={32} color="white" className="pr-4" />
            <Text className="text-white text-lg">Télefono de la persona</Text>
          </View>
          <View className="border-b border-white flex-row pb-3 mb-5" style={{width: 330}}>
            <Location name="location" size={42} color="white" className="pr-4" />
            <Text className="text-white text-lg">País | Provincia</Text>
          </View>
          <View className="bg-naranja w-64 h-14 rounded-3xl  justify-center flex-row items-center absolute -bottom-5">
            <Button ancho="w-full" alto="h-full" Component={<Pencil name="pencil" size={22} color="white" className="pl-4"/>} onPress={() => {navigation.navigate("EditProfile")}} title="Editar Información" colorText="text-white" textSize="text-base" flexDirection="flex-row"/>
          </View>
        </View>
      </ScrollView>
      {/* <View className="relative mb-2">
        <Image source={{ uri: profile?.profilePic }} className="w-32 h-32 rounded-full bg-gray-400" />
        <TouchableOpacity className="absolute top-2 right-2 bg-blue-500 rounded-full p-2">
          <Feather name="edit" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Text className="text-xl font-bold mb-1">
        {profile.firstName} {profile.lastName}
      </Text>
      <Text className="text-gray-500 text-sm">{profile.province}</Text>

      <View className="flex items-center mt-8">
        <Button title="Mis mascotas" colorButton="bg-black" colorText="text-white" ancho="w-56" alto="h-10" textSize="text-xs" onPress={() => navigation.navigate('MyPets')} />
      </View>  */}
    </View>
  );
};

export default DisplayProfile;
