import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Button from '../Buttons/Button';
import ButtonWithImage from '../Buttons/ButtonWithImage';
import leftIcon from '../../../images/leftIcon.png';
import editIcon from '../../../images/iconos/editIcon.png';

export default function PetProfile({ route }) {
  const { pet } = route.params;
  return (
    <>
      <View className="flex ">
        <View className="flex flex-row items-center my-5 ml-4">
          <TouchableOpacity>
            <Image source={leftIcon} className="w-4 h-4" />
          </TouchableOpacity>
          <View className="flex-1 justify-center ml-3">
            <Text className=" font-poppinsBold text-xs">volver a mascotas</Text>
          </View>
          <ButtonWithImage title="Editar" image={editIcon} imageClasses="w-3 h-3 ml-1 mt-0.5" onPress={() => navigation.navigate('Login')} colorButton="bg-naranja" colorText="text-white" ancho="w-16" alto="h-5" textSize="text-xs" margins="mr-3" />
        </View>
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
          <View className="h-80">
            <Text className="mt-20 ml-20 font-poppinsBold">¡Hola! Me llamo {pet.name}</Text>
            <Text className="ml-16 font-poppins">Especie | Raza | Edad | Peso Kg</Text>
            <Button title="Perfil de Socialpaws" colorButton="bg-naranja" colorText="text-white" ancho="w-48" alto="h-8" textFont="font-poppins" otrosButton="mx-20 mt-4" />
            <Text className="mx-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed posuere quam. Morbi molestie bibendum orci, ut dignissim odio auctor sed. Quisque condimentum magna ut sapien elementum iaculis. Maecenas eleifend velit ut convallis blandit.</Text>
            <View className="flex">
              {/*  Sección de esta castrado etc, 5 partes cada uno con la pregunta en negro y respuesta en naranja */}
              <View className="flex flex-row mx-10">
                <View className="bg-black rounded-full">
                  <Text className="text-white">Está castrado o esterilizado</Text>
                </View>
                <Text className="ml-10 text-white bg-naranja rounded-full">SI / NO</Text>
              </View>
              {/* Está castrado? Si No */}
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
