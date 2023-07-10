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
        <ButtonImageRounder activado={sex === 'Macho' ? true : false} texto="Macho" onPress={() => onPress('Macho')}>
          <Icon name="gender-male" size={60} color={sex === 'Macho' ? 'white' : 'gray'} />
        </ButtonImageRounder>
        <ButtonImageRounder activado={sex === 'Hembra' ? true : false} texto="Hembra" onPress={() => onPress('Hembra')}>
          <Icon name="gender-female" size={60} color={sex === 'Hembra' ? 'white' : 'gray'} />
        </ButtonImageRounder>
      </View>
    </View>
  );
};

export default SexoMascota;
