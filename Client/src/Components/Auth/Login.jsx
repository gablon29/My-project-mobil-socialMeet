import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import logo from '../../../images/logo.png';
import loginImage from '../../../images/loginImage.png';
import Button from '../Buttons/Button';
import { useAuth } from '../../CustomHooks/useAuth';
import { LoginAuthMethod } from '../../metodos/authMetodos';
import { useDispatch, useSelector } from 'react-redux';
import { authSetUser, setErrorAuth, setLoadingAuth } from '../../Redux/ReducerAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const { authenticatedAuth, loadingAuth, errorAuth, profile, token } = useSelector((state) => state.ReducerAuth);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { email, setEmail, password, setPassword, handleLogin } = useAuth();

  const login = () => {
    LoginAuthMethod({   
      email,
      password,
      loading: (v) => { //loadion es 1 funcion calback invocada en true para indicar que see sta cargando el proceso
        //cuando el proceso finaliza pasa a true
        dispatch(setLoadingAuth(v));
      },
      error: (msg) => dispatch(setErrorAuth(msg)), //si ocurre un error se ejecuta esta funcion y manda a redux el error
      success: async (res) => { //si el axios sale bien se ejecuta succes 
        dispatch(authSetUser(res.payload));
        await AsyncStorage.setItem('Token', res.payload.token);
        navigation.navigate('Home');
      },
    });
  };

  useEffect(() => {
    return () => {
      if (!errorAuth) {
        dispatch(setErrorAuth(''));
      }
    };
  }, []);

  return (
    // <Loading loading={loadingAuth} navigation={navigation} auth={authenticatedAuth}>
    <ScrollView className="bg-white">
      <View className="flex-1 items-center justify-center bg-white my-12">
        <Image source={logo} />
        <Image source={loginImage} className="mt-8" />

        <View className="w-4/5 max-w-xs">
          <Text className="font-poppins w-11">Email</Text>
          {/* Comentario General: font-bold le quita Poppins a la font, entonces no sé por ahora como oscurecerlas para que queden bien, intenté agregando una nueva clase en tailwind.config pero no me resultó... Ver después */}
          <TextInput
            placeholder=""
            value={email}
            inputMode='email'
            textContentType='emailAddress'
            onChangeText={(text) => setEmail(text)}
            className="w-full rounded-full bg-gris h-10 px-4 mb-4" //color custom
          />
          <Text className="font-poppins">Contraseña</Text>
          <TextInput
            placeholder=""
            secureTextEntry={true}
            textContentType='password'
            value={password}
            onChangeText={(text) => setPassword(text)}
            className="w-full rounded-full bg-gris h-10 px-4 mb-4" //color custom
          />
          <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
            <Text className="font-poppins underline text-xs">¿Has olvidado tu contraseña? Recupérala aquí</Text>
          </TouchableOpacity>
          <View className="my-4" />
          <View className="flex items-center">
            <Button title="Entrar" onPress={login} colorButton="bg-naranja" colorText="text-white" ancho="w-40" alto="h-11" textSize="text-base" />
          </View>
        </View>

        <View className="flex min-h-[64px] justify-center">
          <Text className="font-poppins text text-xs text-red-500">{errorAuth}</Text>
        </View>
        <View className="flex flex-row">
          <Text className="font-poppins text-xs">¿Aún no tienes una cuenta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text className="font-poppins underline text-xs text-naranja">Regístrate Aquí</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    // </Loading>
  );
}
