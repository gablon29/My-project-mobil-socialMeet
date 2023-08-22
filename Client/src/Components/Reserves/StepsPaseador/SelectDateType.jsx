import React from 'react'
import { Text,TouchableHighlight,TouchableOpacity,TouchableWithoutFeedback,View } from 'react-native'

const SelectDateType = ({ query,setQuery, STEPS, setStep }) => {
	return (
		<View className="w-full	flex flex-col items-center h-full">
			<Text className="font-poppinsBold text-xl text-center my-20">¿Cómo lo desea contratar?</Text>
			<View className="flex flex-col items-center space-y-16">

				<TouchableOpacity className="w-80 h-12 bg-new flex flex-row justify-between items-center px-4 rounded-[10px]" onPress={() => setQuery({ ...query,dateType: "día" })}>
					<Text className="font-poppinsSemiBold text-base">Un día</Text>
					<View className="w-6 h-6 rounded-full bg-white flex flex-row items-center justify-center">
						{query.dateType === "día" && <View className="w-[13px] h-[13px] rounded-full bg-black"></View>}
					</View>
				</TouchableOpacity>

				<TouchableOpacity className="w-80 h-12 bg-new flex flex-row justify-between items-center px-4 rounded-[10px]" onPress={() => setQuery({ ...query,dateType: "pers" })}>
					<Text className="font-poppinsSemiBold text-base">Fechas personalizadas</Text>
					<View className="w-6 h-6 rounded-full bg-white flex flex-row items-center justify-center">
						{query.dateType === "pers" && <View className="w-[13px] h-[13px] rounded-full bg-black"></View>}
					</View>
				</TouchableOpacity>

			</View>
			
			<TouchableOpacity onPress={() => {
				if (!query.dateType) return
				setStep(STEPS.DATE)
			}} className="flex flex-col absolute bottom-44 justify-center w-64 h-14 bg-naranja rounded-2xl">
				<Text className="font-bold text-base text-white text-center">Siguiente</Text>
			</TouchableOpacity>
		</View>
	)
}

export default SelectDateType