import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ImagenMascota = ({ profile, setProfile, setValida }) => {
  console.log(profile)
  return (
    <View className="justify-center items-center my-7">
      <TouchableOpacity className="flex justify-center items-center rounded-xl bg-new w-60 h-52" onPress={() => setProfile()}>
        {profile ? <Image source={{ uri: profile }} style={{ width: 240, height: 208 }} className='rounded-xl' /> : <Icon name="plus" size={60} color="white" />}
      </TouchableOpacity>
      <Text className="text-2xl text-center font-poppinsBold mb-7 mt-4">Añade una imagen {"\n"} de tu mascota</Text>
    </View>
  );
};

export default ImagenMascota;
