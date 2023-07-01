import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import logo from '../../../images/logo.png';
import Button from '../Buttons/Button';
import { SelectList } from 'react-native-dropdown-select-list';
import countrys from '../../../extras/countrys.json';

export default function RegisterStep1(props, { navigation }) {
   const { email, setEmail, firstName, setFirstName, lastName, setLastName, phone, setPhone, country, setCountry, province, setProvince, zipcode, setZipcode, confirmEmail, setConfirmEmail, setRegisterSteps } = props;

   const [countryOptions, setCountryOptions] = useState([]);
   const [provinceOptions, setProvinceOptions] = useState([]);

   useEffect(() => {
      const countries = countrys.map((country) => country.name);
      setCountryOptions(countries);
   }, []);

   const handleCountryChange = (selectedOption) => {
      setCountry(selectedOption.value); // Actualizar el estado country con el valor seleccionado
   };

   useEffect(() => {
      if (country) {
         // Obtener provincias del país seleccionado en el JSON importado
         const selectedCountry = countrys.find((c) => c.name === country);
         if (selectedCountry) {
            const provinces = selectedCountry.provinces;
            setProvinceOptions(provinces);
         }
      }
   }, [country]);

   return (
      <ScrollView className='bg-white'>
         <View className='flex-1 items-center justify-center mt-12 bg-white'>
            <Image source={logo} />

            <View className='w-4/5 mt-5'>
               <Text className='font-poppins'>Nombre</Text>
               <TextInput placeholder='' value={firstName} onChangeText={(text) => setFirstName(text)} className='w-full rounded-full bg-gris h-8 px-4 mb-4' />

               <Text className='font-poppins'>Apellidos</Text>
               <TextInput placeholder='' value={lastName} onChangeText={(text) => setLastName(text)} className='w-full rounded-full bg-gris h-8 px-4 mb-4' />

               <Text className='font-poppins'>Email</Text>
               <TextInput placeholder='' value={email} onChangeText={(text) => setEmail(text)} className='w-full rounded-full bg-gris h-8 px-4 mb-4' />

               <Text className='font-poppins'>Repetir Email</Text>
               <TextInput placeholder='' value={confirmEmail} onChangeText={(text) => setConfirmEmail(text)} className='w-full rounded-full bg-gris h-8 px-4 mb-4' />

               <Text className='font-poppins'>Teléfono</Text>
               <TextInput placeholder='' value={phone} onChangeText={(text) => setPhone(text)} className='w-full rounded-full bg-gris h-8 px-4 mb-4' />
               <Text className='font-poppins'>País</Text>
               <SelectList
                  data={countryOptions}
                  setSelected={setCountry}
                  placeholder='Seleccionar'
                  search={false}
                  fontFamily='Poppins'
                  boxStyles={{
                     backgroundColor: '#DADADA',
                     borderRadius: 999,
                     borderColor: '#DADADA',
                  }}
                  dropdownStyles={{ backgroundColor: '#DADADA' }}
               />

               <View className='flex flex-row'>
                  <View className='flex-1 mr-2'>
                     <Text className='font-poppins'>Provincia</Text>
                     <SelectList
                        data={provinceOptions}
                        setSelected={setProvince}
                        placeholder='Seleccionar'
                        search={false}
                        fontFamily={'Poppins'}
                        boxStyles={{
                           backgroundColor: '#DADADA',
                           borderRadius: 999,
                           borderColor: '#DADADA',
                        }}
                        dropdownStyles={{ backgroundColor: '#DADADA' }}
                     />
                  </View>
                  <View className='flex-1 ml-2'>
                     <Text className='font-poppins'>Código Postal</Text>
                     <TextInput placeholder='' value={zipcode} onChangeText={(text) => setZipcode(text)} className='w-full rounded-full bg-gris h-8 px-4 mb-4' />
                  </View>
               </View>

               <View className='flex items-center mt-2'>
                  <Button title='Siguiente' onPress={() => setRegisterSteps(1)} colorButton='bg-naranja' colorText='text-white' ancho='w-40' alto='h-11' textSize='text-base' />
               </View>
            </View>
            <View className='my-4' />
            <View>
               <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text className='font-poppins underline text-xs'>¿Ya tienes una cuenta? Inicia sesión</Text>
               </TouchableOpacity>
            </View>
         </View>
      </ScrollView>
   );
}
