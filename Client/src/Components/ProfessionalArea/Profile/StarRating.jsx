import React from 'react';
import { View } from 'react-native';
import Star from './Star';

const StarRating = ({ rating }) => {

  return (
    <View className="flex flex-row items-center ">
      {[1, 2, 3, 4, 5].map((d, i) => (
        <Star key={i} color={i + 1 <= rating ? '#FB6726' : '#000000'} />
      ))}
    </View>
  );
};

export default StarRating;
