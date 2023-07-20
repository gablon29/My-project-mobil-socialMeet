import React, { useEffect } from 'react';
import { View, Text, Image, ScrollView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Buttons/ButtonWithIcon';
import Icon from 'react-native-vector-icons/AntDesign';
import Email from 'react-native-vector-icons/Fontisto';
import Phone from 'react-native-vector-icons/Feather';
import Location from 'react-native-vector-icons/EvilIcons';
import Pencil from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';

const DisplayProfile = ({profile}) => {
  const navigation = useNavigation();

  return (
    <View className="w-screen h-full">
      <ScrollView>
        <View 
        style={{
                height: 500,
          }} className="relative mx-auto rounded-lg bg-black justify-center items-center mt-28 mb-20 w-11/12">
          <View className="bg-naranja w-32 h-32 rounded-full absolute -top-14">
            <Image source={!profile?.profilePic ? {uri: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"} : { uri: profile?.profilePic }} className='w-[100%] h-[100%] rounded-full' /> 
          </View>
          <View className=" bg-black border-b border-white flex-row pb-3 mb-5 w-11/12">
            <Icon name="idcard" size={32} color="white" className="pr-4" />
            <Text className="text-white text-lg">{profile?.firstName + " " + profile?.lastName}</Text>
          </View>
          <View className="border-b border-white flex-row pb-3 mb-5 w-11/12">
            <Email name="email" size={32} color="white" className="pr-4" />
            <Text className="text-white text-lg">{profile?.email}</Text>
          </View>
          <View className="border-b border-white flex-row pb-3 mb-5 w-11/12">
            <Phone name="phone" size={32} color="white" className="pr-4" />
            <Text className="text-white text-lg">{profile?.phone}</Text>
          </View>
          <View className="border-b border-white flex-row pb-3 mb-5 w-11/12">
            <Location name="location" size={42} color="white" className="pr-4" />
            <Text className="text-white text-lg">{profile?.country}</Text>
          </View>
          <View className="bg-naranja w-64 h-14 rounded-3xl  justify-center flex-row items-center absolute -bottom-5">
            <Button ancho="w-full" alto="h-full" Component={<Pencil name="pencil" size={22} color="white" className="pl-4"/>} onPress={() => {navigation.navigate("EditProfile")}} title="Editar Información" colorText="text-white" textSize="text-base" flexDirection="flex-row"/>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DisplayProfile;
