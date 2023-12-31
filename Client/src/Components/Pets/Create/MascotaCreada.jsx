import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { GetPetsMethod } from '../../../metodos/petsMetodos';
import { setAllPets, setErrorPets, setLoadingPets } from '../../../Redux/ReducerPets';
import mensajeDeBienvenida from '../../../../images/mensajeDeBienvenida.png';
import Button from '../../Buttons/ButtonCuston';

const MascotaCreada = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getPets = () => {
    GetPetsMethod({
      loading: (v) => dispatch(setLoadingPets(v)),
      error: (msg) => dispatch(setErrorPets(msg)),
      success: (res) => {
        dispatch(setAllPets(res.payload));
        navigation.navigate('MyPets');
      },
    });
  };

  return (
    <View className="flex-1 items-center justify-center m-4 bg-white">
      <View className="flex items-center">
        <Image source={mensajeDeBienvenida} />
        <View>
          <Text className="font-poppinsBold text-center text-lg mt-5">¡Enhorabuena, tu mascota ya ha sido creada!</Text>
        </View>
        <View className="flex items-center mt-10">
          <Button title="Ver mi mascota" onPress={getPets} 
            titleClass="text-base text-naranja font-bold" 
            buttonClass="bg-transparent w-40 h-11 rounded-full border-2 border-naranja justify-center items-center"
            className=""
         />
        </View>
      </View>
    </View>
  );
};

export default MascotaCreada;
