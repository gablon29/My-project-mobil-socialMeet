import React from 'react'
import { View,Text,Image,TouchableOpacity } from 'react-native'
import gatoCajaVolador from '../../../images/catFlyBox.png'
import { useNavigation } from '@react-navigation/native'

const PagoExitoso = () => {
	const navigation = useNavigation()
	return (
		<View className="flex flex-col h-screen items-center justify-evenly">
			<Image source={gatoCajaVolador} className="w-44 h-44" resizeMode='contain' />
			<Text className="font-poppinsBold text-4xl text-naranja text-center">¡Pedido recibido!</Text>
			<Text className="font-poppinsBold text-base">Ya puedes ver tu reserva en tu calendario</Text>
			<TouchableOpacity onPress={() => navigation.navigate("Home")} className="flex flex-col items-center justify-center border-2 h-12 border-naranja bg-transparent w-4/5 rounded-2xl"><Text className="font-bold text-naranja text-base">Volver al inicio</Text></TouchableOpacity>
		</View>
	)
}

export default PagoExitoso