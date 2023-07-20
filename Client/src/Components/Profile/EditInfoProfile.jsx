import React, { useEffect, useState } from 'react';
import { View, Image, TextInput, Text, ScrollView, TouchableOpacity } from 'react-native';
import Delete from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../Buttons/ButtonCuston';
import { useImage } from '../../CustomHooks/useImage';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../../CustomHooks/useAuth';
import { ReloadAuthMethod, editUser } from '../../metodos/authMetodos';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setErrorAuth, setLoadingAuth, userRefresh } from '../../Redux/ReducerAuth';
import countrys from '../../../extras/countrys.json';
import { SelectList } from 'react-native-dropdown-select-list';
import cruz from '../../../images/iconos/cruz.png';

const EditInfoProfile = ({ navigation }) => {
  const profile = useSelector((state) => state.ReducerAuth.profile);
  const [countryOptions, setCountryOptions] = useState([]);
  const [provinceOptions, setProvinceOptions] = useState([]);
  const [currentProvinces, setCurrentProvinces] = useState([]);
  const {url, setUrl, uploadImage} = useImage();
  const dispatch = useDispatch();
  const [dissableBnt, setDissableBtn] = useState(true);
  const [require, setRequire] = useState("");
  const { firstName, setFirstName, lastName, setLastName, phone, setPhone, email, setEmail, country, setCountry, province, setProvince, zipcode, setZipcode, editProfile } = useAuth();

  useEffect(() => {
    const countries = countrys.map((country) => country.name);
    setCountryOptions(countries);
  }, []);

  useEffect(() =>{
    setFirstName(profile?.firstName)
    setLastName(profile?.lastName)
    setPhone(profile?.phone)
    setEmail(profile?.email)
    setUrl(profile?.profilePic)
  },[])
  
  useEffect(() => {
    if (country) {
      // Obtener provincias del país seleccionado en el JSON importado
      const selectedCountry = countrys.find((c) => c.name === country);
      if (selectedCountry) {
        const provinces = selectedCountry.provinces;
        setProvinceOptions(provinces);
        setCurrentProvinces(provinces);
        console.log(currentProvinces)
      }
    }
  }, [country]);

  useEffect(()=>{
    if (!firstName || !lastName || !phone || !email || !country || !province) {
      setDissableBtn(false);
      setRequire("Campo Requerido")
    } else {
      setDissableBtn(true)
      setRequire("")
    }
  },[firstName, country, lastName, phone, email, country, province])

  const handleEdit = async (firstName, lastName, phone, email, country, province) => {
    const profile = { firstName: firstName,
        lastName: lastName,
        phone: phone, 
        email: email, 
        country: country, 
        province: province,
        profilePic:  url 
      };
    const token = await AsyncStorage.getItem('Token');
    if (!url) {
      edit(profile, token)
    } else {
      edit(profile, token);
    }
  };

  const edit = async (profile, token) => {
    await editUser({
      profile,
      token,
      setUser: (u) => {
        ReloadAuthMethod({
          loading: (v) => dispatch(setLoadingAuth(v)),
          error: (msg) => dispatch(setErrorAuth(msg)),
          success: (res) => {
            dispatch(userRefresh(res.payload));
            navigation.navigate('Profile');
          },
        });
      },
      loading: (v) => dispatch(authSetLoading(v)),
      error: (msg) => dispatch(authSetError(msg)),
    });
  }

  return (
    <ScrollView>
      <View className="w-screen h-full bg-white items-center pt-10 mb-5">
        <View className="bg-naranja w-40 h-40 rounded-full relative justify-center">
          <TouchableOpacity className="flex justify-center items-center rounded-full bg-naranja w-40 h-40" onPress={() => uploadImage()}>
            <Image source={url ? {uri: url} : cruz} style={url ? { width: 160, height: 160 } : {width: 50, height: 50 }} className="rounded-full" />
          </TouchableOpacity>
          <View className="absolute z-50 -right-4 -top-3 w-16 h-16 bg-black rounded-full justify-center">
            <Button 
              buttonClass="items-center justify-center" 
              component={<Delete name="trash-can-outline" size={32} color="white" />} 
              onPress={()=>setUrl("")}
            />
          </View>
        </View>
        <View className="w-11/12 mt-5 mb-3">
          <Text className="w-full text-left font-bold text-lg">Nombre</Text>
          <TextInput placeholderTextColor={"#F00"} placeholder={require} value={firstName} onChangeText={(text) => setFirstName(text)} className="mb-5 shadow-lg shadow-black w-full h-10 pl-3 rounded-lg bg-gris" />
          <Text className="w-full text-left font-bold text-lg">Apellidos</Text>
          <TextInput placeholderTextColor={"#F00"} placeholder={require} value={lastName} onChangeText={(text) => setLastName(text)} className="mb-5 shadow-lg shadow-black w-full h-10 pl-3 rounded-lg bg-gris" />
          <Text className="w-full text-left font-bold text-lg">Email</Text>
          <TextInput placeholderTextColor={"#F00"} placeholder={require} value={email} onChangeText={(text) => setEmail(text)} className="mb-5 shadow-lg shadow-black w-full h-10 pl-3 rounded-lg bg-gris" />
          <Text className="w-full text-left font-bold text-lg">Télefono</Text>
          <TextInput placeholderTextColor={"#F00"} placeholder={require} value={phone} onChangeText={(text) => setPhone(text)} className="mb-5 shadow-lg shadow-black w-full h-10 pl-3 rounded-lg bg-gris" />
          <Text className="w-full text-left font-bold text-lg">País</Text>
          <SelectList
            data={countryOptions}
            setSelected={setCountry}
            placeholder="Seleccionar"
            defaultOption={{key: profile?.country, value:profile?.country}}
            search={false}
            /* onSelect={console.log("mis provincias son ", currentProvinces)} */
            boxStyles={{
              backgroundColor: '#DADADA',
              borderRadius: 10,
              borderColor: '#DADADA',
              
            }}
            inputStyles={{
              fontSize: 12,
              fontFamily:"Poppins"

            }}
            dropdownStyles={{
              backgroundColor: '#DADADA',
            
            }}
          />
          <Text className="w-full text-left font-bold text-lg">Provincia</Text>
          <SelectList
            data={provinceOptions}
            setSelected={setProvince}
            placeholder="Seleccionar"
            defaultOption={country === profile?.country ? {key: profile?.province, value:profile?.province} : {key: currentProvinces[0], value: currentProvinces[0]} }
            search={false}
            boxStyles={{
              backgroundColor: '#DADADA',
              borderRadius: 10,
              borderColor: '#DADADA',
              fontFamily:"Poppins"
            }}
            inputStyles={{
              fontSize: 12
            }}
            dropdownStyles={{ backgroundColor: '#DADADA' }}
          />
        </View>
        <View className="mt-2">
        <Button 
          title="Guardar Información"
          buttonClass="bg-naranja rounded-3xl p-2 h-10 items-center w-7/12 shadow-xl shadow-lg shadow-black" 
          titleClass="font-semibold text-white text-base" 
          onPress={() => handleEdit(firstName, lastName, phone, email, country, province)}
          dissable={dissableBnt}
        />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditInfoProfile;
