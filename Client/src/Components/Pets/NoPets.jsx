import { View, Text, Image, ActivityIndicator, ScrollView } from 'react-native';
import React from 'react';
import noPets from '../../../images/noPets.png';
import Button from '../Buttons/ButtonCuston';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

export const NoPets = () => {
  const navigation = useNavigation();
  const { loadingPets } = useSelector((state) => state.ReducerPets);

  return (
    <>
      {loadingPets ? (
        <View className="bg-white justify-center items-center w-full h-full">
          <ActivityIndicator size="large" color="#000000" />
        </View>
      ) : (
        <ScrollView className="bg-white">
          <View className="flex-1 h-full items-center justify-center mt-5 bg-white">
            <View className="flex items-center w-screen h-full">
              <Image source={noPets} />
              <View className="my-10">
                <Text className="font-poppinsBold text-center text-lg mt-5">Aún no has añadido ninguna mascota, agrega una ahora</Text>
              </View>
              <View className="flex items-center mt-10">
                <Button title="Añadir mascota" onPress={() => navigation.navigate('AddPet')} 
                  titleClass="text-base text-naranja font-bold" 
                  buttonClass="bg-transparent w-40 h-11 rounded-full border-2 border-naranja justify-center items-center"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
};
