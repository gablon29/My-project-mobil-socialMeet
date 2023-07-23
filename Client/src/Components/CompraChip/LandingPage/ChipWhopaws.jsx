import React from 'react';
import Header from '../../Header/Header';
import { ScrollView, Image, View, Text, TouchableOpacity } from 'react-native';
import chiplanding from '../../../../images/chiplanding.png';
import batery from '../../../../images/iconos/batery.png';
import drop from '../../../../images/iconos/drop.png';
import feather from '../../../../images/iconos/feather.png';
import smartphone from '../../../../images/iconos/smartphone.png';
import detective from '../../../../images/detective.png';
import { NavigationAction, useNavigation } from '@react-navigation/native';
export const ChipWhopaws = () => {

  const navigation = useNavigation();
  return (
    <ScrollView>
      <View className="bg-white">
      <View className="flex items-center bg-white">
        <View className=" ">
          <Image className="object-fill" source={chiplanding} />
        </View>
        <Text className="text-2xl font-poppinsBold h-fit w-72 text-center text-naranja">Tu mascota siempre segura Whopaws</Text>
      </View>
      <View className="p-5 bg-white mb-4">
        <Text className="text-sm font-poppins text-black text-justify">Whopaws chip es un producto revolucionario para mantener a tu mascota segura y protegida. Se trata de un chip NFC de última generación que se encuentra dentro de una carcasa de plástico duro y resistente al agua, que se coloca fácilmente en el collar de tu mascota.</Text>
      </View>

      <View className="bg-white flex flex-row justify-center space-x-16 items-center h-24 ">
        <View className="flex items-center">
          <View bg-white className=" h-20 w-20 bg-naranja rounded-xl flex justify-center items-center">
            <Image source={batery} className="h-10 w-10" resizeMode="contain" />
          </View>
          <Text className="text-sm font-poppinsBold text-black ">Sin baterias</Text>
        </View>

        <View className="flex items-center bg-white">
          <View className=" h-20 w-20 bg-naranja rounded-xl flex justify-center items-center">
            <Image source={drop} className="h-10 w-10" resizeMode="contain" />
          </View>
          <Text className="text-sm font-poppinsBold text-black ">Resistente al agua</Text>
        </View>
      </View>
      <View className="flex flex-row justify-center bg-white space-x-16 items-center h-24  mt-8">
        <View className="flex items-center ">
          <View className=" h-20 w-20 bg-naranja rounded-xl flex justify-center items-center ml-6">
            <Image source={feather} className="h-10 w-10" resizeMode="contain" />
          </View>
          <Text className="text-sm font-poppinsBold text-black text-center">Peso muy lijero</Text>
        </View>
        <View className="flex items-center ">
          <View className=" h-20 w-20 bg-naranja rounded-xl flex justify-center items-center mr-4">
            <Image source={smartphone} className="h-10 w-10" resizeMode="contain" />
          </View>
          <Text className="text-sm font-poppinsBold text-black text-center">Cualquier dispositivo</Text>
        </View>
      </View>
      <View className="mt-12 justify-between rounded-xl bg-black p-4 mx-4 h-fit flex flex-row ml-8 mb-2">
        <Text className="text-white text-3xl font-poppinsBol ml-4 mt-1">14,99€</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')} className='bg-naranja rounded-xl py-2 px-4'>
          <Text className="text-white text-xl font-poppinsBol">Comprar</Text>
        </TouchableOpacity>
      </View>
      <View className="p-5">
        <Text className="text-sm font-poppins text-black text-justify">Este chip es ligero y no necesita batería, lo que lo convierte en una solución práctica y duradera. Además, funciona con cualquier dispositivo móvil, ya sea Android o iPhone.</Text>
      </View>
      <View className="flex items-center">
        <View className=" py-12">
          <Image className="object-fill" source={detective} />
        </View>
      </View>
      <View className="p-5">
        <Text className="text-sm font-poppins text-black text-justify">Si tu mascota se pierde, cualquier persona que la encuentre puede acercar su teléfono móvil al llavero Whopaws y escanear el chip NFC para acceder a toda la información importante de tu mascota y los datos de contacto de los dueños.</Text>
      </View>
      <View className="p-5">
        <Text className="text-sm font-poppins text-black text-justify">Con Whopaws, puedes estar seguro de que tu mascota siempre estará protegida y podrás encontrarla rápidamente en caso de que se pierda. Es la solución ideal para cualquier dueño responsable de mascotas que busca la mejor manera de garantizar la seguridad de su compañero peludo.</Text>
      </View>
      </View>
    </ScrollView>
  );
};
