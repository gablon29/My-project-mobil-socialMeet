import React, { useEffect, useState } from "react";
import { View, Text, FlatList, PanResponder, StyleSheet } from 'react-native';

const PesoMascota = ({ kilos, gramos, setKilos, setGramos, setValida }) => {
  let kilosTimeout, gramosTimeout;

  const delayedSetKilos = (kilos) => {
    clearTimeout(kilosTimeout);
    kilosTimeout = setTimeout(() => {
      setKilos(kilos);
      handleValidation(kilos, gramos);
    }, 300); // 300 milisegundos de retraso antes de la actualización
  };

  const delayedSetGramos = (gramos) => {
    clearTimeout(gramosTimeout);
    gramosTimeout = setTimeout(() => {
      setGramos(gramos);
      handleValidation(kilos, gramos);
    }, 300); // 300 milisegundos de retraso antes de la actualización
  };

  const handleValidation = (kilos, gramos) => {
    if (kilos || gramos) {
      setValida(false);
    } else {
      setValida(true);
    }
  };

  const panResponderKilos = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      const { dx, dy } = gestureState;
      const isHorizontalSwipe = Math.abs(dx) > Math.abs(dy);
      if (isHorizontalSwipe) {
        if (dx > 0) {
          setValida(true);
          delayedSetKilos(kilos + 1);
        } else {
          if (kilos > 0) {
            delayedSetKilos(kilos - 1);
          }
        }
      }
    },
  });

  const panResponderGramos = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      const { dx, dy } = gestureState;
      const isHorizontalSwipe = Math.abs(dx) > Math.abs(dy);
      if (isHorizontalSwipe) {
        if (dx > 0) {
          delayedSetGramos(gramos + 5);
        } else {
          if (gramos > 0) {
            delayedSetGramos(gramos - 5);
          }
        }
      }
    },
  });

  return (
    <View className="justify-center items-center my-7">
      <Text className="text-2xl text-center font-poppinsBold mb-7">¿Cuanto pesa?</Text>
      <View style={styles.horizontalLine}></View>

      <View className="flex flex-row" {...panResponderKilos.panHandlers}>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-xl font-poppinsBold text-gray-400">{kilos + 2}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-2xl font-poppinsBold text-gray-600">{kilos + 1}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-3xl font-poppinsBold">{kilos}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-2xl font-poppinsBold text-gray-600">{kilos - 1}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-xl font-poppinsBold text-gray-400">{kilos - 2}</Text>
        </View>
      </View>
      <Text className="font-poppins">Kilos</Text>
      <View style={styles.horizontalLine}></View>

      <View className="flex flex-row" {...panResponderGramos.panHandlers}>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-xl font-poppinsBold text-gray-400">{gramos + 5}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-2xl font-poppinsBold text-gray-600">{gramos + 10}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-3xl font-poppinsBold">{gramos}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-2xl font-poppinsBold text-gray-600">{gramos - 5}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-xl font-poppinsBold text-gray-400">{gramos - 10}</Text>
        </View>
      </View>
      <Text className="font-poppins">Gramos</Text>
      <View style={styles.horizontalLine}></View>

    </View>
  );
};
const styles = StyleSheet.create({
  horizontalLine: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc',
    marginBottom: 8
  },
});
export default PesoMascota;