import React from 'react';
import Header from '../../Header/Header';
import { ScrollView, Image, View, Text, TouchableOpacity } from 'react-native';
import chiplanding from '../../../../images/chiplanding.png';
import batery from '../../../../images/iconos/batery.png';
import drop from '../../../../images/iconos/drop.png';
import feather from '../../../../images/iconos/feather.png';
import smartphone from '../../../../images/iconos/smartphone.png';
import detective from '../../../../images/detective.png';

export const LandingPage = () => {
  return (
    <ScrollView>
      <View className="flex items-center">
        <View className=" py-12">
          <Image className="object-fill" source={chiplanding} />
        </View>
        <View>
          <Text className="text-2xl font-poppinsBold text-naranja ">Tu mascota siempre {'\n'} segura Whopaws</Text>
        </View>
      </View>
      <View className="py-6">
        <Text className="text-sm font-poppins text-black leading-tight ml-4 mr-5">Whopaws chip es un producto revolucionario para mantener a tu mascota segura y protegida. Se trata de un chip NFC de última generación que se encuentra dentro de una carcasa de plástico duro y resistente al agua, que se coloca fácilmente en el collar de tu mascota.</Text>
      </View>

      <View className="flex flex-row justify-center space-x-16 items-center h-24 ">
      <View className="flex items-center">
        <View className=" h-20 w-20 bg-naranja rounded-full flex justify-center items-center">
          <Image source={batery} className="h-10 w-10" resizeMode="contain" />
        </View>
        <Text className="text-sm font-poppinsBold text-black ">Sin baterias</Text>
        </View>

        <View className="flex items-center">
        <View className=" h-20 w-20 bg-naranja rounded-full flex justify-center items-center">
          <Image source={drop} className="h-10 w-10" resizeMode="contain" />
        </View>
        <Text className="text-sm font-poppinsBold text-black ">Resistente al agua</Text>
        </View>
      </View>
      <View className="flex flex-row justify-center space-x-16 items-center h-24  mt-8">
      <View className="flex items-center ">
        <View className=" h-20 w-20 bg-naranja rounded-full flex justify-center items-center ml-6">
          <Image source={feather} className="h-10 w-10" resizeMode="contain" />
        </View>
        <Text className="text-sm font-poppinsBold text-black text-center">Peso muy lijero</Text>
        </View>
        <View className="flex items-center ">
        <View className=" h-20 w-20 bg-naranja rounded-full flex justify-center items-center mr-4">
          <Image source={smartphone} className="h-10 w-10" resizeMode="contain" />
        </View>
        <Text className="text-sm font-poppinsBold text-black text-center">Cualquier dispositivo</Text>
        </View>
      </View>
      <View className="mt-12 justify-between ">
      <View className=" ml-6 h-20 w-50 bg-black rounded-full flex justify-content  mr-6">
        <Text className="text-white ml-8 mt-5 text-3xl font-poppinsBol">14,99€</Text>
        <View className=" ml-40  h-10 w-48 bg-naranja rounded-full flex  items-center absolute mt-5 ">
            <TouchableOpacity onPress={() => console.log("comprame esta")}>
        <Text className="text-white text-xl font-poppinsBol mt-1">Comprar</Text>
        </TouchableOpacity>
</View>
        </View>
      </View>
      <View className="mt-16">
        <Text className="text-sm font-poppins text-black leading-tight ml-4 mr-5">Este chip es ligero y no necesita batería, lo que lo convierte en una solución práctica y duradera. Además, funciona con cualquier dispositivo móvil, ya sea Android o iPhone.</Text>
      </View>
      <View className="flex items-center">
        <View className=" py-12">
          <Image className="object-fill" source={detective} />
        </View>
        </View>
        <View className="mt-16">
        <Text className="text-sm font-poppins text-black leading-tight ml-4 mr-5">Si tu mascota se pierde, cualquier persona que la encuentre puede acercar su teléfono móvil al llavero Whopaws y escanear el chip NFC para acceder a toda la información importante de tu mascota y los datos de contacto de los dueños.</Text>
      </View>
      <View className="mt-16">
        <Text className="text-sm font-poppins text-black leading-tight ml-4 mr-5">Con Whopaws, puedes estar seguro de que tu mascota siempre estará protegida y podrás encontrarla rápidamente en caso de que se pierda. Es la solución ideal para cualquier dueño responsable de mascotas que busca la mejor manera de garantizar la seguridad de su compañero peludo.</Text>
      </View>
      <View className="mt-16">
      </View>

    </ScrollView>
  );
};
