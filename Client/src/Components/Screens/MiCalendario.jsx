import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import dog1 from '../../../images/dog1.png';
import Calendario from "../ProfessionalArea/Profile/CalendarioCitas/Calendario"

const MiCalendario = () => {
  const navigation = useNavigation();

  return (
    <View className="w-screen h-screen bg-white">
      <View className="flex flex-row justify-start items-center p-2 mt-5 h-fit">
        <TouchableOpacity onPress={() => navigation.goBack()} className="m-3">
          <Icon name="arrow-left" size={32} color="black" />
        </TouchableOpacity>
        <Text className="text-base font-poppins ml-4">Atrás</Text>
      </View>
      <ScrollView>
        <View className="w-screen items-center pb-20">
          <View className="pl-4 m-4 w-full">
            <Text className="text-sm font-poppinsBold">Selecciona la Mascota</Text>
            <View className="flex flex-row flex-wrap gap-3">
              <TouchableOpacity className="rounded-full">
                <View className="border-2 p-1 border-sky-600 rounded-full">
                  <Image source={dog1} className="h-16 w-16 rounded-full" resizeMode="contain" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="rounded-full">
                <View className="p-1 border-sky-600 rounded-full">
                  <Image source={dog1} className="h-16 w-16 rounded-full" resizeMode="contain" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity className="rounded-full">
                <View className="p-1 border-sky-600 rounded-full">
                  <Image source={dog1} className="h-16 w-16 rounded-full" resizeMode="contain" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Calendario myCalender={true}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default MiCalendario;
