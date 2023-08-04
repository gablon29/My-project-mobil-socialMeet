import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import Button from '../../../Buttons/ButtonCuston';
import perro from '../../../../../images/especies/ic_perro.png';
import gato from '../../../../../images/especies/ic_gato.png';
import ave from '../../../../../images/especies/ic_ave.png';
import reptil from '../../../../../images/especies/ic_reptil.png';
import pez from '../../../../../images/especies/ic_pez.png';
import conejo from '../../../../../images/especies/conejo.png';
import ardilla from '../../../../../images/especies/ardilla.png';
import roedor from '../../../../../images/especies/ic_roedor.png';
import StarRating from './ratings/StarRating';

const PriceTab = () => {
  const [select, setSelect] = useState('EnCasa');

  const cuidados = [
    {
      name: 'Cuidado de perros',
      pesos: [
        { peso: '0 - 5 KG', precio: 25 },
        { peso: '5 - 20 KG', precio: 25 },
        { peso: '20 - 50 KG', precio: 25 },
        { peso: '+50 KG', precio: 25 },
      ],
      image: perro,
    },
    {
      name: 'Cuidado de perros',
      pesos: [
        { peso: '0 - 5 KG', precio: 25 },
        { peso: '0 - 5 KG', precio: 25 },
        { peso: '0 - 5 KG', precio: 25 },
        { peso: '0 - 5 KG', precio: 25 },
      ],
      image: perro,
    },
    {
      name: 'Cuidado de perros',
      pesos: [
        { peso: '0 - 5 KG', precio: 25 },
        { peso: '0 - 5 KG', precio: 25 },
        { peso: '0 - 5 KG', precio: 25 },
        { peso: '0 - 5 KG', precio: 25 },
      ],
      image: perro,
    },
    {
      name: 'Cuidado de perros',
      pesos: [
        { peso: '0 - 5 KG', precio: 25 },
        { peso: '0 - 5 KG', precio: 25 },
        { peso: '0 - 5 KG', precio: 25 },
        { peso: '0 - 5 KG', precio: 25 },
      ],
      image: perro,
    },
  ];

  return (
    <View className="mb-20">
      <View className="flex flex-row justify-evenly">
        <Button title="En casa" titleClass="text-base text-black font-semibold" buttonClass={`bg-new w-36 h-9 rounded-xl ${select === 'EnCasa' && 'border-[3px]'} justify-center items-center mb-8`} onPress={() => setSelect('EnCasa')} />
        <Button title="A Domicilio" titleClass="text-base text-black font-semibold" buttonClass={`shadow-xl bg-new w-36 h-9 rounded-xl ${select === 'ADomicilio' && 'border-[3px]'} justify-center items-center mb-8`} onPress={() => setSelect('ADomicilio')} />
      </View>

      <View className="flex flex-col space-y-32 items-center mt-14">
        {cuidados.map((cuidado, i) => (
          <View key={i} className="bg-lightnew w-5/6 px-5 z-10 pt-16 rounded-[10px]">
            <View className="absolute top-[-50px] left-5 w-24 h-24 bg-new rounded-full border-[5px] border-white justify-center items-center">
              <Image source={cuidado.image} className="h-14 w-14" resizeMode="contain" />
            </View>

            <View>
              <Text className="font-poppinsSemiBold text-[20px]">{cuidado.name}</Text>
              <Text className="font-poppins text-sm">Precios por noche</Text>
            </View>

            <View className="flex flex-col my-8 space-y-5">
              {cuidado.pesos.map((p, i) => (
                <View key={i} className="flex flex-row items-center">
                  <Text className="text-base font-poppinsBold">{p.peso}</Text>
                  <View className="flex-grow h-px bg-black mx-2"></View>
                  <Text className="font-poppins text-base">{p.precio} $</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
  <Text className="h-9 rounded-md"></Text>;
};

export default PriceTab;
