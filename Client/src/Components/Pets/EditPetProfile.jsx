import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import Button from '../Buttons/Button';
import { useSelectImagen } from '../../CustomHooks/useImage';
import { usePets } from '../../CustomHooks/usePets';
import { useDispatch } from 'react-redux';
import { EditPetMethod } from '../../metodos/petsMetodos';
import { setErrorPets, setLoadingPets } from '../../Redux/ReducerPets';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import perro from '../../../images/especies/ic_perro.png';
import gato from '../../../images/especies/ic_gato.png';
import ave from '../../../images/especies/ic_ave.png';
import reptil from '../../../images/especies/ic_reptil.png';
import pez from '../../../images/especies/ic_pez.png';
import roedor from '../../../images/especies/ic_roedor.png';
import ButtonSquareImageTextBorderBlack from '../Buttons/ButtonSquareImageTextBorderBlack';
import ButtonImageRounder from '../Buttons/ButtonImageRounder';
import ButtonTextRounderGris from '../Buttons/ButtonTextRounderGris';

export default function EditPetProfile({ route }) {
  const navigation = useNavigation();
  const { element } = route.params;
  const { pet, setName, setSpecie, setBreed, setKilos, setGramos, setSex, setAgeYears, setAgeMonths, setHealthCastrado, setHealthMicrochip, setHealthOkWithDogs, setHealthOkWithCats, setHealthOkWithChildren, setProfilePic } = usePets(element);
  const dispatch = useDispatch();
  //NUEVOS METODOS ACA

  //

  const answerStylesView = `ml-4 mt-4 w-16 h-11 rounded-full`;
  const borderOn = ''; //border border-black
  // para el SelectList de editar otra especie de mascota

  const { selImg, setProfile } = useSelectImagen();

  const editPet = () => {
    EditPetMethod({
      pet,
      loading: (v) => dispatch(setLoadingPets(v)),
      error: (msg) => {
        dispatch(setErrorPets(msg));
      },
      success: () => navigation.navigate('MyPets'),
    });
  };

  useEffect(() => {
    setProfilePic(selImg.profile);
  }, [selImg.profile]);

  // useEffect(() => {
  //   setCoverImage(selImg.portada);
  // }, [selImg.portada]);

  return (
    <>
      <ScrollView>
        <Text className="text-base font-poppinsBold mx-auto mt-4 mb-1">Imagen de perfil</Text>
        <View className="rounded-full w-[150px] h-[150px] mx-auto mb-2 bg-naranja">
          <TouchableOpacity className="flex justify-center items-center rounded-full bg-naranja w-[150px] h-[150px]" onPress={() => setProfile()}>
            {pet.profilePic ? <Image source={{ uri: pet.profilePic }} style={{ width: 150, height: 150 }} className="rounded-full" /> : <Icon name="plus" size={60} color="white" />}
          </TouchableOpacity>
          <TouchableOpacity
            className="absolute z-50 top-7 -right-5"
            onPress={() => {
              if (pet.profilePic) setProfilePic('');
            }}
          >
            <View className="bg-black rounded-full p-2">
              <Icon name="delete" size={28} color="white" />
            </View>
          </TouchableOpacity>
        </View>
        <Text className="text-base text-center font-poppinsBold mt-4">¿Qué mascota es?</Text>
        <View className="justify-center items-center">
          <View className="flex flex-row">
            <ButtonSquareImageTextBorderBlack texto="Perro" imagen={perro} activado={pet.specie === 'Perro' ? true : false} onPress={() => setSpecie('Perro')} />
            <ButtonSquareImageTextBorderBlack texto="Gato" imagen={gato} activado={pet.specie === 'Gato' ? true : false} onPress={() => setSpecie('Gato')} />
            <ButtonSquareImageTextBorderBlack texto="Ave" imagen={ave} activado={pet.specie === 'Ave' ? true : false} onPress={() => setSpecie('Ave')} />
          </View>
          <View className="flex flex-row mt-4">
            <ButtonSquareImageTextBorderBlack texto="Reptil" imagen={reptil} activado={pet.specie === 'Reptil' ? true : false} onPress={() => setSpecie('Reptil')} />
            <ButtonSquareImageTextBorderBlack texto="Pez" imagen={pez} activado={pet.specie === 'Pez' ? true : false} onPress={() => setSpecie('Pez')} />
            <ButtonSquareImageTextBorderBlack texto="Roedor" imagen={roedor} activado={pet.specie === 'Roedor' ? true : false} onPress={() => setSpecie('Roedor')} />
          </View>
        </View>
        <View className="justify-center items-center mx-4">
          <Text className="text-base text-center font-poppinsBold mt-6">¿Cómo se llama tu mascota?</Text>
          <TextInput placeholder="Escribe su nombre" value={pet.name} onChangeText={(t) => setName(t)} className="w-full max-w-sm min-w-[250px] rounded-lg bg-gris h-12 px-4" />
          <Text className="text-base text-center font-poppinsBold mt-4">Peso en KG</Text>
          <View className="flex flex-row w-full h-fit max-w-sm min-w-[250px]">
            <View className="w-1/2">
              <Text className="text-sm text-center font-poppinsBold mr-2">Kilos</Text>
            </View>
            <View className="w-1/2">
              <Text className="text-sm text-center font-poppinsBold ml-2">Gramos</Text>
            </View>
          </View>
          <View className="flex flex-row w-full h-fit max-w-sm min-w-[250px]">
            <View className="w-1/2">
              <TextInput keyboardType="numeric" placeholder="Escribe en kilos" value={pet.weight.kilos} onChangeText={(t) => setKilos(t)} className="rounded-lg bg-gris h-12 px-4 mr-2" />
            </View>
            <View className="w-1/2">
              <TextInput keyboardType="numeric" placeholder="Escribe en gramos" value={pet.weight.gramos} onChangeText={(t) => setGramos(t)} className="rounded-lg bg-gris h-12 px-4 ml-2" />
            </View>
          </View>
          <Text className="text-base text-center font-poppinsBold mt-4">Edad</Text>
          <View className="flex flex-row w-full h-fit max-w-sm min-w-[250px]">
            <View className="w-1/2">
              <Text className="text-sm text-center font-poppinsBold mr-2">Años</Text>
            </View>
            <View className="w-1/2">
              <Text className="text-sm text-center font-poppinsBold ml-2">Meses</Text>
            </View>
          </View>
          <View className="flex flex-row w-full h-fit max-w-sm min-w-[250px]">
            <View className="w-1/2">
              <TextInput keyboardType="numeric" placeholder="Escribe los años" value={pet.age.years} onChangeText={(t) => setAgeYears(t)} className="rounded-lg bg-gris h-12 px-4 mr-2" />
            </View>
            <View className="w-1/2">
              <TextInput keyboardType="numeric" placeholder="Escribe los meses" value={pet.age.months} onChangeText={(t) => setAgeMonths(t)} className="rounded-lg bg-gris h-12 px-4 ml-2" />
            </View>
          </View>
          <Text className="text-base text-center font-poppinsBold mt-4">Raza de la mascota</Text>
          <TextInput placeholder="Escribe su raza" value={pet.age.breed} onChangeText={(t) => setBreed(t)} className="w-full max-w-sm min-w-[250px] rounded-lg bg-gris h-12 px-4" />
        </View>
        <Text className="text-base text-center font-poppinsBold mt-4">Sexo</Text>
        <View className="flex flex-row justify-center">
          <ButtonImageRounder activado={pet.sex === 'Macho' ? true : false} texto="Macho" onPress={() => setSex('Macho')}>
            <Icon name="gender-male" size={60} color={pet.sex === 'Macho' ? 'white' : 'gray'} />
          </ButtonImageRounder>
          <ButtonImageRounder activado={pet.sex === 'Hembra' ? true : false} texto="Hembra" onPress={() => setSex('Hembra')}>
            <Icon name="gender-female" size={60} color={pet.sex === 'Hembra' ? 'white' : 'gray'} />
          </ButtonImageRounder>
        </View>
        <View className="justify-center items-center mx-4 mt-2">
          <Text className="text-white text-base font-poppinsSemiBold text-center rounded-xl bg-black w-full h-fit max-w-sm min-w-[250px] p-2">¿Está castrado o esterilizado?</Text>
          <View className="flex flex-row p-4">
            <View className="w-20 mr-2">
              <ButtonTextRounderGris activado={pet.health.castrado === true ? true : false} texto="Si" onPress={() => setHealthCastrado(true)} />
            </View>
            <View className="w-20 ml-2">
              <ButtonTextRounderGris activado={pet.health.castrado === false ? true : false} texto="No" onPress={() => setHealthCastrado(false)} />
            </View>
          </View>
          <Text className="text-white text-base font-poppinsSemiBold text-center rounded-xl bg-black w-full h-fit max-w-sm min-w-[250px] p-2 mt-4">¿Tiene microchip?</Text>
          <Text className="text-white text-base font-poppinsSemiBold text-center rounded-xl bg-black w-full h-fit max-w-sm min-w-[250px] p-2 mt-4">¿Se lleva bien con perros?</Text>
          <Text className="text-white text-base font-poppinsSemiBold text-center rounded-xl bg-black w-full h-fit max-w-sm min-w-[250px] p-2 mt-4">¿Se lleva bien con gatos?</Text>
          <Text className="text-white text-base font-poppinsSemiBold text-center rounded-xl bg-black w-full h-fit max-w-sm min-w-[250px] p-2 mt-4">¿Se lleva bien con niños?</Text>
        </View>
        <View className="flex flex-row w-full h-fit max-w-sm min-w-[250px]"></View>
        <View className="items-center">
          {/* AQUI TERMINA LO DE CREATE PET 2 */}

          <View className="flex mt-10 mx-10">
            {[
              {
                question: '¿Está castrado o esterilizado?',
                property: 'castrado',
                setStateFunction: setHealthCastrado,
              },
              {
                question: '¿Tiene microchip?',
                property: 'microchip',
                setStateFunction: setHealthMicrochip,
              },
              {
                question: '¿Se lleva bien con perros?',
                property: 'okWithDogs',
                setStateFunction: setHealthOkWithDogs,
              },
              {
                question: '¿Se lleva bien con gatos?',
                property: 'okWithCats',
                setStateFunction: setHealthOkWithCats,
              },
              {
                question: '¿Se lleva bien con niños?',
                property: 'okWithChildren',
                setStateFunction: setHealthOkWithChildren,
              },
            ].map((item, index) => (
              <View className="flex  mx-3 my-3" key={index}>
                <View className="w-64 h-11 bg-black rounded-xl">
                  <Text className="text-white text-base font-poppinsSemiBold text-center mt-2">{item.question}</Text>
                </View>
                <View className="flex flex-row mx-6">
                  <TouchableOpacity onPress={() => item.setStateFunction(true)}>
                    <View className={`${answerStylesView} ${pet.health[item.property] ? 'bg-naranja ' + borderOn : 'bg-gris'}`}>
                      <Text className="text-black text-base font-poppinsSemiBold text-center mt-2">Si</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => item.setStateFunction(false)}>
                    <View className={`${answerStylesView} ${!pet.health[item.property] ? 'bg-naranja ' + borderOn : 'bg-gris'}`}>
                      <Text className="text-black text-base font-poppinsSemiBold text-center mt-2">No</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View className="flex my-10">
          <Button title="Guardar cambios" onPress={editPet} colorButton="bg-naranja" colorText="text-white" ancho="w-48" alto="h-8" textFont="font-poppinsSemiBold" otrosButton="mx-20 mt-4 shadow" />
        </View>
      </ScrollView>
    </>
  );
}
