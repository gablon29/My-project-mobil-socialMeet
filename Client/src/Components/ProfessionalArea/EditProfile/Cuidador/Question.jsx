import React,{ useState } from 'react'
import { Text,TouchableOpacity,View } from 'react-native'

const Question = ({ question,caracteristica,confirmation,setCaracterUpdates,caracterUpdates }) => {
	return (
		<View className="flex flex-col items-center mb-5">
			<Text className="font-poppinsSemiBold text-center mb-1">{question}</Text>
			<View className="flex flex-row w-20 h-9 bg-new rounded-2xl items-center justify-evenly">
				<TouchableOpacity onPress={() => setCaracterUpdates({ ...caracterUpdates, [caracteristica]:true})} className={`${confirmation && "bg-white rounded-full"} flex flex-row items-center justify-center w-7 h-7`}><Text style={{ textAlignVertical: "bottom" }} className="font-poppinsSemiBold   text-center ">Si</Text></TouchableOpacity>
				<TouchableOpacity onPress={() => setCaracterUpdates({ ...caracterUpdates, [caracteristica]:false})} className={`${!confirmation && "bg-white rounded-full"} flex flex-row items-center justify-center w-7 h-7`}><Text style={{ textAlignVertical: "bottom" }} className="font-poppinsSemiBold   text-center ">No</Text></TouchableOpacity>
			</View>
		</View>
	)
}

export default Question