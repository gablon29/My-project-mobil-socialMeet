import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import Button from '../Buttons/Button';

export const CreatePet3 = ({ steps, setSteps, specie, name, setName, weight, setWeight, age, setAge, breed, setBreed, sex, setSex }) => {
  const options = ['ShiTzu', 'Salchicha', 'Poodle'];

  const dogOptions = ['ShiTzu', 'Salchicha', 'Poodle'];
  const catOptions = ['Persa', 'Normal', 'Siberiano'];
  const otherOptions = ['opción 1', 'opción 2', 'opción 3'];

  // para que al apretar enter se pase al sigiente cosito
  const ref_n = useRef();
  const ref_w = useRef();
  const ref_ay = useRef();
  const ref_am = useRef();

  const datos_llenados = name && weight && age && breed && sex;

  useEffect(() => {
    if (ref_n.current) {
      ref_n.current.focus();
    }
  }, []);

  return (
    <View className="w-screen h-screen">
      <Text className="font-poppinsBold text-center mt-16">¿Cómo se llama tu mascota?</Text>
      <TextInput placeholder="" value={name} onChangeText={(text) => setName(text)} autoFocus={true} ref={ref_n} returnKeyType="next" onSubmitEditing={() => ref_w.current.focus()} className="w-full rounded-full bg-gris h-10 px-4 mb-4" />
      <Text className="font-poppinsBold text-center">Peso en KG</Text>
      <TextInput placeholder="" value={weight} onChangeText={(text) => setWeight(text)} ref={ref_w} returnKeyType="next" onSubmitEditing={() => ref_ay.current.focus()} className="w-full rounded-full bg-gris h-10 px-4 mb-4" keyboardType="numeric" />
      <View className="flex flex-row">
        <View className="flex-1">
          <Text className="font-poppinsBold text-center">Edad (Años)</Text>
          <TextInput placeholder="" value={age.years} returnKeyType="next" ref={ref_ay} onSubmitEditing={() => ref_am.current.focus()} onChangeText={(text) => setAge.setAgeYears(text)} className="w-full rounded-full bg-gris h-10 px-4 mb-4" keyboardType="numeric" />
        </View>
        <View className="flex-1">
          <Text className="font-poppinsBold text-center">Edad en (Meses)</Text>
          <TextInput placeholder="" value={age.months} ref={ref_am} onChangeText={(text) => setAge.setAgeMonths(text)} className="w-full rounded-full bg-gris h-10 px-4 mb-4" keyboardType="numeric" />
        </View>
      </View>

      <Text className="font-poppinsBold text-center">Raza de la mascota</Text>
      <SelectList
        data={specie == 'Perro' ? dogOptions : specie == 'Gato' ? catOptions : otherOptions}
        setSelected={setBreed}
        placeholder="Seleccionar"
        search={false}
        fontFamily="Poppins"
        boxStyles={{
          backgroundColor: '#DADADA',
          borderRadius: 999,
          borderColor: '#DADADA',
        }}
        dropdownStyles={{ backgroundColor: '#DADADA' }}
      />
      <View className="flex mt-3">
        <Text className="font-poppinsBold text-center">Sexo</Text>
        <View className="flex flex-row">
          <View className="flex-1 mx-3">
            <TouchableOpacity onPress={() => setSex('Macho')} className={sex == 'Macho' ? 'bg-orange-500 rounded-full' : 'bg-gris rounded-full'}>
              <Text className="font-poppinsBold text-center">Macho</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-1 mx-3">
            <TouchableOpacity onPress={() => setSex('Hembra')} className={sex == 'Hembra' ? 'bg-orange-500 rounded-full' : 'bg-gris rounded-full'}>
              <Text className="font-poppinsBold text-center">Hembra</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="flex flex-row justify-between mx-6 mt-48">
        <Button title="Atrás" onPress={() => setSteps(1)} colorButton="bg-black" colorText="text-white" ancho="w-40" alto="h-11" textSize="text-base" />
        <Button
          title="Continuar"
          onPress={() => {
            datos_llenados ? setSteps(3) : Alert.alert('Falta completara campos.');
          }}
          colorButton={datos_llenados ? 'bg-naranja' : 'bg-gris'}
          colorText="text-white"
          ancho="w-40"
          alto="h-11"
          textSize="text-base"
        />
      </View>
    </View>
  );
};
