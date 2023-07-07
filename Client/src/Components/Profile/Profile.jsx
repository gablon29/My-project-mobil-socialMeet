import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import Button from '../Buttons/Button';
import { AdressIcon, CardIcon, ChatIcon, InvoiceIcon, ProfileIcon, ReportIcon } from '../../icons/LowerMenuBarIcons';

const ProfileComponent = ({ navigation }) => {
  const authenticatedAuth = useSelector((state) => state.ReducerAuth.authenticatedAuth);
  const profile = useSelector((state) => state.ReducerAuth.profile);
  const [mounted, setMounted] = useState(1);

  const Perfil = ({profile}) => (
    <>
      <View className="relative mb-2">
        <Image source={{ uri: profile?.profilePic }} className="w-32 h-32 rounded-full bg-gray-400" />
        <TouchableOpacity className="absolute top-2 right-2 bg-blue-500 rounded-full p-2">
          <Feather name="edit" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Text className="text-xl font-bold mb-1">
        {profile.firstName} {profile.lastName}
      </Text>
      <Text className="text-gray-500 text-sm">{profile.province}</Text>

      <View className="flex items-center mt-8">
        <Button title="Mis mascotas" colorButton="bg-black" colorText="text-white" ancho="w-56" alto="h-10" textSize="text-xs" onPress={() => navigation.navigate('MyPets')} />
      </View>
    </>
  );

  const PlaceJolder = ({name}) => (
    <View className="relative mb-2">
      <Text>{name}</Text>
    </View>
  );

  const IconButtons = ({iconComponent,newStep}) => 
    <TouchableOpacity className="relative rounded-full p-2" onPress={() => setMounted(newStep)}>
        {React.createElement(iconComponent, { width: 48, height: 48 })}
        
      </TouchableOpacity>
  

  const LowerBar = (props) => (
    <View className=" absolute bottom-14 h-14 w-10/12 flex flex-row mb-1 bg-naranja rounded-full">
      <IconButtons iconComponent={ProfileIcon} newStep={1}/>
      <IconButtons iconComponent={AdressIcon} newStep={2}/>
      <IconButtons iconComponent={CardIcon} newStep={3}/>
      <IconButtons iconComponent={InvoiceIcon} newStep={4}/>
      <IconButtons iconComponent={ChatIcon} newStep={5}/>
      <IconButtons iconComponent={ReportIcon} newStep={6}/>


    </View>
  );
  return (
    <View className="flex items-center my-5 h-full">
      {mounted === 1 ? <Perfil profile={profile}/> : <></>}
      {mounted === 2 ? <PlaceJolder name={'Adresses'}/> : <></>}
      {mounted === 3 ? <PlaceJolder name={'Tarjetas'}/> : <></>}
      {mounted === 4 ? <PlaceJolder name={'Facturación'}/> : <></>}
      {mounted === 5 ? <PlaceJolder name={'Un Cha'}/> : <></>}
      {mounted === 6 ? <PlaceJolder name={'Soporte'}/> : <></>}

      {LowerBar()}
    </View >
  );
};

export default ProfileComponent;
