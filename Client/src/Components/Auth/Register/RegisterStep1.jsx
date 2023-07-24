import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
/* import { Picker } from "@react-native-picker/picker"; */ // más adelante cambiar el SelectList por este para ver si los estilos quedan mejor
import React, { useEffect, useState } from 'react';
import logo from '../../../../images/logo.png';
import Button from '../../Buttons/Button';
import { SelectList } from 'react-native-dropdown-select-list';
import countrys from '../../../../extras/countrys.json';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorAuth } from '../../../Redux/ReducerAuth';

export default function RegisterStep1(props) {
  const { authenticatedAuth, loadingAuth, errorAuth, profile, token } = useSelector((state) => state.ReducerAuth);
  const dispatch = useDispatch();
  const { email, setEmail, firstName, setFirstName, lastName, setLastName, phone, setPhone, country, setCountry, province, setProvince, zipcode, setZipcode, confirmEmail, setConfirmEmail, setRegisterSteps, navigation } = props;

  const [countryOptions, setCountryOptions] = useState([]);
  const [provinceOptions, setProvinceOptions] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');

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

  const nextRegistro = () => {
    if (!email || !firstName || !lastName || !phone || !country || !province || !zipcode || !confirmEmail) {
      dispatch(setErrorAuth('Falta Campos por Completar para Registrarse'));
      return;
    }
    if (email !== confirmEmail) {
      dispatch(setErrorAuth('Correos no coinciden'));
      return;
    }
    dispatch(setErrorAuth(''));
    setRegisterSteps(1);
  };

  return (
    <ScrollView className="bg-white">
      <View className="flex-1 items-center justify-center bg-white my-12">
        <Image source={logo} />

        <View className="w-4/5 mt-5">
          <Text className="font-poppins">Nombre</Text>
          <TextInput placeholder="" value={firstName} onChangeText={(text) => setFirstName(text)} className="w-full rounded-lg bg-rosa h-8 px-4 mb-4" />

          <Text className="font-poppins">Apellidos</Text>
          <TextInput placeholder="" value={lastName} onChangeText={(text) => setLastName(text)} className="w-full rounded-lg bg-rosa h-8 px-4 mb-4" />

          <Text className="font-poppins">Email</Text>
          <TextInput 
              inputMode='email'
              textContentType='emailAddress'
          
          placeholder="" value={email} onChangeText={(text) => setEmail(text)} className="w-full rounded-lg bg-rosa h-8 px-4 mb-4" />

          <Text className="font-poppins">Repetir Email</Text>
          <TextInput
            inputMode='email'
            textContentType='emailAddress'
            
          placeholder="" value={confirmEmail} onChangeText={(text) => setConfirmEmail(text)} className="w-full rounded-lg bg-rosa h-8 px-4 mb-4" />

          <Text className="font-poppins">Teléfono</Text>
          <TextInput placeholder="" value={phone} onChangeText={(text) => setPhone(text)} className="w-full rounded-lg bg-rosa h-8 px-4 mb-4" />
          <Text className="font-poppins">País</Text>
          <SelectList
            data={countryOptions}
            setSelected={setCountry}
            placeholder="Seleccionar"
            search={true}
            boxStyles={{
              backgroundColor: '#FEC89A',
              borderRadius: 10,
              borderColor: '#FEC89A',
              height: 40,
              padding: 10,
            }}
            inputStyles={{
              fontSize: 12,
              fontFamily:"Poppins",
              marginTop: -2

            }}
            dropdownStyles={{
              backgroundColor: '#FEC89A',
            }}
          />

          <View className="flex flex-row">
            <View className="flex-1 mr-2 mt-2">
              <Text className="font-poppins">Provincia</Text>
              <SelectList
                data={provinceOptions}
                setSelected={setProvince}
                placeholder="Seleccionar"
                search={true}
                fontFamily={'Poppins'}
                inputStyles={{
                  fontSize: 12
                }}
                boxStyles={{
                  backgroundColor: '#FEC89A',
                  borderRadius: 10,
                  borderColor: '#FEC89A',
                }}
                dropdownStyles={{ backgroundColor: '#FEC89A' }}
              />
            </View>
            <View className="flex-1 ml-2 mt-2">
              <Text className="font-poppins">Código Postal</Text>
              <TextInput placeholder="" value={zipcode} onChangeText={(text) => setZipcode(text)} className="w-full rounded-lg bg-rosa h-11 px-4 mb-4" />
            </View>
          </View>

          <View className="flex items-center mt-2">
            <Button title="Siguiente" onPress={nextRegistro} borderColor={"border-naranja"} colorButton="bg-white" colorText="text-naranja" ancho="w-40" alto="h-11" textSize="text-base" />
          </View>
        </View>
        <View className="flex min-h-[64px] justify-center">
          <Text className="font-poppins text text-xs text-red-500">{errorAuth}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text className="font-poppins underline text-xs">¿Ya tienes una cuenta? Inicia sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
