import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NombreMascota from './NombreMascota';
import EdadMascota from './EdadMascota';
import EspecieMascota from './EspecieMascota';
import RazaMascota from './RazaMascota';
import SexoMascota from './SexoMascota';
import PesoMascota from './PesoMascota';
import CastradoMascota_1 from './CastradoMascota_1';
import CastradoMascota_2 from './CastradoMascota_2';
import CastradoMascota_3 from './CastradoMascota_3';
import CastradoMascota_4 from './CastradoMascota_4';
import CastradoMascota_5 from './CastradoMascota_5';
import ImagenMascota from './ImagenMascota';
import { useNavigation } from '@react-navigation/native';

const AddPet = () => {
  const navigation = useNavigation();
  const [render, setRender] = useState(1);

  const PantallasRender = () => {
    switch (render) {
      case 1:
        return <NombreMascota />;
      case 2:
        return <EspecieMascota />;
      case 3:
        return <RazaMascota />;
      case 4:
        return <SexoMascota />;
      case 5:
        return <EdadMascota />;
      case 6:
        return <PesoMascota />;
      case 7:
        return <CastradoMascota_1 />;
      case 8:
        return <CastradoMascota_2 />;
      case 9:
        return <CastradoMascota_3 />;
      case 10:
        return <CastradoMascota_4 />;
      case 11:
        return <CastradoMascota_5 />;
      case 12:
        return <ImagenMascota />;
      default:
        return (
          <View>
            <Text>Vista No Encontrada</Text>
          </View>
        );
    }
  };

  const NextPantalla = () => {
    setRender(render + 1);
  };

  const PrevPantalla = () => {
    if (render <= 1) {
      navigation.goBack();
    } else {
      setRender(render - 1);
    }
  };

  return (
    <View className="w-screen h-screen bg-white">
      <View className="flex flex-row justify-between items-center px-2 pt-2 h-fit">
        <TouchableOpacity onPress={PrevPantalla} className="m-2">
          <Icon name="arrow-left" size={40} color="black" />
        </TouchableOpacity>
        <Text className="text-base font-poppins mr-4">{render}/12</Text>
      </View>
      <View className="flex flex-1 h-3 mx-4">
        <View className="bg-slate-400 w-full h-2 rounded-full mb-4">
          <View className={`bg-naranja w-${render}/12 h-2 rounded-full mb-4`}></View>
        </View>
        <View>
          <ScrollView>
            <PantallasRender />
          </ScrollView>
        </View>
        <TouchableOpacity className="w-64 h-12 mx-auto rounded-xl bg-naranja justify-center items-center" onPress={NextPantalla}>
          <Text className="text-sm text-center text-white font-poppinsSemiBold">Siguiente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddPet;
