import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, FlatList } from 'react-native';

import { AdressIcon, CardIcon, ChatIcon, InvoiceIcon, ProfileIcon, ReportIcon } from '../../icons/LowerMenuBarIcons';
import Checkout from '../Stripe/Checkout';
import DisplayProfile from './DisplayProfile';
import DisplayAddress from './DisplayAddress';
import AddCard from '../Stripe/AddCard';
import DisplaySupport from './DisplaySupport';

const ProfileComponent = ({ navigation, props }) => {
  const [mounted, setMounted] = useState(1);
  const PlaceJolder = ({ name }) => (
    <View className="relative mb-2">
      <Text>{name}</Text>
    </View>
  );

  const IconButtons = ({ iconComponent, newStep, rounder }) => (
    <TouchableOpacity className={`w-1/6 ${rounder}`} onPress={() => setMounted(newStep)}>
      <View className={`w-fit h-full justify-center items-center ${rounder}`}>{React.createElement(iconComponent, { width: 36, height: 36, color: newStep == mounted ? '#000' : '#FFF' })}</View>
    </TouchableOpacity>
  );

  const LowerBar = (props) => (
    <View className="absolute bottom-5 h-14 w-11/12 flex flex-row bg-naranja rounded-full">
      <IconButtons iconComponent={ProfileIcon} newStep={1} rounder="rounded-l-full" />
      <IconButtons iconComponent={AdressIcon} newStep={2} />
      <IconButtons iconComponent={CardIcon} newStep={3} />
      <IconButtons iconComponent={InvoiceIcon} newStep={4} />
      <IconButtons iconComponent={ChatIcon} newStep={5} />
      <IconButtons iconComponent={ReportIcon} newStep={6} rounder="rounded-r-full" />
    </View>
  );

  //LE QUEDO MUY BUENO SU DRAWER, QUE LIBRERIAS NI QUE OCHO CUARTOS ACA SOMOS ENTEROS PROS
  //LE ISE UNOS AJUSTES PARA QUE SE LE VIERA MAS BAKANO XD CON AMOR DON TOULON ♥
  //

  return (
    <View className="justify-center items-center relative h-full w-screen">
      {mounted === 1 ? <DisplayProfile  navigation={navigation}/> : null}
      {mounted === 2 ? <DisplayAddress /> : null}
      {mounted === 3 ? <Checkout /> : null}
      {mounted === 4 ? <AddCard  /> : null}
      {mounted === 5 ? <PlaceJolder name={'Un Cha'} /> : null}
      {mounted === 6 ? <DisplaySupport name={'Soporte'} /> : null}

      <LowerBar />
      <View className="h-40"></View>
    </View>
  );
};

export default ProfileComponent;
