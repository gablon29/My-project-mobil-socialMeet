import React from 'react';
import { View, Text, PanResponder, StyleSheet } from 'react-native';

const EdadMascota = ({ years, months, setAgeYears, setAgeMonths, setValida }) => {
  let anosTimeout, mesesTimeout;

  const delayedSetAgeYears = (years) => {
    clearTimeout(anosTimeout);
    anosTimeout = setTimeout(() => {
      setAgeYears(years);
      handleValidation(years, months);
    }, 30); // 300 milisegundos de retraso antes de la actualización
  };

  const delayedSetAgeMonths = (months) => {
    clearTimeout(mesesTimeout);
    mesesTimeout = setTimeout(() => {
      setAgeMonths(months);
      handleValidation(years, months);
    }, 30); // 300 milisegundos de retraso antes de la actualización
  };

  const handleValidation = (years, months) => {
    if (years || months) {
      setValida(false);
    } else {
      setValida(true);
    }
  };

  const panResponderAnos = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      const { dx, dy } = gestureState;
      const isHorizontalSwipe = Math.abs(dx) > Math.abs(dy);
      if (isHorizontalSwipe) {
        if (dx > 0) {
          delayedSetAgeYears(years + 1);
        } else {
          delayedSetAgeYears(Math.max(years - 1, 0));
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
          delayedSetAgeMonths(months + 1);
        } else {
          delayedSetAgeMonths(Math.max(months - 1, 0));
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

