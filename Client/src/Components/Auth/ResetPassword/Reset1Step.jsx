import React from 'react';
import { View, TextInput, Text, Alert, ScrollView } from 'react-native';
import Button from '../../Buttons/Button';
import { useDispatch, useSelector } from 'react-redux';
import { SendEmailPassMethod } from '../../../metodos/authMetodos';
import { setErrorAuth, setLoadingAuth } from '../../../Redux/ReducerAuth';

export const Reset1Step = ({ email, setEmail, password, setPassword, steps, setSteps, verification }) => {
  const dispatch = useDispatch();
  const { authenticatedAuth, loadingAuth, errorAuth, profile, token } = useSelector((state) => state.ReducerAuth);

  const sendEmail = async () => {
    SendEmailPassMethod({
      email,
      loading: (v) => dispatch(setLoadingAuth(v)),
      error: (msg) => dispatch(setErrorAuth(msg)),
      success: (res) => setSteps(1),
    });
    // try {
    //   await emailPassword();
    //   setSteps(1);
    // } catch (error) {
    //   Alert.alert(error.message);
    // }
  };

  return (
    <ScrollView>
      <View className="flex-1 items-center justify-start pt-5 bg-white w-screen h-screen">
        <Text className="text-center mb-6 px-8 font-poppins">Escribe el email asociado a tu cuenta y te enviaremos un código para recuperar tu cuenta</Text>
        <View className="w-full max-w-[400px] min-w-[200px] p-4">
          <TextInput placeholder="Email" placeholderTextColor="white" inputMode="email" value={email} onChangeText={(text) => setEmail(text)} className="w-full rounded-full bg-naranja px-4 h-14 font-poppinsBold text-white" />
        </View>
        <View className="flex min-h-[64px] justify-center">
          <Text className="font-poppins text text-xs text-red-500">{errorAuth}</Text>
        </View>
        <View className="flex mt-4">
          <Button title="Recuperar" onPress={() => sendEmail()} colorButton="bg-black" colorText="text-white" ancho="w-40" alto="h-11" textSize="text-base" />
        </View>
      </View>
    </ScrollView>
  );
};
