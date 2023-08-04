import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Pawpoints = ({pawpoints}) => {
	return (
		<View className="relative flex flex-col items-center justify-center bg-new w-72 h-10 rounded-md">
			<Text className="text-justify font-bold ">Pawpoints: {pawpoints}</Text>
			<TouchableOpacity className="flex flex-row justify-center items-center absolute top-[-8px] right-[-8px] bg-naranja rounded-full w-7 h-7">
				<Text className="text-white font-poppins font-semibold border border-white rounded-full w-5 h-5 text-center">?</Text>
			</TouchableOpacity>
		</View>
	)
}

export default Pawpoints