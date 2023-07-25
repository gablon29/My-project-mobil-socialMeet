import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import perro from '../../../../images/especies/ic_perro.png';
import gato from '../../../../images/especies/ic_gato.png';
import ave from '../../../../images/especies/ic_ave.png';
import reptil from '../../../../images/especies/ic_reptil.png';
import pez from '../../../../images/especies/ic_pez.png';
import roedor from '../../../../images/especies/ic_roedor.png';
import ButtonSquareImageTextBorderBlack from '../../Buttons/ButtonSquareImageTextBorderBlack';

const EspecieMascota = ({ setSpecie, specie, setValida }) => {

  const onPress = (v) => {
    if(v){
      setValida(false)
    } else {
      setValida(true)
    }
    setSpecie(v)
  }

  return (
    <View className="justify-center items-center my-7">
      <Text className="text-2xl text-center font-poppinsBold mb-7">¿Cuál es su especie?</Text>
      <View className="flex flex-row">
        <ButtonSquareImageTextBorderBlack texto="Perro" imagen={perro} activado={specie === 'Perro' ? true : false} onPress={() => onPress('Perro')} />
        <ButtonSquareImageTextBorderBlack texto="Gato" imagen={gato} activado={specie === 'Gato' ? true : false} onPress={() => onPress('Gato')} />
        <ButtonSquareImageTextBorderBlack texto="Ave" imagen={ave} activado={specie === 'Ave' ? true : false} onPress={() => onPress('Ave')} />
      </View>
      <View className="flex flex-row mt-4">
        <ButtonSquareImageTextBorderBlack texto="Reptil" imagen={reptil} activado={specie === 'Reptil' ? true : false} onPress={() => onPress('Reptil')} />
        <ButtonSquareImageTextBorderBlack texto="Pez" imagen={pez} activado={specie === 'Pez' ? true : false} onPress={() => onPress('Pez')} />
        <ButtonSquareImageTextBorderBlack texto="Roedor" imagen={roedor} activado={specie === 'Roedor' ? true : false} onPress={() => onPress('Roedor')} />
      </View>
      
    </View>
  );
};

export default EspecieMascota;
