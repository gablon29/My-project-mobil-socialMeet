import React from 'react';
import { View, Text } from 'react-native';
import ButtonTextRounder from '../../Buttons/ButtonTextRounder';

const CastradoMascota_2 = ({ microchip, setHealthMicrochip, setValida }) => {
  const onPress = (v) => {
    if (v !== null) {
      setValida(false);
    } else {
      setValida(true);
    }
    setHealthMicrochip(v);
  };

  return (
    <View className="justify-center items-center my-7">
      <Text className="text-2xl text-center font-poppinsBold mb-5">¿Tiene microchip?</Text>
      <View className="flex flex-row">
        <ButtonTextRounder texto="Si" activado={microchip === true ? true : false} onPress={() => onPress(true)} />
        <ButtonTextRounder texto="No" activado={microchip === false ? true : false} onPress={() => onPress(false)} />
      </View>
    </View>
  );
};

export default CastradoMascota_2;
