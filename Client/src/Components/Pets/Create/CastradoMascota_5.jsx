import React from 'react';
import { View, Text } from 'react-native';
import ButtonTextRounder from '../../Buttons/ButtonTextRounder';

const CastradoMascota_5 = () => {
  return (
    <View className="justify-center items-center my-7">
      <Text className="text-xl text-center font-poppinsBold w-48 mb-7">¿Se lleva bien con niños?</Text>
      <View className="flex flex-row">
        <ButtonTextRounder texto="Si" activado={false} />
        <ButtonTextRounder texto="No" activado={true} />
      </View>
    </View>
  );
};

export default CastradoMascota_5;
