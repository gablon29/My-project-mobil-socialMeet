import React from 'react';
import { View, Text, Image, ScrollView} from 'react-native';
import Button from '../Buttons/ButtonCuston';
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
          }} className="relative mx-auto rounded-lg bg-new justify-center items-center mt-32 mb-20 w-9/12">
          <View className="bg-naranja w-32 h-32 rounded-full absolute -top-14">
            <Image source={!profile?.profilePic ? {uri: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"} : { uri: profile?.profilePic }} className='w-[100%] h-[100%] rounded-full' /> 
          </View>
          <View className="border-b border-white flex-row pb-3 mb-5 w-11/12">
            <Icon name="idcard" size={20} color="black" className="pr-4" />
            <Text className="text-black text-lg">{profile?.firstName + " " + profile?.lastName}</Text>
          </View>
          <View className="border-b border-white flex-row pb-3 mb-5 w-11/12">
            <Email name="email" size={20} color="black" className="pr-4" />
            <Text className="text-black text-lg">{profile?.email}</Text>
          </View>
          <View className="border-b border-white flex-row pb-3 mb-5 w-11/12">
            <Phone name="phone" size={20} color="black" className="pr-4" />
            <Text className="text-black text-lg">{profile?.phone}</Text>
          </View>
          <View className="border-b border-white flex-row pb-3 mb-5 w-11/12">
            <Location name="location" size={20} color="black" className="pr-4" />
            <Text className="text-black text-lg shadow-lg shadow-black">{profile?.country}</Text>
          </View>
          <View className="bg-white border-2 border-naranja w-60 h-12 rounded-3xl shadow-md shadow-black justify-center flex-row items-center absolute -bottom-5">
            <Button 
              buttonClass="flex-row w-full h-full justify-center items-center"
              titleClass="text-naranja text-base font-semibold"
              component={<Pencil name="pencil" size={22} color="#FB6726" className="pl-4"/>} 
              onPress={() => {navigation.navigate("EditProfile")}} 
              title="Editar Información"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DisplayProfile;
