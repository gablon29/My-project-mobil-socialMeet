import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ImagenMascota = () => {
  return (
    <View className="justify-center items-center my-7">
      <TouchableOpacity className="flex justify-center items-center rounded-xl bg-naranja w-60 h-52" onPress={() => alert('no implkementado')}>
        <Icon name="plus" size={60} color="white" />
        {/* <Image className='rounded-full' source={!url ? cruz : { uri: url }} style={{ width: 144, height: 144 }} /> */}
      </TouchableOpacity>
      <Text className="text-xl text-center font-poppinsBold w-52 mb-7 mt-4">Añade una imagen de tu mascota</Text>
    </View>
  );
};

export default ImagenMascota;
