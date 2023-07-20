import React, { useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import Button from '../../Buttons/Button';
import logo from '../../../../images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorAuth } from '../../../Redux/ReducerAuth';
import { useNavigation } from '@react-navigation/native';

export const RegisterStep2 = ({ password, setPassword, setRegisterSteps, handleRegister, checkPassword, setCheckPassword }) => {
  const { authenticatedAuth, loadingAuth, errorAuth, profile, token } = useSelector((state) => state.ReducerAuth);
  const dispatch = useDispatch();
  const navigation = useNavigation()

  // const createAcount = async () => {
  //   await handleRegister()
  //     .then((succes) => setRegisterSteps(3))
  //     .catch((error) => Alert.alert('Ocurrio un error: ', error.message));
  // };

  const nextRegistro = () => {
    if (!password || !checkPassword) {
      dispatch(setErrorAuth('Falta Completar Campos'));
      return;
    }
    if (password !== checkPassword) {
      dispatch(setErrorAuth('Las Contraseñas No Coinciden'));
      return;
    }
    handleRegister();
  };

  return (
    <ScrollView className="bg-white">
      <View className="flex-1 items-center justify-center bg-white my-12">
        <Image source={logo} />
        <View className="mt-8 px-10">
          <Text className="font-poppins text-center py-12">Crea un contraseña segura para tu cuenta, recuerda añadir mayúsculas y números para mayor seguridad.</Text>
        </View>
        <View className="w-4/5 ">
          <Text className="font-poppinsBold">Contraseña</Text>
          <TextInput placeholder="" value={password} onChangeText={(text) => setPassword(text)} className="w-full rounded-lg bg-gris h-8 px-4 mb-4" />
        </View>
        <View className="w-4/5">
          <Text className="font-poppinsBold">Repetir contraseña</Text>
          <TextInput placeholder="" value={checkPassword} onChangeText={(text) => setCheckPassword(text)} className="w-full rounded-lg bg-gris h-8 px-4 mb-4" />
        </View>
        <View className="my-8" />
        <View className="flex items-center mt-2">
          <Button title="Registrarme" onPress={nextRegistro} colorButton="bg-naranja" colorText="text-white" ancho="w-40" alto="h-11" textSize="text-base" />
        </View>
        <View className="my-5" />
        <View className="flex min-h-[64px] justify-center">
          <Text className="font-poppins text text-xs text-red-500">{errorAuth}</Text>
        </View>
        <View className="mt-2">
          <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
            <Text className="font-poppins underline text-xs">¿Has olvidado tu contraseña? Recupérala aquí</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
