import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loading = ({ loading, children }) => {
  if (loading) {
    return (
      <View className="bg-white justify-center items-center">
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );
  }

  return children;
};

export default Loading;
