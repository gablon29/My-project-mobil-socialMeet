import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Button from '../Buttons/Button';
import ButtonWithImage from '../Buttons/ButtonWithImage';
import HeaderLeftArrow from '../Header/HeaderLeftArrow';

export default function PetProfile({ route }) {
  const { pet } = route.params;
  return (
    <>
      <View className="flex ">
        <HeaderLeftArrow text="volver a mascotas" textSize="text-sm" font="font-poppins" imagenMargen="ml-0.5" /* goBack={handleGoBack} */ />
        <Button text="Editar" colorButton="bg-naranja" ancho="w-16" alto="h-5" />
      </View>
      <ScrollView className="w-full h-full">
        <View className="w-full h-full">
          <View className="h-56 bg-naranja">
            <Image
              source={{ uri: pet.profilePic || 'https://www.shutterstock.com/image-photo/manipulated-image-very-long-dachshund-260nw-38764216.jpg' }}
              style={{
                width: 120,
                height: 120,
              }}
              className="absolute top-3/4 left-[34%] rounded-full"
            />
          </View>
          <View className="h-40"></View>
        </View>
      </ScrollView>
    </>
  );
}
