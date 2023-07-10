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
import Slider from '@react-native-community/slider';
import { usePets } from '../../../CustomHooks/usePets';

const AddPet = () => {
  const navigation = useNavigation();
  const [render, setRender] = useState(1);
  const { pet, setName, setSpecie, setBreed, setWeight, setSex, setAgeYears, setAgeMonths, setHealthCastrado, setHealthMicrochip, setHealthOkWithDogs, setHealthOkWithCats, setHealthOkWithChildren, setProfilePic } = usePets();
  const [valida, setValida] = useState(true)

  const NextPantalla = () => {
    setValida(true)
    setRender(render + 1);
  };

  const PrevPantalla = () => {
    if (render <= 1) {
      navigation.goBack();
    } else {
      setValida(false)
      setRender(render - 1);
    }
  };

  return (
    <>
      <View className="flex flex-1 w-screen h-screen bg-white">
        {console.log(valida, pet)}
        <View className="flex flex-row justify-between items-center px-2 pt-2 h-fit">
          <TouchableOpacity onPress={PrevPantalla} className="m-2">
            <Icon name="arrow-left" size={40} color="black" />
          </TouchableOpacity>
          <Text className="text-base font-poppins mr-4">{render}/12</Text>
        </View>
        <Slider
          className="w-full"
          thumbTintColor="transparent"
          minimumValue={0}
          maximumValue={12}
          value={render}
          // onValueChange={(value) => console.log(value)}
          minimumTrackTintColor="#FB6726"
        />
        <View className="flex flex-1 h-3 mx-4">
          <ScrollView>
            {render === 1 && <NombreMascota setName={setName} name={pet.name} setValida={setValida} />}
            {render === 2 && <EspecieMascota setSpecie={setSpecie} specie={pet.specie} setValida={setValida} />}
            {render === 3 && <RazaMascota setBreed={setBreed} breed={pet.breed} setValida={setValida} />}
            {render === 4 && <SexoMascota setSex={setSex} sex={pet.sex} setValida={setValida} />}
            {render === 5 && <EdadMascota />}
            {render === 6 && <PesoMascota />}
            {render === 7 && <CastradoMascota_1 />}
            {render === 8 && <CastradoMascota_2 />}
            {render === 9 && <CastradoMascota_3 />}
            {render === 10 && <CastradoMascota_4 />}
            {render === 11 && <CastradoMascota_5 />}
            {render === 12 && <ImagenMascota />}
            {render > 12 && (
              <View>
                <Text>Vista No Encontrada</Text>
              </View>
            )}
          </ScrollView>
          <TouchableOpacity className={`w-64 h-12 mx-auto rounded-xl ${valida ? 'bg-gray-400' : 'bg-naranja' } justify-center items-center my-4`} onPress={NextPantalla} disabled={valida}>
            <Text className="text-sm text-center text-white font-poppinsSemiBold">{render == 12 ? 'Finalizar' : 'Siguiente'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default AddPet;
