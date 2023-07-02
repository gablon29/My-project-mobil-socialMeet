import { View, Text, Image, Alert } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import wuau from '../../../images/wuau.png';
import Button from '../Buttons/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';

export default function Apiurlselector({ navigation }) {
  const [textosValiosos, setTextosValiosos] = useState({});
  const [ready, setReady] = useState(false);

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem('API_URL').then((resp) => {
        setTextosValiosos({ ...textosValiosos, current_url: resp ? resp : 'Elegir una ip' });
        axios.defaults.baseURL = textosValiosos.current_url;
        setReady(true);
      });
      AsyncStorage.getItem('Token').then((resp) => {
        setTextosValiosos({ ...textosValiosos, current_token: resp ? resp : 'SIN TOKEN' });
        setReady(true);
      });
    }, []),
  );
  // PRODUCCION
  // axios.defaults.baseURL = 'https://whopaws-production.up.railway.app';

  //#region BLOQUE DE MANEJO DE API_URLS PARA NO ESTAR PISANDONOS:
  // EN PRODUCCION BORRAR TODO EL BLOQUE Y DEJR SOLO
  // axios.defaults.baseURL = 'https://whopaws-production.up.railway.app';
  function handleChangeAPU_URL(ip) {
    setReady(false);
    axios.defaults.baseURL = textosValiosos.current_url;
    console.log(ip, axios.defaults.baseURL);
    setTextosValiosos({ ...textosValiosos, current_url: ip });
    AsyncStorage.setItem('API_URL', textosValiosos.current_url).then((_) => {
      console.log(ip, axios.defaults.baseURL);
      setReady(true);
    });
  }
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>{ready ? `ip: ${textosValiosos.current_url}` : 'Espere...'}</Text>

      <View className="flex mt-16">
        <Button title="IP PRODUCCIÓN" onPress={() => handleChangeAPU_URL('https://whopaws-production.up.railway.app')} colorButton="bg-naranja" colorText="text-white" ancho="w-72" alto="h-14" textSize="text-lg" />
        {/*         <View className="my-4" /> */}
        <Button title="LUIS LOCAL" onPress={() => handleChangeAPU_URL('http://192.168.18.6:8080')} colorButton="bg-black" colorText="text-white" ancho="w-72" alto="h-14" textSize="text-lg" />
        <Button title="  LUIS CASA" onPress={() => handleChangeAPU_URL('http://192.168.100.60:8080')} colorButton="bg-black" colorText="text-white" ancho="w-72" alto="h-14" textSize="text-lg" />
        <Button title="IGNA" onPress={() => handleChangeAPU_URL('http://192.168.1.84:8080')} colorButton="bg-black" colorText="text-white" ancho="w-72" alto="h-14" textSize="text-lg" />
        <Button title="Santi" onPress={() => handleChangeAPU_URL('no recuerdo')} colorButton="bg-black" colorText="text-white" ancho="w-72" alto="h-14" textSize="text-lg" />
        <Button title="RODRI" onPress={() => handleChangeAPU_URL('http://192.168.0.12:8080')} colorButton="bg-black" colorText="text-white" ancho="w-72" alto="h-14" textSize="text-lg" />
        <Button title="NULL" onPress={() => handleChangeAPU_URL('')} colorButton="bg-black" colorText="text-white" ancho="w-72" alto="h-14" textSize="text-lg" />
        <Button
          title="Confirmar"
          onPress={() => {
            if (textosValiosos.current_url) {
              axios.defaults.baseURL = textosValiosos.current_url;
              navigation.navigate('Welcome');
            } else {
            }
          }}
          colorText="text-white"
          ancho="w-72"
          alto="h-20"
          textSize="text-lg"
          colorButton={textosValiosos.current_url ? 'bg-naranja' : 'bg-white'}
        />
        <Text>baseURL= {textosValiosos.current_url}</Text>
        <Text
          onPress={(e) => {
            AsyncStorage.removeItem('Token');
          }}
          className={'max-w-[200px]'}
        >{`CLICK PARA BORRAR TOKEN: ${textosValiosos.current_token}`}</Text>
      </View>
    </View>
  );
}
