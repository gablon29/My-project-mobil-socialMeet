import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import logo from '../../../images/logo.png';
import loginImage from '../../../images/loginImage.png';
import Button from '../Buttons/Button';
import { useAuth } from '../../CustomHooks/useAuth';
import { LoginAuthMethod } from '../../metodos/authMetodos';
import { useDispatch } from 'react-redux';
import { authSetUser, setErrorAuth, setLoadingAuth } from '../../Redux/ReducerAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const { email, setEmail, password, setPassword, handleLogin } = useAuth();

  const login = () => {
    LoginAuthMethod({
      email,
      password,
      loading: (v) => dispatch(setLoadingAuth(v)),
      error: (msg) => dispatch(setErrorAuth(msg)),
      success: async (res) => {
        dispatch(authSetUser(res.payload));
        await AsyncStorage.setItem('Token', res.payload.token);
        navigation.navigate('Home');
      },
    });
  };

  return (
    <ScrollView>
      {console.log()}
      <View className="flex-1 items-center justify-center bg-white">
        <Image source={logo} />
        <Image source={loginImage} className="mt-8" />

        <View className="w-4/5">
          <Text className="font-poppins">Email</Text>
          {/* Comentario General: font-bold le quita Poppins a la font, entonces no sé por ahora como oscurecerlas para que queden bien, intenté agregando una nueva clase en tailwind.config pero no me resultó... Ver después */}
          <TextInput
            placeholder=""
            value={email}
            onChangeText={(text) => setEmail(text)}
            className="w-full rounded-full bg-gris h-10 px-4 mb-4" //color custom
          />
          <Text className="font-poppins">Contraseña</Text>
          <TextInput
            placeholder=""
            secureTextEntry={true}
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

        <View className="flex mt-16"></View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text className="font-poppins underline text-xs">¿Aún no tienes una cuenta? Regístrate Aquí</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
