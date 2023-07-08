import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import dog1 from '../../../images/dog1.png';

const MiCalendario = () => {
  const navigation = useNavigation();
  return (
    <View className="w-screen h-screen">
      <View className="flex flex-row justify-start items-center p-2 h-fit bg-slate-300">
        <TouchableOpacity onPress={() => navigation.goBack()} className="m-3">
          <Icon name="arrow-left" size={32} color="black" />
        </TouchableOpacity>
        <Text className="text-base font-poppins ml-4">Atrás</Text>
      </View>
      <ScrollView>
        <View className="m-4">
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
        <View>
            {/* <Calendar /> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default MiCalendario;
