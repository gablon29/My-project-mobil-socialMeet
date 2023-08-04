import { View, Text, Image, Alert, ScrollView } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import logo from '../../../images/logo.png';
import welcomeImage from '../../../images/welcomeImage.png';
import wuau from '../../../images/wuau.png';
import Button from '../Buttons/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ReloadAuthMethod } from '../../metodos/authMetodos';
import { useDispatch } from 'react-redux';
import { userRefresh, setErrorAuth, setLoadingAuth } from '../../Redux/ReducerAuth';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { setAllPets, setErrorPets, setLoadingPets } from '../../Redux/ReducerPets';
import { GetPetsMethod } from '../../metodos/petsMetodos';
import { GetDataAllProfessional } from '../../metodos/professionalMetodos';
import { setLoadingProffesional, setErrorProfessional, setAllProfessionals } from '../../Redux/ReducerProffesional';

export default function Welcome() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  /**
   * Función asincrónica para obtener el token de AsyncStorage y recargar los datos del usuario.
   * Revisa si el usuario tiene token, si tiene token le envia el token a reloadUser es un método de authmetodo
   * reload user envia al back el token y se devuelve la info del usuario, se envia a redux, se redirige a home.
   **/
  const getData = async () => {
    const value = await AsyncStorage.getItem('Token');
    if (value) {
      await ReloadAuthMethod({
        loading: (v) => dispatch(setLoadingAuth(v)),
        error: (msg) => dispatch(setErrorAuth(msg)),
        success: (res) => {
          /* console.log(res) */
          dispatch(userRefresh(res.payload));
          navigation.navigate('Home');
          /* console.log('TOKEN WELCOME', value); */
        },
        
      });
      await GetPetsMethod({
        loading: (v) => dispatch(setLoadingPets(v)),
        error: (msg) => dispatch(setErrorPets(msg)),
        success: (res) => dispatch(setAllPets(res.payload)),
      });
      await GetDataAllProfessional({
        loading: (v) => dispatch(setLoadingProffesional(v)),
        error: (msg) => dispatch(setErrorProfessional(msg)),
        success: (res) => {dispatch(setAllProfessionals(res.payload))}
      });
    }
  };
  
  useFocusEffect(
    useCallback(() => {
      getData();
    }, []),
  );

  return (
    <ScrollView className="bg-white">
      <View className="h-full items-center justify-center bg-white my-12">
        <Image source={logo} />
        <Image source={welcomeImage} className="mt-8" />
        <Image source={wuau} className="mt-8" />
        <View className="flex mt-16">
          <Button title="Iniciar sesión" onPress={() => navigation.navigate('Login')} colorButton="bg-celeste" colorText="text-white" ancho="w-72" alto="h-14" textSize="text-lg" />
          <View className="my-4" />
          <Button title="Registrarme" onPress={() => navigation.navigate('Register')} borderColor={"border-naranja"} colorButton="bg-white" colorText="text-naranja" ancho="w-72" alto="h-14" textSize="text-lg" />
        </View>
      </View>
    </ScrollView>
  );
}
