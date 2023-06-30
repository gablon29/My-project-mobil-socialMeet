import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Button from '../Buttons/Button';

export const CreatePet5 = ({ steps, setSteps, health, setHealth, handleHealthProperty }) => {
   return (
      <View className='w-screen h-screen'>
        {console.log('CREATE PET 5')}
         <View className='flex mt-10'>
            <Text className='font-poppinsBold text-center'>¿Se lleva bien con perros?</Text>
            <View className='flex flex-row'>
               <View className='flex-1 mx-3'>
                  <TouchableOpacity className='bg-naranja rounded-full' onPress={() => handleHealthProperty('okWithDogs', true)}>
                     <Text className='font-poppinsBold text-center text-white'>Si</Text>
                  </TouchableOpacity>
               </View>
               <View className='flex-1 mx-3'>
                  <TouchableOpacity className='bg-naranja rounded-full' onPress={() => handleHealthProperty('okWithDogs', false)}>
                     <Text className='font-poppinsBold text-center text-white'>No</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View>
         <View className='flex mt-3'>
            <Text className='font-poppinsBold text-center'>¿Se lleva bien con gatos?</Text>
            <View className='flex flex-row'>
               <View className='flex-1 mx-3'>
                  <TouchableOpacity className='bg-naranja rounded-full' onPress={() => handleHealthProperty('okWithCats', true)}>
                     <Text className='font-poppinsBold text-center text-white'>Si</Text>
                  </TouchableOpacity>
               </View>
               <View className='flex-1 mx-3'>
                  <TouchableOpacity className='bg-naranja rounded-full' onPress={() => handleHealthProperty('okWithCats', false)}>
                     <Text className='font-poppinsBold text-center text-white'>No</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View>
         <View className='flex mt-3'>
            <Text className='font-poppinsBold text-center'>¿Se lleva bien con niños?</Text>
            <View className='flex flex-row'>
               <View className='flex-1 mx-3'>
                  <TouchableOpacity className='bg-naranja rounded-full' onPress={() => handleHealthProperty('okWithChildren', true)}>
                     <Text className='font-poppinsBold text-center text-white'>Si</Text>
                  </TouchableOpacity>
               </View>
               <View className='flex-1 mx-3'>
                  <TouchableOpacity className='bg-naranja rounded-full' onPress={() => handleHealthProperty('okWithChildren', false)}>
                     <Text className='font-poppinsBold text-center text-white'>No</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View>
         <View className='flex flex-row justify-between mx-6 mt-48'>
            <Button title='Atrás' onPress={() => setSteps(3)} colorButton='bg-black' colorText='text-white' ancho='w-40' alto='h-11' textSize='text-base' />
            <Button
               title='Continuar'
               onPress={() => {
                  setSteps(5);
                  console.log('okWithDogs, Cats, Children', health);
               }}
               colorButton='bg-naranja'
               colorText='text-white'
               ancho='w-40'
               alto='h-11'
               textSize='text-base'
            />
         </View>
      </View>
   );
};
