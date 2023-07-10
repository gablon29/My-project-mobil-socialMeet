import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ButtonTextRounder from '../../Buttons/ButtonTextRounder';

const CastradoMascota_1 = ({ castrado, setHealthCastrado, setValida }) => {
  const onPress = (v) => {
    if (v !== null) {
      setValida(false);
    } else {
      setValida(true);
    }
    setHealthCastrado(v);
  };

  return (
    <View className="justify-center items-center my-7">
      <Text className="text-xl text-center font-poppinsBold w-48 mb-7">¿Está castrado o esterilizado?</Text>
      <View className="flex flex-row">
        <ButtonTextRounder texto="Si" activado={castrado === true ? true : false} onPress={() => onPress(true)} />
        <ButtonTextRounder texto="No" activado={castrado === false ? true : false} onPress={() => onPress(false)} />
      </View>
    </View>
  );
};

export default CastradoMascota_1;
