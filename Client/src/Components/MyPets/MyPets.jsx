import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useEffect } from 'react';
import cruz from '../../../images/iconos/cruz.png';
import ButtonWithImage from '../Buttons/ButtonWithImage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { getPets } from '../../metodos/petsMetodos';
import { getAllPets } from '../../Redux/ReducerPets'; //para despachar se trae la fx de redux/reducer

export default function MyPets({ navigation }) {
   const authenticatedAuth = useSelector((state) => state.ReducerAuth.authenticatedAuth);
   const { userPets, loadingPets, errorPets, successPets } = useSelector((state) => state.ReducerPets);
   const dispatch = useDispatch();

   useEffect(() => {
      const fetchData = async () => {
         try {
            const token = await AsyncStorage.getItem('Token');
            const { pets } = await getPets(token);
            console.log(pets);
            dispatch(getAllPets(pets));
         } catch (error) {
            console.log(error);
         } 
      };

      fetchData();
   }, []);

   return (
      <View className='flex w-full h-full'>
         <ButtonWithImage title='Agregar nueva mascota' colorButton='bg-naranja' colorText='text-white' ancho='w-fit' alto='h-14' textSize='text-base' margins='mt-14 mx-10' image={cruz} imageClasses='w-6 h-6 ml-7' onPress={() => navigation.navigate('CreatePet')} />
         {console.log('MIS MASCOTA-------------------', userPets)}
         <View className='flex flex-row flex-wrap mx-5 mt-14'>
            {userPets.map((element, index) => (
               <View key={index} className='m-1'>
                  <Image source={{ uri: element.profilePic }} style={{ width: 100, height: 100 }} />

                  <View className='bg-naranja rounded-full'>
                     <Text className='font-poppinsBold text-white text-sm text-center'>{element.name}</Text>
                  </View>
               </View>
            ))}
         </View>
      </View>
   );
}
