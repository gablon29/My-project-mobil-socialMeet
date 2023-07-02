import { View, Text, Image, Alert } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import logo from '../../../images/logo.png';
import welcomeImage from '../../../images/welcomeImage.png';
import wuau from '../../../images/wuau.png';
import Button from '../Buttons/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ReloadAuthMethod } from '../../metodos/authMetodos';
import { useDispatch } from 'react-redux';
import { userRefresh, setErrorAuth, setLoadingAuth } from '../../Redux/ReducerAuth';
import { useFocusEffect } from '@react-navigation/native';

export default function Welcome({ navigation }) {
  const dispatch = useDispatch();
    /**
     * Función asincrónica para obtener el token de AsyncStorage y recargar los datos del usuario.
     * Revisa si el usuario tiene token, si tiene token le envia el token a reloadUser es un método de authmetodo
     * reload user envia al back el token y se devuelve la info del usuario, se envia a redux, se redirige a home.
     **/
    const getData = async () => {
      const value = await AsyncStorage.getItem('Token');
      if (value) {
        ReloadAuthMethod({
          loading: (v) => dispatch(setLoadingAuth(v)),
          error: (msg) => dispatch(setErrorAuth(msg)),
          success: (res) => {
            dispatch(userRefresh(res.payload));
            navigation.navigate('Home');
          },
        });
      }
    };
  useFocusEffect(
    useCallback(()=>{


    getData();
  },[]))


  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image source={logo} />
      <Image source={welcomeImage} className="mt-8" />

      <Image source={wuau} className="mt-8" />
      <View className="flex mt-16">
        <Button title="Iniciar sesión" onPress={() => navigation.navigate('Login')} colorButton="bg-naranja" colorText="text-white" ancho="w-72" alto="h-14" textSize="text-lg" />
        <View className="my-4" />

        <Button title="Registrarme" onPress={() => navigation.navigate('Register')} colorButton="bg-black" colorText="text-white" ancho="w-72" alto="h-14" textSize="text-lg" />
      </View>
      {/* BORRAR ESTE BOTON EN PRODUCCIÓN ------ */}
      <Button title="CAMBIAR IP DE API_URL" onPress={() => {
            navigation.navigate('Selecturl')
          }
            } colorButton="bg-black" colorText="text-white" ancho="w-72" alto="h-14" textSize="text-lg" />
      {/* BORRAR ESTE BOTON EN PRODUCCIÓN ^^^^^ */}
    </View>
  );
}
