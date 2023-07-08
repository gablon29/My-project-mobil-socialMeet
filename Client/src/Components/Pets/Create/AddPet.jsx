import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AddPet = () => {
  const [render, setRender] = useState(1);

  const PantallasRender = () => {
    return null;
  };

  return (
    <View className="w-screen h-screen bg-white">
      <View className="flex flex-row justify-between items-center px-2 pt-2 h-fit">
        <TouchableOpacity onPress={() => /* navigation.goBack() */ console.log('FUNCIONALIDAD PENDIENTE')} className="m-2">
          <Icon name="arrow-left" size={40} color="black" />
        </TouchableOpacity>
        <Text className="text-base font-poppins mr-4">1/12</Text>
      </View>
      <View className="flex flex-1 h-3 mx-4">
        <View className="bg-naranja w-full h-2 rounded-full mb-4"></View>
        <View>
          <ScrollView></ScrollView>
        </View>
        <TouchableOpacity className="w-64 h-12 mx-auto rounded-xl bg-naranja justify-center items-center" onPress={() => {}}>
          <Text className="text-sm text-center text-white font-poppinsSemiBold">Siguiente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddPet;
