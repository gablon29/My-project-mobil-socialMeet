import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import { useSelector } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import Button from '../Buttons/Button';


const DisplayProfile = ({ navigation }) => {
  const profile = useSelector((state) => state.ReducerAuth.profile);
  return (
    <View className="w-screen h-full">
        <View className="relative mx-auto my-60 w-11/12 h-[448px] rounded-lg bg-black justify-center items-center">
          <View className="bg-naranja w-32 h-32 rounded-full absolute -top-14">
          </View>
          <View className="bg-naranja w-64 h-14 rounded-3xl absolute -bottom-5">
          </View>
        </View>
      {/* <View className="relative mb-2">
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
      </View> */}
    </View>
  );
};

export default DisplayProfile;
