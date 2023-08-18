import React from 'react';
import { View, Text, Image, ScrollView} from 'react-native';
import Button from '../Buttons/ButtonCuston';
import Email from 'react-native-vector-icons/Fontisto';
import Phone from 'react-native-vector-icons/Feather';
import Location from 'react-native-vector-icons/EvilIcons';
import Pencil from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';

const DisplayProfile = ({profile}) => {
  const navigation = useNavigation();

  return (
    <ScrollView className="bg-white">
      <View className="w-screen h-full items-center py-1">
        <View className="w-11/12 h-[182px] relative mt-10 justify-center">
          <View className="bg-new w-[116px] h-[182px] rounded-lg absolute z-20 border-2 border-black">
                <Image source={!profile?.profilePic ? {uri: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"} : { uri: profile?.profilePic }} className='w-[100%] h-[100%] rounded-lg' /> 
          </View>
          <View className="bg-celeste w-[65%] h-32 self-end z-0 right-0 justify-center items-center" 
          style={{ 
            borderTopLeftRadius: 0, 
            borderTopRightRadius: 20, 
            borderBottomRightRadius: 20, 
            borderBottomLeftRadius: 0 
          }}>
            <Text className="text-white text-base font-poppinsSemiBold w-40 ml-3 ">{profile?.firstName + " " + profile?.lastName}</Text>
          </View>
        </View>
        <View className="w-11/12 rounded-[20px] bg-new h-[171px] mt-10 p-4 justify-evenly">
          <Text className="font-poppinsBold"><Email name="email" size={20} color="black" className="" />    {profile?.email}</Text>
          <Text className="font-poppinsBold"><Phone name="phone" size={20} color="black" className="" />    {profile?.phone}</Text>
          <Text className="font-poppinsBold"><Location name="location" size={20} color="black" className="" />    {profile?.country}</Text>
        </View>
        <Button 
          title={"Editar mi información"}
          titleClass={`font-poppinsBold text-xs text-naranja`}
          buttonClass={`border-2 border-naranja p-2 rounded-[19px] mt-10 w-56 justify-evenly items-center flex-row`}
          component={<Pencil name="pencil" size={15} color="#FB6726" className="pl-4"/>} 
          onPress={() => {navigation.navigate("EditProfile")}} 
        />
      </View>
    </ScrollView>
  );
};

export default DisplayProfile;
