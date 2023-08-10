import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import logo from '../../../../images/logo.png';
import mensajeDeBienvenida from '../../../../images/mensajeDeBienvenida.png';
import Button from '../../Buttons/Button';
import Toast from 'react-native-root-toast';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorAuth, setLoadingAuth, setRegistroAuth, userRefresh } from '../../../Redux/ReducerAuth';
import { GetDataAllProfessional } from '../../../metodos/professionalMetodos';
import { setAllProfessionals, setErrorProfessional, setLoadingProffesional } from '../../../Redux/ReducerProffesional';
import { ReloadAuthMethod } from '../../../metodos/authMetodos';

export default function RegisterStep3() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { authenticatedAuth, loadingAuth, errorAuth, profile, token, registro } = useSelector((state) => state.ReducerAuth);

  const loadProfessionals = async () => {
    await ReloadAuthMethod({
      loading: (v) => dispatch(setLoadingAuth(v)),
      error: (msg) => dispatch(setErrorAuth(msg)),
      success: (res) => {
        dispatch(userRefresh(res.payload));
      },
      
    });
    await GetDataAllProfessional({
      loading: (v) => dispatch(setLoadingProffesional(v)),
      error: (msg) => dispatch(setErrorProfessional(msg)),
      success: (res) => {dispatch(setAllProfessionals(res.payload))}
    });
  }

  return (
      <View className="flex-1 items-center justify-center bg-white my-12">
        <Image source={logo} className="mb-32" />
        <View className="flex items-center mb-20">
          <Image source={mensajeDeBienvenida} />
          <View className="my-10">
            <Text className="font-poppinsBold text-center text-lg mt-5">¡Enhorabuena, tu cuenta ya ha sido creada!</Text>
          </View>
          <View className="flex items-center mt-10">
            <Button
              title="Ir a inicio"
              onPress={() => {
                loadProfessionals();
                Toast.show('Muchas Gracias por Registrarte, Bienvenido', {
                  duration: 10000,
                  position: Toast.positions.CENTER,
                  shadow: true,
                  animation: true,
                  hideOnPress: false,
                  delay: 0,
                });
                dispatch(setRegistroAuth(false));
                navigation.navigate('Home');
              }}
              borderColor={"border-naranja"} colorButton="bg-white" colorText="text-naranja"
              ancho="w-40"
              alto="h-11"
              textSize="text-base"
            />
          </View>
        </View>
      </View>
  );
}
