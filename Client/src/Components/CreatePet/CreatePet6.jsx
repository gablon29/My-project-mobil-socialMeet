import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import mensajeDeBienvenida from '../../../images/mensajeDeBienvenida.png';
import Button from '../Buttons/Button';
import { useDispatch, useSelector } from 'react-redux';
import { GetPetsMethod } from '../../metodos/petsMetodos';
import { setAllPets, setErrorPets, setLoadingPets } from '../../Redux/ReducerPets';
import { useNavigation } from '@react-navigation/native';

const CreatePet6 = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation()

  const profile = useSelector((state) => state.ReducerAuth.profile);
  let owner = profile.email;
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
    <View className="flex-1 items-center justify-center mt-40">
      <View className="flex items-center mb-20">
        <Image source={mensajeDeBienvenida} />
        <View className="my-10">
          <Text className="font-poppinsBold text-center text-lg mt-5">¡Enhorabuena, tu mascota ya ha sido creada!</Text>
        </View>
        <View className="flex items-center mt-10">
          <Button title="Ver mi mascota" onPress={getPets} colorButton="bg-naranja" colorText="text-white" ancho="w-40" alto="h-11" textSize="text-base" />
        </View>
      </View>
    </View>
  );
};

export default CreatePet6;
