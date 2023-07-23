import React, { useState } from 'react';
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from 'react-native';
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
import { suvirImagen, useSelectImagen } from '../../../CustomHooks/useImage';
import { CreatePetMethod } from '../../../metodos/petsMetodos';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorPets, setLoadingPets } from '../../../Redux/ReducerPets';
import MascotaCreada from './MascotaCreada';

const AddPet = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { loadingPets, errorPets, successPets } = useSelector((state) => state.ReducerPets);
  const [render, setRender] = useState(1);
  const { pet, setName, setSpecie, setBreed, setKilos, setGramos, setSex, setAgeYears, setAgeMonths, setHealthCastrado, setHealthMicrochip, setHealthOkWithDogs, setHealthOkWithCats, setHealthOkWithChildren, setProfilePic } = usePets();
  const [valida, setValida] = useState(true);
  const { selImg, setProfile } = useSelectImagen();
  const [creada, setCreada] = useState(false);

  const CrearPet = async () => {
    const linkImagen = await suvirImagen(selImg.profile);
    setProfilePic(linkImagen)
    pet.profilePic = linkImagen;
    await CreatePetMethod({
      pet,
      linkImagen,
      loading: (v) => dispatch(setLoadingPets(v)),
      error: (msg) => dispatch(setErrorPets(msg)),
      success: (res) =>  navigation.navigate("MascotaCreada")
    });
  };

  const NextPantalla = async () => {
    if (render === 12) {
      await CrearPet();
    }
    if(render !== 12){
    setRender(render + 1);
    Validaciones(render + 1);
  }
  };

  const PrevPantalla = () => {
    if (render <= 1) {
      navigation.goBack();
    } else {
      setRender(render - 1);
      Validaciones(render - 1);
    }
  };

  const Validaciones = (r) => {
    if (r == 1) setValida(!pet.name);
    if (r == 2) setValida(!pet.specie);
    if (r == 3) setValida(!pet.breed);
    if (r == 4) setValida(!pet.sex);
    if (r == 5) setValida(pet.age.years || pet.age.months ? false : true);
    if (r == 6) setValida(pet.age.years || pet.age.months ? false : true);
    if (r == 7) setValida(pet.health.castrado === true || pet.health.castrado === false ? false : true);
    if (r == 8) setValida(pet.health.microchip === true || pet.health.microchip === false ? false : true);
    if (r == 9) setValida(pet.health.okWithDogs === true || pet.health.okWithDogs === false ? false : true);
    if (r == 10) setValida(pet.health.okWithCats === true || pet.health.okWithCats === false ? false : true);
    if (r == 11) setValida(pet.health.okWithChildren === true || pet.health.okWithChildren === false ? false : true);
    // if (r == 12) setValida(!pet.name);
  };

  return (
    <>
      {loadingPets ? (
        <View className="bg-white justify-center items-center w-screen h-screen">
          <ActivityIndicator size="large" color="#000000" />
        </View>
      ) : creada ? (
        <MascotaCreada />
      ) : (
        <View className="flex flex-1 w-screen h-screen bg-white">
          <View className="flex flex-row justify-between items-center px-2 pt-2 h-fit">
            <TouchableOpacity onPress={PrevPantalla} className="m-2">
              <Icon name="arrow-left" size={40} color="black" />
            </TouchableOpacity>
            <Text className="text-base font-poppins mr-4">{render}/12</Text>
          </View>
          <Slider className="w-full" thumbTintColor="transparent" minimumValue={0} maximumValue={12} value={render} minimumTrackTintColor="#FB6726" />
          <View className="flex flex-1 h-3 mx-4 mt-20">
            <ScrollView>
              {render === 1 && <NombreMascota setName={setName} name={pet.name} setValida={setValida} />}
              {render === 2 && <EspecieMascota setSpecie={setSpecie} specie={pet.specie} setValida={setValida} />}
              {render === 3 && <RazaMascota setBreed={setBreed} breed={pet.breed} setValida={setValida} />}
              {render === 4 && <SexoMascota setSex={setSex} sex={pet.sex} setValida={setValida} />}
              {render === 5 && <EdadMascota years={pet.age.years} months={pet.age.months} setAgeYears={setAgeYears} setAgeMonths={setAgeMonths} setValida={setValida} />}
              {render === 6 && <PesoMascota kilos={pet.weight.kilos} gramos={pet.weight.gramos} setKilos={setKilos} setGramos={setGramos} setValida={setValida} />}
              {render === 7 && <CastradoMascota_1 castrado={pet.health.castrado} setHealthCastrado={setHealthCastrado} setValida={setValida} />}
              {render === 8 && <CastradoMascota_2 microchip={pet.health.microchip} setHealthMicrochip={setHealthMicrochip} setValida={setValida} />}
              {render === 9 && <CastradoMascota_3 okWithDogs={pet.health.okWithDogs} setHealthOkWithDogs={setHealthOkWithDogs} setValida={setValida} />}
              {render === 10 && <CastradoMascota_4 okWithCats={pet.health.okWithCats} setHealthOkWithCats={setHealthOkWithCats} setValida={setValida} />}
              {render === 11 && <CastradoMascota_5 okWithChildren={pet.health.okWithChildren} setHealthOkWithChildren={setHealthOkWithChildren} setValida={setValida} />}
              {render === 12 && <ImagenMascota profile={selImg.profile} setProfile={setProfile} setValida={setValida} />}
             
            </ScrollView>
            {!valida  &&
            <TouchableOpacity className={`w-64 h-12 mx-auto rounded-xl bg-naranja justify-center items-center mb-12`} onPress={NextPantalla}>
              <Text className="text-sm text-center text-white font-poppinsSemiBold">{render == 12  ? 'Finalizar' : 'Siguiente'}</Text>
            </TouchableOpacity> }
          </View>
        </View>
      )}
    </>
  );
};

export default AddPet;
