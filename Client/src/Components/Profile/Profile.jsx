import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, FlatList } from 'react-native';

import { AdressIcon, CardIcon, ChatIcon, InvoiceIcon, ProfileIcon, ReportIcon } from '../../icons/LowerMenuBarIcons';
import Checkout from '../Stripe/Checkout';
import DisplayProfile from './DisplayProfile';
import DisplayAddress from './DisplayAddress';

const ProfileComponent = ({ navigation }) => {
  const [mounted, setMounted] = useState(1);
  const PlaceJolder = ({ name }) => (
    <View className="relative mb-2">
      <Text>{name}</Text>
    </View>
  );

  const IconButtons = ({ iconComponent, newStep }) => (
    <TouchableOpacity className="relative rounded-full p-2" onPress={() => setMounted(newStep)}>
      {React.createElement(iconComponent, { width: 48, height: 48 })}
    </TouchableOpacity>
  );
  

  const LowerBar = (props) => (
    <View className=" absolute bottom-14 h-14 w-10/12 flex flex-row mb-1 bg-naranja rounded-full">
      <IconButtons iconComponent={ProfileIcon} newStep={1} />
      <IconButtons iconComponent={AdressIcon} newStep={2} />
      <IconButtons iconComponent={CardIcon} newStep={3} />
      <IconButtons iconComponent={InvoiceIcon} newStep={4} />
      <IconButtons iconComponent={ChatIcon} newStep={5} />
      <IconButtons iconComponent={ReportIcon} newStep={6} />
    </View>
  );
 




  return (
    <View className="flex items-center my-5 h-full">
      {mounted === 1 ? <DisplayProfile/> : null}
      {mounted === 2 ? <DisplayAddress /> : null}
      {mounted === 3 ? <Checkout /> : null}
      {mounted === 4 ? <PlaceJolder name={'Facturación'} /> : null}
      {mounted === 5 ? <PlaceJolder name={'Un Cha'} /> : null}
      {mounted === 6 ? <PlaceJolder name={'Soporte'} /> : null}

      {LowerBar()}
    </View>
  );
};

export default ProfileComponent;
