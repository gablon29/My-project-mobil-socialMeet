import React from 'react';
import { View, Text, PanResponder, StyleSheet } from 'react-native';







const EdadMascota = ({ years, months, setAgeYears, setAgeMonths, setValida }) => {
  const panResponderAnos = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      const { dx, dy } = gestureState;
      const isHorizontalSwipe = Math.abs(dx) > Math.abs(dy);
      if (isHorizontalSwipe) {
        if (dx > 0) {
          setAgeYears(years + 1);
          if (years + 1 || months) {
            setValida(false);
          } else {
            setValida(true);
          }
        } else {
          setAgeYears(Math.max(years - 1, 0));
          if (years - 1 || months) {
            setValida(false);
          } else {
            setValida(true);
          }
        }
      }
    },
  });

  const panResponderMeses = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      const { dx, dy } = gestureState;
      const isHorizontalSwipe = Math.abs(dx) > Math.abs(dy);
      if (isHorizontalSwipe) {
        if (dx > 0) {
          setAgeMonths(months + 1);
          if (years || months + 1) {
            setValida(false);
          } else {
            setValida(true);
          }
        } else {
          setAgeMonths(Math.max(months - 1, 0));
          if (years || months - 1) {
            setValida(false);
          } else {
            setValida(true);
          }
        }
      }
    },
  });

  return (
    <View className="justify-center items-center my-7">
      <Text className="text-xl text-center font-poppinsBold w-48 mb-7">¿Qué edad tiene?</Text>
      <View style={styles.horizontalLine}></View>
      <View className="flex flex-row" {...panResponderAnos.panHandlers}>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-xl font-poppinsBold text-gray-400">{Math.max(years + 2, 0)}</Text>
        </View>
        
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-2xl font-poppinsBold text-gray-600">{Math.max(years + 1, 0)}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-3xl font-poppinsBold">{Math.max(years, 0)}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-2xl font-poppinsBold text-gray-600">{years - 1}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-xl font-poppinsBold text-gray-400">{years - 2}</Text>
        </View>
      </View>
      <Text className="font-poppinsBold">Años</Text>
      <View style={styles.horizontalLine}></View>

      <View className="flex flex-row" {...panResponderMeses.panHandlers}>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-xl font-poppinsBold text-gray-400">{Math.max(months + 2, 0)}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-2xl font-poppinsBold text-gray-600">{Math.max(months + 1, 0)}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-3xl font-poppinsBold">{Math.max(months, 0)}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-2xl font-poppinsBold text-gray-600">{months - 1}</Text>
        </View>
        <View className="w-12 h-12 justify-center items-center">
          <Text className="text-xl font-poppinsBold text-gray-400">{months - 2}</Text>
        </View>
      </View>
      <Text className="font-poppinsBold">Meses</Text>
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
export default EdadMascota;

