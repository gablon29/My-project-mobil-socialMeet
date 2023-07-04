import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import adopcion from '../../../images/dropDownMenu/adopcion.png';
import afiliacion from '../../../images/dropDownMenu/afiliacion.png';
import areaProfesional from '../../../images/dropDownMenu/areaProfesional.png';
import blog from '../../../images/dropDownMenu/blog.png';
import chipWhopaws from '../../../images/dropDownMenu/chipWhopaws.png';
import cuidadores from '../../../images/dropDownMenu/cuidadores.png';
import educadores from '../../../images/dropDownMenu/educadores.png';
import inicio from '../../../images/dropDownMenu/inicio.png';
import marketPlace from '../../../images/dropDownMenu/marketPlace.png';
import miPerfil from '../../../images/dropDownMenu/miPerfil.png';
import misMascotas from '../../../images/dropDownMenu/misMascotas.png';
import paseadores from '../../../images/dropDownMenu/paseadores.png';
import peluqueros from '../../../images/dropDownMenu/peluqueros.png';
import socialPaws from '../../../images/dropDownMenu/socialPaws.png';
import veterinarios from '../../../images/dropDownMenu/veterinarios.png';
import Notifications from '../Notifications/Notifications';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation()
  const logoOpciones = [
    { logo: inicio, nombre: 'Inicio', url: "Home" },
    { logo: socialPaws, nombre: 'Socialpaws' },
    { logo: veterinarios, nombre: 'Veterinarios' },
    { logo: cuidadores, nombre: 'Cuidadores' },
    { logo: paseadores, nombre: 'Paseadores' },
    { logo: peluqueros, nombre: 'Peluqueros' },
    { logo: educadores, nombre: 'Educadores' },
    { logo: adopcion, nombre: 'Adopción' },
    { logo: chipWhopaws, nombre: 'Chip Whopaws' },
    { logo: blog, nombre: 'Blog' },
    { logo: areaProfesional, nombre: 'Área profesional' },
    { logo: marketPlace, nombre: 'Marketplace' },
    { logo: misMascotas, nombre: 'Mis mascotas', url: "MyPets" },
    { logo: miPerfil, nombre: 'Mi perfil', url: "Profile" },
    { logo: afiliacion, nombre: 'Afiliación' },
  ];

  const [showMenu, setShowMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  //Menú hamburgesa:

  const renderMenuItems = () => {
    if (showMenu) {
      return (
        <View className="flex flex-row flex-wrap w-screen h-screen absolute justify-between bg-white top-24">
          {/* top- debe ser igual al tamaño del header */}
          <Boxes />
        </View>
      );
    }
    return null;
  };

  const Boxes = () => {
    return (
      <>
        {logoOpciones.map((element, index) => (
          <View className="items-center my-3" key={index}>
            <TouchableOpacity onPress={() => navigation.navigate(element.url)}>
            <View className="mx-5 mt-3 mb-1 p-3 rounded-lg bg-naranja">
              <Image source={element.logo} className="w-14 h-14" resizeMode="contain" />
            </View>
            </TouchableOpacity>
            <Text className="text-xs font-poppinsBold">{element.nombre}</Text>
          </View>
        ))}
      </>
    );
  };
  //Notificaciones:

  const renderNotifications = () => {
    if (showNotifications) {
      return (
        <View className="flex flex-row flex-wrap w-screen h-screen absolute justify-between bg-white top-24">
          <Notifications />
        </View>
      );
    }
    return null;
  };

  return (
    <>
      <View className="flex flex-row justify-between items-center p-2 h-24 bg-black">
        {/* h- debe ser igual a top- del renderMenuItems */}
        <TouchableOpacity onPress={toggleMenu} className="ml-2 mt-5">
          {showMenu ? <Icon name="close" size={28} color="white" /> : <Icon name="menu" size={28} color="white" />}
        </TouchableOpacity>
        <Image source={require('../../../images/logo.png')} className="w-32 h-10 mt-6" resizeMode="contain" />

        <TouchableOpacity onPress={toggleNotifications} className="ml-2 mt-5">
          {showNotifications ? <Icon name="close" size={28} color="white" /> : <Icon name="bell" size={24} color="white" />}
        </TouchableOpacity>
      </View>
      {renderMenuItems()}
      {renderNotifications()}
    </>
  );
}
