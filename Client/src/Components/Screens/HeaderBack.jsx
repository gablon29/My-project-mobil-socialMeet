import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderBack = () => {
  const navigation = useNavigation();

  const PrevButton = () => {
    navigation.goBack();
  };

  return (
    <View className="flex flex-row justify-between items-end w-screen h-24 bg-black">
      <TouchableOpacity className="p-1 m-2 rounded-full" onPress={PrevButton}>
        <Icon name="arrow-left" size={36} color="white" />
      </TouchableOpacity>
      <Image source={require('../../../images/logo.png')} className="w-32 h-10 mb-2" resizeMode="contain" />
      <TouchableOpacity className="p-1 m-2 rounded-full">
        <Icon name="arrow-left" size={36} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBack;
