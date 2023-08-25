import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'

const TabResumen = ({ pricePerHour }) => {
	return (
		<View className="flex flex-col items-center">
			<View className="bg-new flex flex-row items-center justify-between px-4 w-10/12 rounded-[10px] h-12 mb-16">
				<Text className="text-base font-poppinsSemiBold">x Hora</Text>
				<Text className="text-base font-poppinsSemiBold">{pricePerHour}€</Text>
			</View>

			<View className="bg-celeste flex flex-row items-center justify-between px-4 w-10/12 rounded-[10px] h-12 mb-4">
				<Text className="text-base font-poppinsSemiBold text-white">Comisión de servicio</Text>
				<Text className="text-base font-poppinsSemiBold text-white">15%</Text>
			</View>

			<View className="bg-new flex flex-row items-center justify-between px-4 w-10/12 rounded-[10px] h-12 mb-4">
				<Text className="text-base font-poppinsSemiBold">Total</Text>
				<Text className="text-base font-poppinsSemiBold">{(pricePerHour * 1.15).toFixed(2).replace(".",",")}€</Text>
			</View>

			<TouchableOpacity onPress={() => { }} className="mb-6 w-64 h-14 bg-naranja rounded-2xl flex flex-col items-center justify-center">
				<Text className="text-white font-bold">Reservar</Text>
			</TouchableOpacity>

		</View>

	)
}

export default TabResumen