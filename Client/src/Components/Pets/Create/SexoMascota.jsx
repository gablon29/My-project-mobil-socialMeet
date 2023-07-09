import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SexoMascota = () => {
  return (
    <View className="justify-center items-center my-7">
      <Text className="text-xl text-center font-poppinsBold w-48 mb-7">¿Cuál es su sexo?</Text>
      <View className="flex flex-row gap-4">
        <TouchableOpacity onPress={() => alert('no implementado')}>
          <View>
            <View className="w-24 h-24 bg-naranja rounded-full justify-center items-center">
              <View className="w-[90px] h-[90px] bg-naranja rounded-full border-4 border-white justify-center items-center">
                <Icon name="gender-male" size={60} color="white" />
              </View>
            </View>
            <Text className="text-center font-poppins text-lg">Macho</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('no implementado')}>
          <View>
            <View className="w-24 h-24 bg-white rounded-full justify-center items-center border border-gris">
              <View className="w-[90px] h-[90px] bg-white rounded-full border-4 border-white justify-center items-center">
                <Icon name="gender-female" size={60} color="gray" />
              </View>
            </View>
            <Text className="text-center font-poppins text-lg">Hembra</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SexoMascota;
