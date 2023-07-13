import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text, Alert, ScrollView, FlatList } from 'react-native';
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
import veterinarios from '../../../images/dropDownMenu/veterinarios.png';
import cuidadores from '../../../images/dropDownMenu/cuidadores.png';
import paseadores from '../../../images/dropDownMenu/paseadores.png';
import { useNavigation } from '@react-navigation/native';
import Button from '../Buttons/Button';

const ejemploNotificaciones = [
  { type: '', title: 'Titulo de Ejemplo', body: 'A tu mascota blacky le toca una vacuna', date: 'Hace 2 minutos' },
  { type: '', title: 'Titulo de Ejemplo', body: 'Tienes una cita mañana a las 7:30 PM.', date: 'Hace 23 minutos' },
  { type: '', title: 'Titulo de Ejemplo', body: 'Tu pedido se a realizado correctamente', date: '08:20 PM' },
  { type: '', title: 'Titulo de Ejemplo', body: 'Has anadido una nueva mascotas!', date: '05:43 PM' },
  { type: '', title: 'Titulo de Ejemplo', body: 'Vacuna de la rabia', date: '11:45 AM' },
  { type: '', title: 'Titulo de Ejemplo', body: 'Tienes una cita veterinaria hoy a las 9:15 AM.', date: '09:15 AM' },
  { type: '', title: 'Titulo de Ejemplo', body: 'Este es un ejemplo de notificacion un9o dos tres cuatro cinco seis siete ocho nueve cies once doce trece catorse quince diesiseis diesiocho diesimiene veinte', date: '' },
  { type: '', title: 'Titulo de Ejemplo', body: 'Este es un ejemplo de notificacion', date: '09:15 AM' },
  { type: '', title: 'Titulo de Ejemplo', body: 'Este es un ejemplo de notificacion', date: '09:15 AM' },
  {
    type: '',
    title: 'Titulo de Ejemplo',
    body: 'Este es un ejemplo de notificacion jdhjkas asjdhjshd jashdjhas asjdhasdjhsd asjhdjasdh asjdhajsdh asjdhajshd asjdhjashd asjdhasjhd asjdhjas asjdhjashd asjdhajsdh asdjhasjdh asjdhasjdhEste es un ejemplo de notificacion jdhjkas asjdhjshd jashdjhas asjdhasdjhsd asjhdjasdh asjdhajsdh asjdhajshd asjdhjashd asjdhasjhd asjdhjas asjdhjashd asjdhajsdh asdjhasjdh asjdhasjdhEste es un ejemplo de notificacion jdhjkas asjdhjshd jashdjhas asjdhasdjhsd asjhdjasdh asjdhajsdh asjdhajshd asjdhjashd asjdhasjhd asjdhjas asjdhjashd asjdhajsdh asdjhasjdh asjdhasjdhEste es un ejemplo de notificacion jdhjkas asjdhjshd jashdjhas asjdhasdjhsd asjhdjasdh asjdhajsdh asjdhajshd asjdhjashd asjdhasjhd asjdhjas asjdhjashd asjdhajsdh asdjhasjdh asjdhasjdhEste es un ejemplo de notificacion jdhjkas asjdhjshd jashdjhas asjdhasdjhsd asjhdjasdh asjdhajsdh asjdhajshd asjdhjashd asjdhasjhd asjdhjas asjdhjashd asjdhajsdh asdjhasjdh asjdhasjdhEste es un ejemplo de notificacion jdhjkas asjdhjshd jashdjhas asjdhasdjhsd asjhdjasdh asjdhajsdh asjdhajshd asjdhjashd asjdhasjhd asjdhjas asjdhjashd asjdhajsdh asdjhasjdh asjdhasjdhEste es un ejemplo de notificacion jdhjkas asjdhjshd jashdjhas asjdhasdjhsd asjhdjasdh asjdhajsdh asjdhajshd asjdhjashd asjdhasjhd asjdhjas asjdhjashd asjdhajsdh asdjhasjdh asjdhasjdhEste es un ejemplo de notificacion jdhjkas asjdhjshd jashdjhas asjdhasdjhsd asjhdjasdh asjdhajsdh asjdhajshd asjdhjashd asjdhasjhd asjdhjas asjdhjashd asjdhajsdh asdjhasjdh asjdhasjdhEste es un ejemplo de notificacion jdhjkas asjdhjshd jashdjhas asjdhasdjhsd asjhdjasdh asjdhajsdh asjdhajshd asjdhjashd asjdhasjhd asjdhjas asjdhjashd asjdhajsdh asdjhasjdh asjdhasjdh',
    date: '',
  },
  { type: '', title: 'Titulo de Ejemplo', body: 'Este es un ejemplo de notificacion', date: '09:15 AM' },
  { type: '', title: 'Titulo de Ejemplo', body: 'Este es un ejemplo de notificacion', date: '09:15 AM' },
  { type: '', title: 'Titulo de Ejemplo', body: 'Este es un ejemplo de notificacion', date: '09:15 AM' },
  { type: '', title: 'Titulo de Ejemplo', body: 'Este es un ejemplo de notificacion', date: '09:15 AM' },
  { type: '', title: 'Titulo de Ejemplo', body: 'Este es un ejemplo de notificacion', date: '09:15 AM' },
  { type: '', title: 'Titulo de Ejemplo', body: 'Este es un ejemplo de notificacion', date: '09:15 AM' },
  { type: '', title: 'Titulo de Ejemplo', body: 'Este es un ejemplo de notificacion', date: '09:15 AM' },
  { type: '', title: 'Titulo de Ejemplo', body: 'Este es un ejemplo de notificacion', date: '09:15 AM' },
  { type: '', title: 'Titulo de Ejemplo', body: 'Este es un ejemplo de notificacion', date: '09:15 AM' },
  { type: '', title: 'Titulo de Ejemplo', body: 'Este es un ejemplo de notificacion', date: '09:15 AM' },
];

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
    { working: false, logo: chipWhopaws, nombre: 'My Whopaws' },
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

  return (
    <View className={`w-screen ${showMenu || showNotifications ? 'h-screen' : 'h-fit'} bg-white`}>
      <View className="flex flex-row justify-between items-end w-screen h-24 bg-black">
        <TouchableOpacity onPress={toggleMenu} className="p-1 m-2 rounded-full">
          {showMenu ? <Icon name="close" size={36} color="white" /> : <Icon name="menu" size={36} color="white" />}
        </TouchableOpacity>
        <Image source={require('../../../images/logo.png')} className="w-32 h-10 mb-2" resizeMode="contain" />
        <TouchableOpacity onPress={toggleNotifications} className="p-1 m-2 rounded-full">
          {showNotifications ? <Icon name="close" size={36} color="white" /> : <Icon name="bell" size={36} color="white" />}
        </TouchableOpacity>
      </View>
      {showMenu && (
        <ScrollView>
          <View className="flex flex-row flex-wrap gap-5 p-2 justify-center">
            {logoOpciones.map((elem, _idx) => (
              <TouchableOpacity
                key={_idx}
                className="justify-center items-center"
                onPress={() => {
                  if (elem.working) {
                    setShowMenu(!showMenu);
                    navigation.navigate(elem.url);
                  } else {
                    Alert.alert('Aun no implementdao');
                  }
                }}
              >
                <View className={`w-20 h-20 ${elem.working ? 'bg-naranja' : 'bg-gris'} rounded-xl justify-center items-center shadow-lg`}>
                  <Image source={elem.logo} className="h-16 w-16" resizeMode="contain" />
                </View>
                <Text className="text-xs font-poppins text-center pt-1">{elem.nombre}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}
      {showNotifications && (
        <View className="flex flex-1 m-4">
          <Button title="Ver mi calendario" colorText="text-white" alto="h-12" ancho="w-full" colorButton="bg-black" onPress={() => navigation.navigate('MiCalendario')} />
          <FlatList
            data={ejemploNotificaciones}
            ItemSeparatorComponent={() => <View className="h-px w-full bg-slate-400"></View>}
            renderItem={({ item, index }) => (
              <View className="h-fit min-h-[100px] m-2 flex flex-row items-center">
                <View className="mr-4 rounded-full bg-naranja w-12 h-12 justify-center items-center">
                  <Icon name="close" size={32} color="white" />
                </View>
                <View className="flex flex-1 my-4 mr-4">
                  <Text className="text-black text-justify font-poppins text-sm">{item.body}</Text>
                  <Text className="text-slate-600 font-poppins text-xs">{item.date}</Text>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
}
