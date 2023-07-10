import React from 'react';
import { View, Text } from 'react-native';
import ButtonTextRounder from '../../Buttons/ButtonTextRounder';

const CastradoMascota_5 = ({ okWithChildren, setHealthOkWithChildren, setValida }) => {
  const onPress = (v) => {
    if (v !== null) {
      setValida(false);
    } else {
      setValida(true);
    }
    setHealthOkWithChildren(v);
  };

  return (
    <View className="justify-center items-center my-7">
      <Text className="text-xl text-center font-poppinsBold w-48 mb-7">¿Se lleva bien con niños?</Text>
      <View className="flex flex-row">
        <ButtonTextRounder texto="Si" activado={okWithChildren === true ? true : false} onPress={() => onPress(true)} />
        <ButtonTextRounder texto="No" activado={okWithChildren === false ? true : false} onPress={() => onPress(false)} />
      </View>
    </View>
  );
};

export default CastradoMascota_5;
