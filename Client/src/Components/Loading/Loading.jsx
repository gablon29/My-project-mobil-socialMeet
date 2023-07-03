import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loading = ({ loading, auth, children, navigation }) => {
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
