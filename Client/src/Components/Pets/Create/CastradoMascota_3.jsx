import React from 'react';
import { View, Text } from 'react-native';
import ButtonTextRounder from '../../Buttons/ButtonTextRounder';

const CastradoMascota_3 = ({ okWithDogs, setHealthOkWithDogs, setValida }) => {
  const onPress = (v) => {
    if (v !== null) {
      setValida(false);
    } else {
      setValida(true);
    }
    setHealthOkWithDogs(v);
  };

  return (
    <View className="justify-center items-center my-7">
      <Text className="text-2xl text-center font-poppinsBold mb-7">¿Se lleva bien con {"\n"} perros?</Text>
      <View className="flex flex-row">
        <ButtonTextRounder texto="Si" activado={okWithDogs === true ? true : false} onPress={() => onPress(true)} />
        <ButtonTextRounder texto="No" activado={okWithDogs === false ? true : false} onPress={() => onPress(false)} />
      </View>
    </View>
  );
};

export default CastradoMascota_3;
