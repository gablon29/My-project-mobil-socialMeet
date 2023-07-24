import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import Button from '../Buttons/ButtonCuston';
import { suvirImagen, useSelectImagen } from '../../CustomHooks/useImage';
import { usePets } from '../../CustomHooks/usePets';
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
import { useDispatch, useSelector } from 'react-redux';

export default function EditPetProfile({ route }) {
  const navigation = useNavigation();
  const { userPet, loadingPets, errorPets, successPets } = useSelector((state) => state.ReducerPets);
  const { pet, setName, setSpecie, setBreed, setKilos, setGramos, setSex, setAgeYears, setAgeMonths, setHealthCastrado, setHealthMicrochip, setHealthOkWithDogs, setHealthOkWithCats, setProfilePic, setRoutineOfNeeds, setRoutineOfDiet, setInformation } = usePets(userPet);
  const dispatch = useDispatch();
  const { selImg, setProfile, setImgProfile } = useSelectImagen(userPet.profilePic);

  const editPet = async () => {
    const linkImagen = await suvirImagen(selImg.profile);
    pet.profilePic = linkImagen;
    await EditPetMethod({
      pet,
      loading: (v) => dispatch(setLoadingPets(v)),
      error: (msg) => {
        dispatch(setErrorPets(msg));
      },
      success: () => navigation.navigate('MyPets'),
    });
  };

  return (
    <>
      <ScrollView className="bg-white">
        <Text className="text-base font-poppinsBold mx-auto mt-4 mb-1">Imagen de perfil</Text>
        <View className="rounded-full w-[150px] h-[150px] mx-auto mb-2 bg-new">
          <TouchableOpacity className="flex justify-center items-center rounded-full bg-new w-[150px] h-[150px]" onPress={() => setProfile()}>
            {selImg.profile ? <Image source={{ uri: selImg.profile }} style={{ width: 150, height: 150 }} className="rounded-full" resizeMode="contain" /> : <Icon name="plus" size={60} color="white" />}
          </TouchableOpacity>
          <TouchableOpacity
            className="absolute z-50 top-3 -right-2"
            onPress={() => {
              if (selImg.profile) {
                setImgProfile('');
              }
            }}
          >
            <View className="bg-naranja rounded-full p-2">
              <Icon name="trash-can-outline" size={28} color="white" />
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
          <TextInput placeholder="Escribe su nombre" placeholderTextColor="black" value={pet.name} onChangeText={(t) => setName(t)} className="w-full max-w-sm min-w-[250px] rounded-lg bg-new h-12 px-4" />
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
              <TextInput keyboardType="numeric" placeholder="Escribe en kilos" placeholderTextColor="black" value={pet.weight.kilos} onChangeText={(t) => setKilos(t)} className="rounded-lg bg-new h-12 px-4 mr-2" />
            </View>
            <View className="w-1/2">
              <TextInput keyboardType="numeric" placeholder="Escribe en gramos" placeholderTextColor="black" value={pet.weight.gramos} onChangeText={(t) => setGramos(t)} className="rounded-lg bg-new h-12 px-4 ml-2" />
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
              <TextInput keyboardType="numeric" placeholder="Escribe los años" placeholderTextColor="black" value={pet.age.years} onChangeText={(t) => setAgeYears(t)} className="rounded-lg bg-new h-12 px-4 mr-2" />
            </View>
            <View className="w-1/2">
              <TextInput keyboardType="numeric" placeholder="Escribe los meses" placeholderTextColor="black" value={pet.age.months} onChangeText={(t) => setAgeMonths(t)} className="rounded-lg bg-new h-12 px-4 ml-2" />
            </View>
          </View>
          <Text className="text-base text-center font-poppinsBold mt-4">Raza de la mascota</Text>
          <TextInput placeholder="Escribe su raza" placeholderTextColor="black" value={pet.age.breed} onChangeText={(t) => setBreed(t)} className="w-full max-w-sm min-w-[250px] rounded-lg bg-new h-12 px-4" />
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
          <Text className="text-white text-base font-poppinsSemiBold text-center rounded-xl bg-celeste w-full h-fit max-w-sm min-w-[250px] p-2">¿Está castrado o esterilizado?</Text>
          <View className="flex flex-row p-4">
            <View className="w-20 mr-2">
              <ButtonTextRounderGris activado={pet.health.castrado === true ? true : false} texto="Si" onPress={() => setHealthCastrado(true)} />
            </View>
            <View className="w-20 ml-2">
              <ButtonTextRounderGris activado={pet.health.castrado === false ? true : false} texto="No" onPress={() => setHealthCastrado(false)} />
            </View>
          </View>
          <Text className="text-white text-base font-poppinsSemiBold text-center rounded-xl bg-celeste w-full h-fit max-w-sm min-w-[250px] p-2 mt-4">¿Tiene microchip?</Text>
          <View className="flex flex-row p-4">
            <View className="w-20 mr-2">
              <ButtonTextRounderGris activado={pet.health.microchip === true ? true : false} texto="Si" onPress={() => setHealthMicrochip(true)} />
            </View>
            <View className="w-20 ml-2">
              <ButtonTextRounderGris activado={pet.health.microchip === false ? true : false} texto="No" onPress={() => setHealthMicrochip(false)} />
            </View>
          </View>
          <Text className="text-white text-base font-poppinsSemiBold text-center rounded-xl bg-celeste w-full h-fit max-w-sm min-w-[250px] p-2 mt-4">¿Se lleva bien con perros?</Text>
          <View className="flex flex-row p-4">
            <View className="w-20 mr-2">
              <ButtonTextRounderGris activado={pet.health.okWithDogs === true ? true : false} texto="Si" onPress={() => setHealthOkWithDogs(true)} />
            </View>
            <View className="w-20 ml-2">
              <ButtonTextRounderGris activado={pet.health.okWithDogs === false ? true : false} texto="No" onPress={() => setHealthOkWithDogs(false)} />
            </View>
          </View>
          <Text className="text-white text-base font-poppinsSemiBold text-center rounded-xl bg-celeste w-full h-fit max-w-sm min-w-[250px] p-2 mt-4">¿Se lleva bien con gatos?</Text>
          <View className="flex flex-row p-4">
            <View className="w-20 mr-2">
              <ButtonTextRounderGris activado={pet.health.okWithCats === true ? true : false} texto="Si" onPress={() => setHealthOkWithCats(true)} />
            </View>
            <View className="w-20 ml-2">
              <ButtonTextRounderGris activado={pet.health.okWithCats === false ? true : false} texto="No" onPress={() => setHealthOkWithCats(false)} />
            </View>
          </View>
          <Text className="text-white text-base font-poppinsSemiBold text-center rounded-xl bg-celeste w-full h-fit max-w-sm min-w-[250px] p-2 mt-4">¿Se lleva bien con niños?</Text>
          <View className="flex flex-row p-4">
            <View className="w-20 mr-2">
              <ButtonTextRounderGris activado={pet.health.okWithChildren === true ? true : false} texto="Si" onPress={() => setHealthOkWithDogs(true)} />
            </View>
            <View className="w-20 ml-2">
              <ButtonTextRounderGris activado={pet.health.okWithChildren === false ? true : false} texto="No" onPress={() => setHealthOkWithDogs(false)} />
            </View>
          </View>
          <Text className="text-base max-w-sm text-center font-poppinsBold mt-4">¿Cada cuanto tiempo tiene que ir a hacer sus necesidades?</Text>
          <TextInput 
            keyboardType="default" 
            multiline={true} 
            placeholder="Describe sus necesidades" 
            value={pet.routineOfNeeds}
            onChangeText={(t) => setRoutineOfNeeds(t)} 
            className="rounded-lg bg-new w-full h-fit min-h-[150px] max-w-sm min-w-[250px] p-4 text-justify" 
            textAlignVertical="top"
          />
          <Text className="text-base text-center font-poppinsBold mt-4">¿Cual es su rutina de alimentación?</Text>
          <TextInput 
            keyboardType="default" 
            multiline={true} 
            placeholder="Describe sus necesidades" 
            value={pet.routineOfDiet} 
            onChangeText={(t) => setRoutineOfDiet(t)} 
            className="rounded-lg bg-new w-full h-fit min-h-[150px] max-w-sm min-w-[250px] p-4 text-justify" 
            textAlignVertical="top"
          />
          <Text className="text-base text-center font-poppinsBold mt-4">Otra información a tener en cuenta</Text>
          <TextInput 
            keyboardType="default" 
            multiline={true} 
            placeholder="Describe sus necesidades" 
            value={pet.information} 
            onChangeText={(t) => setInformation(t)} 
            className="rounded-lg bg-new w-full h-fit min-h-[150px] max-w-sm min-w-[250px] p-4 text-justify" 
            textAlignVertical="top"
          />
          <Button 
            title="Guardar cambios"
            titleClass="text-naranja font-poppinsSemiBold"
            buttonClass="bg-white border-2 border-naranja w-48 h-8 m-20 rounded-full shadow-md shadow-black justify-center items-center"
            onPress={editPet}
          />
        </View>
      </ScrollView>
    </>
  );
}
