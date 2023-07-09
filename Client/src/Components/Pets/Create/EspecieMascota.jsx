import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import perro from '../../../../images/especies/ic_perro.png';
import gato from '../../../../images/especies/ic_gato.png';
import ave from '../../../../images/especies/ic_ave.png';
import reptil from '../../../../images/especies/ic_reptil.png';
import pez from '../../../../images/especies/ic_pez.png';
import roedor from '../../../../images/especies/ic_roedor.png';

const EspecieMascota = () => {
  return (
      <View className="justify-center items-center my-7">
        <Text className="text-xl text-center font-poppinsBold w-56 mb-7">¿Cuál es su especie?</Text>
        <View className="flex flex-row gap-4">
          <TouchableOpacity>
            <View className="w-20 h-20 bg-naranja rounded-xl shadow-xl justify-center items-center">
              <Image source={perro} className="h-16 w-16" resizeMode="contain" />
            </View>
            <Text className="text-center font-poppins text-lg">Perro</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="w-20 h-20 bg-naranja rounded-xl shadow-xl justify-center items-center">
              <Image source={gato} className="h-16 w-16" resizeMode="contain" />
            </View>
            <Text className="text-center font-poppins text-lg">Gato</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="w-20 h-20 bg-naranja rounded-xl shadow-xl justify-center items-center">
              <Image source={ave} className="h-16 w-16" resizeMode="contain" />
            </View>
            <Text className="text-center font-poppins text-lg">Ave</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row gap-4 mt-4">
          <TouchableOpacity>
            <View className="w-20 h-20 bg-naranja rounded-xl shadow-xl justify-center items-center">
              <Image source={reptil} className="h-16 w-16" resizeMode="contain" />
            </View>
            <Text className="text-center font-poppins text-lg">Reptil</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="w-20 h-20 bg-naranja rounded-xl shadow-xl justify-center items-center">
              <Image source={pez} className="h-16 w-16" resizeMode="contain" />
            </View>
            <Text className="text-center font-poppins text-lg">Pez</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View className="w-20 h-20 bg-naranja rounded-xl shadow-xl justify-center items-center">
              <Image source={roedor} className="h-16 w-16" resizeMode="contain" />
            </View>
            <Text className="text-center font-poppins text-lg">Roedor</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default EspecieMascota;
