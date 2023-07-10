import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ButtonImageRounder from '../../Buttons/ButtonImageRounder';

const SexoMascota = ({ setSex, sex, setValida }) => {
  const onPress = (v) => {
    if (v) {
      setValida(false);
    } else {
      setValida(true);
    }
    setSex(v);
  };

  return (
    <View className="justify-center items-center my-7">
      <Text className="text-xl text-center font-poppinsBold w-48 mb-7">¿Cuál es su sexo?</Text>
      <View className="flex flex-row">
        <ButtonImageRounder activado={true} texto="Macho">
          <Icon name="gender-male" size={60} color={true ? 'white' : 'gray'} />
        </ButtonImageRounder>
        <ButtonImageRounder activado={false} texto="Hembra">
          <Icon name="gender-female" size={60} color={false ? 'white' : 'gray'} />
        </ButtonImageRounder>
      </View>
    </View>
  );
};

export default SexoMascota;
