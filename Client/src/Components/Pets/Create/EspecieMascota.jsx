import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import perro from '../../../../images/especies/ic_perro.png';
import gato from '../../../../images/especies/ic_gato.png';
import ave from '../../../../images/especies/ic_ave.png';
import reptil from '../../../../images/especies/ic_reptil.png';
import pez from '../../../../images/especies/ic_pez.png';
import roedor from '../../../../images/especies/ic_roedor.png';
import ardilla from '../../../../images/especies/conejo.png';
import conejo from '../../../../images/especies/ardilla.png';
import ButtonSquareImageTextBorderBlack from '../../Buttons/ButtonSquareImageTextBorderBlack';

const EspecieMascota = ({ setSpecie, specie, setValida, title, text, multiple}) => {

  const onPress = (v) => {
    if(v){
      setValida(false)
    } else {
      setValida(true)
    }
    setSpecie(v)
  };

  const especies = [
    {text:"Perro", img: perro},{text:"Gato", img: gato}, {text: "Ave", img: ave}, {text: "Reptil", img: reptil},
    {text:"Pez", img: pez},{text:"Roedor", img: roedor}, {text:"Conejo", img: conejo}, {text:"Hurón",img: ardilla}
  ];

  const [btnActive, setBtnActive] = useState(especies.map(() => ""));

  const handleBtnActive = (index) => {
    const updatedBtnActive = [...btnActive];
    updatedBtnActive[index] = updatedBtnActive[index] ? 0 : 1;
    setBtnActive(updatedBtnActive);
    const selectedAreas = especies
      .filter((especies, i) => updatedBtnActive[i] === 1)
      .map((especies) => especies.text);
    setSpecie(selectedAreas);
    setValida(selectedAreas.length != [])
};

  return (
    <View className={`justify-center items-center bg-white w-screen ${title && "my-7"}`}>
      {title && <Text className="text-2xl text-center font-poppinsBold mb-5">{title}</Text>}
      {text && <Text className="font-semibold text-center text-base mb-5">{text}</Text>}
      <View className="flex-row flex-wrap w-11/12 justify-center">
        {
          especies.map((item,index)=>(
            <ButtonSquareImageTextBorderBlack 
              key={index}
              texto={item.text} imagen={item.img}
              activado={multiple ? btnActive[index] : specie === item.text ? true : false}
              onPress={()=>{multiple ? handleBtnActive(index, item.text) : onPress(item.text)}}
            />
          ))
        }
      </View>
    </View>
  );
};

export default EspecieMascota;
