import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Button from '../../Buttons/ButtonCuston';
import { useSelector } from 'react-redux';
import InformationTab from './Tabs/InformationTab';
import PriceTab from './Tabs/PriceTab';
import ReviewsTab from './Tabs/ReviewsTab';
import UserInfo from './UserInfo';
import Pawpoints from './Pawpoints';

const ProfessionalProfile = ({route}) => {

	// const {professional} = route.params
  
	const [tab, setTab] = useState('Información');
  const { firstName, lastName, profilePic, country, province, pawpoints } = useSelector((state)=> state.ReducerAuth.profile)
  const profile = useSelector((state) => state.ReducerAuth.profile);
  console.log(profile);
  return (
    <ScrollView className="">
      <View className="flex flex-col items-center justify-center">
        
				<UserInfo firstName={firstName} lastName={lastName} profilePic={profilePic} country={country} province={province}/>
				<Pawpoints pawpoints={pawpoints}/>
        

        <Text className="w-80 font-poppins text-center font-medium my-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos obcaecati fugiat sapiente inventore! Vero perferendis possimus ab mollitia, est accusamus quasi illum numquam amet velit, ea impedit vitae adipisci nisi!</Text>

        <Button title="Configurar mi perfil" titleClass="text-base text-naranja font-semibold" buttonClass="bg-transparent w-64 h-14 rounded-2xl border-2 border-naranja justify-center items-center mb-8" />

        <View className="relative">
          <View className="z-10 flex flex-row justify-center items-center absolute top-[-8px] right-[-8px] bg-naranja rounded-full w-8 h-8 border border-white ">
            <Text className="text-white text-center font-medium text-xs rounded-full w-5 h-5">3</Text>
          </View>
          <Button title="Calendario de servicios" titleClass="text-white font-semibold text-base" buttonClass="bg-celeste w-64 h-14 rounded-2xl items-center justify-center" />
        </View>
      </View>

      <View className="relative flex flex-col items-center mb-14">
        <View className="flex flex-row mt-10 w-10/12">
          <TouchableOpacity className="w-1/3" onPress={() => setTab('Información')}>
            <Text className={`${tab === 'Información' && 'text-naranja'} text-center font-medium font-poppins`}>Información</Text>
            {tab === 'Información' && <View className="flex-grow h-[4px] bg-black mx-2"></View>}
          </TouchableOpacity>
          <TouchableOpacity className="w-1/3" onPress={() => setTab('Precios')}>
            <Text className={`${tab === 'Precios' && 'text-naranja'} text-center font-medium font-poppins`}>Precios</Text>
            {tab === 'Precios' && <View className="flex-grow h-[4px] bg-black mx-2"></View>}
          </TouchableOpacity>
          <TouchableOpacity className="w-1/3" onPress={() => setTab('Reseñas')}>
            <Text className={`${tab === 'Reseñas' && 'text-naranja'} text-center font-medium font-poppins`}>Reseñas</Text>
            {tab === 'Reseñas' && <View className="flex-grow h-[4px] bg-black mx-1"></View>}
          </TouchableOpacity>
        </View>
        <View className="absolute w-11/12 h-px bg-black bottom-[1px] "></View>
      </View>

      {tab === 'Información' && <InformationTab />}
      {tab === 'Precios' && <PriceTab />}
      {tab === 'Reseñas' && <ReviewsTab />}
      {/* <InformationTab /> */}
      {/* <PriceTab/> */}
    </ScrollView>
  );
};

export default ProfessionalProfile;
