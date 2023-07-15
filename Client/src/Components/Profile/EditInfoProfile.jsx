import React, { useEffect, useState } from 'react';
import { View, Image, TextInput, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Delete from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../Buttons/ButtonCuston';
import ButtonIcon from '../Buttons/Button';
import { useSelectImagen } from '../../CustomHooks/useImage';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../../CustomHooks/useAuth';
import { ReloadAuthMethod, editUser } from '../../metodos/authMetodos';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setErrorAuth, setLoadingAuth, userRefresh } from '../../Redux/ReducerAuth';
import countrys from '../../../extras/countrys.json';
import { SelectList } from 'react-native-dropdown-select-list';

const EditInfoProfile = ({ navigation }) => {
  const { selImg, setProfile } = useSelectImagen();
  const profile = useSelector((state) => state.ReducerAuth.profile);
  const [countryOptions, setCountryOptions] = useState([]);
  const [provinceOptions, setProvinceOptions] = useState([]);

  const dispatch = useDispatch();

  const { firstName, setFirstName, lastName, setLastName, phone, setPhone, email, setEmail, country, setCountry, province, setProvince, zipcode, setZipcode, editProfile } = useAuth();

  useEffect(() => {
    const countries = countrys.map((country) => country.name);
    setCountryOptions(countries);
  }, []);

//   useEffect(() =>{
//     setFirstName(profile.firstName)
//     setLastName(profile.lastName)
//     setPhone(profile.phone)
//     setEmail(profile.email)
//     selImg(profile.profilePic)
//   },[])
  
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

  const handleEdit = async (firstName, lastName, phone, email, country, province, profilePic) => {
    const profile = { firstName: firstName,
         lastName: lastName,
          phone: phone, 
          email: email, 
          country: country, 
          province: province,
           profilePic: 
           profilePic };
    const token = await AsyncStorage.getItem('Token');
    await editUser({
      profile,
      token,
      setUser: (u) => {
        ReloadAuthMethod({
          loading: (v) => dispatch(setLoadingAuth(v)),
          error: (msg) => dispatch(setErrorAuth(msg)),
          success: (res) => {
            console.log(res);
            dispatch(userRefresh(res.payload));
            navigation.navigate('Profile');
          },
        });
      },
      loading: (v) => dispatch(authSetLoading(v)),
      error: (msg) => dispatch(authSetError(msg)),
    });
  };

  return (
    <ScrollView>
      <View className="w-screen h-full bg-white items-center pt-10 mb-5">
        <View className="bg-naranja w-40 h-40 rounded-full relative justify-center">
          <TouchableOpacity className="flex justify-center items-center rounded-full bg-naranja w-40 h-40" onPress={() => setProfile()}>
            {selImg.profile ? <Image source={{ uri: selImg.profile }} style={{ width: 160, height: 160 }} className="rounded-full" /> : profile?.profilePic ? <Image source={{ uri: profile.profilePic }} style={{ width: 160, height: 160 }} className="rounded-full" /> : <Icon name="plus" size={60} color="white" />}
          </TouchableOpacity>
          <View className="absolute z-50 -right-4 -top-3 w-16 h-16 bg-black rounded-full justify-center">
            <ButtonIcon title={<Delete name="trash-can-outline" size={32} color="white" />} />
          </View>
        </View>
        <View className="w-11/12 mt-5 mb-3">
          <Text className="w-full text-left font-bold text-lg">Nombre</Text>
          <TextInput placeholder={profile?.firstName} value={firstName} onChangeText={(text) => setFirstName(text)} className="mb-5 shadow-lg shadow-black w-full h-10 pl-3 rounded-full bg-gris" />
          <Text className="w-full text-left font-bold text-lg">Apellidos</Text>
          <TextInput placeholder={profile?.lastName} value={lastName} onChangeText={(text) => setLastName(text)} className="mb-5 shadow-lg shadow-black w-full h-10 pl-3 rounded-full bg-gris" />
          <Text className="w-full text-left font-bold text-lg">Email</Text>
          <TextInput placeholder={profile?.email} value={email} onChangeText={(text) => setEmail(text)} className="mb-5 shadow-lg shadow-black w-full h-10 pl-3 rounded-full bg-gris" />
          <Text className="w-full text-left font-bold text-lg">Télefono</Text>
          <TextInput placeholder={profile?.phone} value={phone} onChangeText={(text) => setPhone(text)} className="mb-5 shadow-lg shadow-black w-full h-10 pl-3 rounded-full bg-gris" />
          <Text className="w-full text-left font-bold text-lg">País</Text>
          <SelectList
            data={countryOptions}
            setSelected={setCountry}
            placeholder="Seleccionar"
            search={false}
            fontFamily="Poppins"
            boxStyles={{
              backgroundColor: '#DADADA',
              borderRadius: 999,
              borderColor: '#DADADA',
            }}
            dropdownStyles={{
              backgroundColor: '#DADADA',
            }}
          />
          {/* <TextInput placeholder={profile?.country} value={country} onChangeText={(text)=>setCountry(text)} className="mb-5 shadow-lg shadow-black w-full h-10 pl-3 rounded-full bg-gris"/> */}
          <Text className="w-full text-left font-bold text-lg">Provincia</Text>
          <SelectList
            data={provinceOptions}
            setSelected={setProvince}
            placeholder="Seleccionar"
            search={false}
            fontFamily={'Poppins'}
            boxStyles={{
              backgroundColor: '#DADADA',
              borderRadius: 999,
              borderColor: '#DADADA',
            }}
            dropdownStyles={{ backgroundColor: '#DADADA' }}
          />
          {/* <TextInput placeholder={profile?.province} value={province} onChangeText={(text)=>setProvince(text)} className="mb-5 shadow-lg shadow-black w-full h-10 pl-3 rounded-full bg-gris"/> */}
          {/* <Text className="w-full text-left font-bold text-lg">Código Postal</Text>
                    <TextInput placeholder={profile?.zipcode} value={zipcode} onChangeText={(text)=>setZipcode(text)} className="mb-5 shadow-lg shadow-black w-full h-10 pl-3 rounded-full bg-gris"/> */}
        </View>
        <Button title="Guardar Información" buttonClass="bg-naranja rounded-3xl p-2 h-10 items-center w-7/12 shadow-xl shadow-black" titleClass="font-semibold text-white text-base" className="shadow- shadow-black" onPress={() => handleEdit(firstName, lastName, phone, email, country, province, selImg.profile)} />
      </View>
    </ScrollView>
  );
};

export default EditInfoProfile;
