import React, { useState } from "react";
import { View, Text, FlatList, PanResponder } from 'react-native';

const PesoMascota = () => {
  const [kilos, setKilos] = useState(0);
  const [gramos, setGramos] = useState(0);

  const panResponderKilos = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      const { dx, dy } = gestureState;
      const isHorizontalSwipe = Math.abs(dx) > Math.abs(dy);
      if (isHorizontalSwipe) {
        if(dx > 0){
          setKilos(kilos + 1);
        } else {
          setKilos(kilos - 1);
        }
        // setDirection(dx > 0 ? 'right' : 'left');
        // if(direction < 10){
        //   // setDirection(0)
        //   console.log(direction, 10)
        //   setDirection(dx > 0 ? direction + 1 : direction - 1);
        // }
        // setDirection(dx > 0 ? direction + 1 : direction - 1);
      }
    },
    // ,
    // onPanResponderRelease: () => {
    //   setDirection(null);
    // },
  });

  const panResponderGramos = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      const { dx, dy } = gestureState;
      const isHorizontalSwipe = Math.abs(dx) > Math.abs(dy);
      if (isHorizontalSwipe) {
        if(dx > 0){
          setGramos(gramos + 1);
        } else {
          setGramos(gramos - 1);
        }
        // setDirection(dx > 0 ? 'right' : 'left');
        // if(direction < 10){
        //   // setDirection(0)
        //   console.log(direction, 10)
        //   setDirection(dx > 0 ? direction + 1 : direction - 1);
        // }
        // setDirection(dx > 0 ? direction + 1 : direction - 1);
      }
    },
    // ,
    // onPanResponderRelease: () => {
    //   setDirection(null);
    // },
  });

  return (
    <View className="justify-center items-center my-7">
      <Text className="text-xl text-center font-poppinsBold w-48 mb-7">¿Cuanto pesa?</Text>
      <View className="flex flex-row" {...panResponderKilos.panHandlers}>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-xl font-poppinsBold text-gray-400">{kilos - 2}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-2xl font-poppinsBold text-gray-600">{kilos - 1}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-3xl font-poppinsBold">{kilos}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-2xl font-poppinsBold text-gray-600">{kilos + 1}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-xl font-poppinsBold text-gray-400">{kilos + 2}</Text>
        </View>
      </View>
      <Text className="font-poppins">Kilos</Text>
      <View className="flex flex-row" {...panResponderGramos.panHandlers}>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-xl font-poppinsBold text-gray-400">{gramos - 2}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-2xl font-poppinsBold text-gray-600">{gramos - 1}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-3xl font-poppinsBold">{gramos}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-2xl font-poppinsBold text-gray-600">{gramos + 1}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-xl font-poppinsBold text-gray-400">{gramos + 2}</Text>
        </View>
      </View>
      <Text className="font-poppins">Gramos</Text>
    </View>
  );
};

export default PesoMascota;
