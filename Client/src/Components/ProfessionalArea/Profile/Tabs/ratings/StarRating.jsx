import React from 'react';
import { Text, View } from 'react-native';
import Star from './Star';

const StarRating = ({ rating }) => {
  const totalStars = [1, 2, 3, 4, 5];

  return (
    <View className="flex flex-row items-center ">
      {totalStars.map((d, i) => (
        <Star key={i} color={i + 1 <= rating ? '#FB6726' : '#000000'} />
      ))}
    </View>
  );
};

export default StarRating;
