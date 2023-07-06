import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text, Alert, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import adopcion from '../../../images/dropDownMenu/adopcion.png';
import afiliacion from '../../../images/dropDownMenu/afiliacion.png';
import areaProfesional from '../../../images/dropDownMenu/areaProfesional.png';
import blog from '../../../images/dropDownMenu/blog.png';
import chipWhopaws from '../../../images/dropDownMenu/chipWhopaws.png';
import educadores from '../../../images/dropDownMenu/educadores.png';
import inicio from '../../../images/dropDownMenu/inicio.png';
import marketPlace from '../../../images/dropDownMenu/marketPlace.png';
import miPerfil from '../../../images/dropDownMenu/miPerfil.png';
import misMascotas from '../../../images/dropDownMenu/misMascotas.png';
import peluqueros from '../../../images/dropDownMenu/peluqueros.png';
import socialPaws from '../../../images/dropDownMenu/socialPaws.png';
import Notifications from '../Notifications/Notifications';
import veterinarios from '../../../images/dropDownMenu/veterinarios.png';
import cuidadores from '../../../images/dropDownMenu/cuidadores.png';
import paseadores from '../../../images/dropDownMenu/paseadores.png';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();
  const logoOpciones = [
    { working: true, logo: inicio, nombre: 'Inicio', url: 'Home' },
    { working: false, logo: socialPaws, nombre: 'Socialpaws' },
    { working: false, logo: veterinarios, nombre: 'Veterinarios' },
    { working: false, logo: cuidadores, nombre: 'Cuidadores' },
    { working: false, logo: paseadores, nombre: 'Paseadores' },
    { working: false, logo: peluqueros, nombre: 'Peluqueros' },
    { working: false, logo: educadores, nombre: 'Educadores' },
    { working: false, logo: adopcion, nombre: 'Adopción' },
    { working: false, logo: chipWhopaws, nombre: 'Chip Whopaws' },
    { working: false, logo: blog, nombre: 'Blog' },
    { working: false, logo: areaProfesional, nombre: 'Área profesional' },
    { working: false, logo: marketPlace, nombre: 'Marketplace' },
    { working: true, logo: misMascotas, nombre: 'Mis mascotas', url: 'MyPets' },
    { working: true, logo: miPerfil, nombre: 'Mi perfil', url: 'Profile' },
    { working: false, logo: afiliacion, nombre: 'Afiliación' },
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
            <TouchableOpacity
              onPress={() => {
                if (element.working) {
                  setShowMenu(!showMenu);
                  navigation.navigate(element.url);
                } else {
                  Alert.alert('Aun no implementdao');
                }
              }}
            >
              <View className={element.working ? 'mx-5 mt-3 mb-1 p-3 rounded-lg bg-naranja' : 'mx-5 mt-3 mb-1 p-3 rounded-lg bg-gris'}>
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
