import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loading = ({ children, loading, auth }) => {

  const navigation = useNavigation()

  if (loading) {
    return (
      <View className="bg-white justify-center items-center w-screen h-screen">
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }
  if (auth) {
    navigation.navigate('Home');
    return;
  }

  return children;
};

export default Loading;
