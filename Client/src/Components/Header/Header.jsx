import React, { useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import adopcion from "../../../images/dropDownMenu/adopcion.png";
import afiliacion from "../../../images/dropDownMenu/afiliacion.png";
import areaProfesional from "../../../images/dropDownMenu/areaProfesional.png";
import blog from "../../../images/dropDownMenu/blog.png";
import chipWhopaws from "../../../images/dropDownMenu/chipWhopaws.png";
import cuidadores from "../../../images/dropDownMenu/cuidadores.png";
import educadores from "../../../images/dropDownMenu/educadores.png";
import inicio from "../../../images/dropDownMenu/inicio.png";
import marketPlace from "../../../images/dropDownMenu/marketPlace.png";
import miPerfil from "../../../images/dropDownMenu/miPerfil.png";
import misMascotas from "../../../images/dropDownMenu/misMascotas.png";
import paseadores from "../../../images/dropDownMenu/paseadores.png";
import peluqueros from "../../../images/dropDownMenu/peluqueros.png";
import socialPaws from "../../../images/dropDownMenu/socialPaws.png";
import veterinarios from "../../../images/dropDownMenu/veterinarios.png";

export default function Header() {
  const logoOpciones = [
    inicio,
    socialPaws,
    veterinarios,
    cuidadores,
    paseadores,
    peluqueros,
    educadores,
    adopcion,
    chipWhopaws,
    blog,
    areaProfesional,
    marketPlace,
    misMascotas,
    miPerfil,
    afiliacion,
  ];

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const renderMenuItems = () => {
    if (showMenu) {
      return (
        <View className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-80 flex flex-row justify-around items-center">
          <TouchableOpacity onPress={toggleMenu} className="self-end mr-4">
            <Icon name="close" size={28} color="white" />
          </TouchableOpacity>
          <View className="flex flex-row justify-around">
            <ColumnWithBoxes />
            <ColumnWithBoxes />
            <ColumnWithBoxes />
          </View>
        </View>
      );
    }
    return null;
  };

  const ColumnWithBoxes = () => {
    return (
      <View className="flex flex-col justify-center items-center">
        {logoOpciones.map((logo, index) => (
          <BoxWithLogo key={index} logo={logo} />
        ))}
      </View>
    );
  };

  const BoxWithLogo = ({ logo }) => {
    return (
      <View className="items-center my-4">
        <Image source={logo} className="w-16 h-16" resizeMode="contain" />
      </View>
    );
  };

  return (
    <View className="flex flex-row justify-between items-center p-2 h-16 bg-black">
      <TouchableOpacity onPress={toggleMenu} className="ml-2">
        {showMenu ? (
          <Icon name="close" size={28} color="white" />
        ) : (
          <Icon name="menu" size={28} color="white" />
        )}
      </TouchableOpacity>

      <Image
        source={require("../../../images/logo.png")}
        className="w-32 h-10"
        resizeMode="contain"
      />

      <TouchableOpacity onPress={() => {}} className="mr-2">
        <Icon name="bell" size={28} color="white" />
      </TouchableOpacity>

      {renderMenuItems()}
    </View>
  );
}
