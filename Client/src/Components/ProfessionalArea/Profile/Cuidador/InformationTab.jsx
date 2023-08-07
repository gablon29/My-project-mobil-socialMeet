import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import perro from '../../../../../images/especies/ic_perro.png';
import gato from '../../../../../images/especies/ic_gato.png';
import ave from '../../../../../images/especies/ic_ave.png';
import reptil from '../../../../../images/especies/ic_reptil.png';
import pez from '../../../../../images/especies/ic_pez.png';
import conejo from '../../../../../images/especies/conejo.png';
import ardilla from '../../../../../images/especies/ardilla.png';
import roedor from '../../../../../images/especies/ic_roedor.png';

const InformationTab = () => {
  const mascotas = [
    { name: 'Perro', img: perro },
    { name: 'Gato', img: gato },
    { name: 'Pez', img: pez },
    { name: 'Perro', img: perro },
    { name: 'Gato', img: gato },
    // { name: 'Pez', img: pez },
  ];

  const nums = [1, 2, 3, 4, 5];

  const check = (
    <View className="bg-green-600 w-5 h-5 rounded-full items-center justify-center">
      <Text className="font-bold text-white text-center">✓</Text>
    </View>
  );
	const not = (
		<View className="relative bg-red-600 w-5 h-5 rounded-full items-center justify-center">
			<Text className="absolute top-[-1px] font-bold text-white">x</Text>
		</View>
	);

	
  return (
    <View className="flex flex-col items-start w-screen">
      <View className="w-full">
        <Text className="font-poppins text-base text-left font-bold mb-5 px-4">¿Qué mascotas cuido?</Text>
        <View className="flex flex-row flex-wrap justify-center">
          {mascotas.map((elem, _idx) => (
            <View key={_idx} className="justify-start items-center mx-3 mb-2">
              <View className="w-20 h-20 bg-new rounded-xl justify-center items-center">
                <Image source={elem.img} className="h-14 w-14" resizeMode="contain" />
              </View>
              <Text className="font-poppins text-xs text-center font-semibold mt-1">{elem.name}</Text>
            </View>
          ))}
        </View>
      </View>

      <View className="w-full mt-10">
        <Text className="font-poppins text-base text-left font-bold mb-5 px-4">Aquí cuidaré de tu mascota</Text>
        <View className="flex flex-row flex-wrap justify-center">
          {nums.map((elem, _idx) => (
            <View key={_idx} className="justify-start items-center mx-1">
              <View className="w-24 h-24 bg-new rounded-xl justify-center items-center">
                <Image source={elem.img} className="h-14 w-14" resizeMode="contain" />
              </View>
              <Text className="font-poppins text-xs text-center font-bold mt-1">{elem.name}</Text>
            </View>
          ))}
        </View>
      </View>

      <View className="w-screen mt-10">
        <Text className="font-poppins text-base text-left font-bold mb-5 px-4">Estas son mis mascotas</Text>
        <View className="flex flex-row flex-wrap gap-5 justify-center px-8">
          {nums.map((elem, _idx) => (
            <View key={_idx} className="bg-celeste rounded-xl w-full p-4 shadow-2xl">
              <View className="flex flex-row items-center mb-4">
                <Image source={pez} className="w-14 h-14 mr-4" />
                <View>
                  <Text className="text-white font-medium text-base">Perreke</Text>
                  <Text className="text-white font-normal text-sm">datos del animal</Text>
                </View>
              </View>
              <Text className="text-white text-xs text-justify leading-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eligendi in, officia praesentium enim sequi voluptatum sed laboriosam, qui ducimus veniam dignissimos, corrupti incidunt mollitia magni neque laborum? Laborum, illum.</Text>
            </View>
          ))}
        </View>
      </View>

      {/* infogeneral */}
      <View className="bg-new w-screen rounded-t-[50px] pt-6 px-6 mt-10">
        <Text className="font-bold text-lg mb-5">Información general</Text>
        <View className="flex flex-col space-y-6">
          <View className="flex flex-row items-center  gap-2">
            {check}
            <Text className="font-medium">Tengo jardín</Text>
          </View>
          <View className="flex flex-row items-center gap-2">
            {not}
            <Text className="font-medium">Tengo niños</Text>
          </View>
          <View className="flex flex-row items-center  gap-2">
            {check}
            <Text className="font-medium">Tengo mascotas</Text>
          </View>
          <View className="flex flex-row items-center  gap-2">
            {not}
            <Text className="font-medium">Tengo conocimientos en primeros auxilios</Text>
          </View>
          <View className="flex flex-row items-center  gap-2">
            {check}
            <Text className="font-medium">Puedo administrar medicamentos orales</Text>
          </View>
          <View className="flex flex-row items-center gap-2">
            {check}
            <Text className="font-medium text-sm">Puedo administrar medicamentos inyectables</Text>
          </View>

          <View className="flex flex-row items-center gap-2 mb-20">
            {not}
            <Text className="font-medium">Tengo experiencia con mascotas mayores</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default InformationTab;
