import React from 'react'
import { View,Text,Image, TouchableOpacity } from 'react-native'
import dogSad from '../../../images/dogsad.png'
import { useNavigation } from '@react-navigation/native'

const PagoFallido = () => {
	const navigation = useNavigation()
	return (
		<View className="flex flex-col h-screen items-center justify-evenly">
			<Image source={dogSad} className="w-44 h-44" resizeMode='contain' />
			<Text className="font-poppinsBold text-xl px-10 text-naranja text-center">¡Vaya! No hemos podido realizar el pedido</Text>
			<Text className="font-poppinsBold text-base text-center">Comprueba que tienes saldo en la tarjeta indicada y vuelve a intentarlo</Text>
			<TouchableOpacity onPress={()=>navigation.navigate("Home")} className="flex flex-col items-center justify-center border-2 h-12 border-naranja bg-transparent w-4/5 rounded-2xl"><Text className="font-bold text-naranja text-base">Volver al inicio</Text></TouchableOpacity>
		</View>
	)
}

export default PagoFallido