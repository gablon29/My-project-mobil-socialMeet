import React from 'react';
import { View, Text } from 'react-native';
import ButtonTextRounder from '../../Buttons/ButtonTextRounder';

const CastradoMascota_4 = ({ okWithCats, setHealthOkWithCats, setValida }) => {
  const onPress = (v) => {
    if (v !== null) {
      setValida(false);
    } else {
      setValida(true);
    }
    setHealthOkWithCats(v);
  };

  return (
    <View className="justify-center items-center my-7">
      <Text className="text-xl text-center font-poppinsBold w-48 mb-7">¿Se lleva bien con gatos?</Text>
      <View className="flex flex-row">
        <ButtonTextRounder texto="Si" activado={okWithCats === true ? true : false} onPress={() => onPress(true)} />
        <ButtonTextRounder texto="No" activado={okWithCats === false ? true : false} onPress={() => onPress(false)} />
      </View>
    </View>
  );
};

export default CastradoMascota_4;
