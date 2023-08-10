import React from 'react'
import { useState } from 'react'
import { Image,Text,TextInput,TouchableOpacity,View } from 'react-native'

const ServiciosPerros = ({ category,services,image }) => {
	const [isActive, setIsActive] = useState(second)
	return (

		<View className="pt-20 mt-20 relative flex flex-col w-full rounded-[10px] bg-lightnew px-5 pb-5">
			<View className="absolute -top-10 left-5 w-24 h-24 border-[5px] border-white rounded-full bg-new justify-center items-center">
				<Image source={image} className="w-10 h-14" resizeMode='contain' />
			</View>
			<View className="flex flex-col items-center px-4">
				<Text className="font-poppinsSemiBold text-xl text-center mb-7">Cuidado de {category.name}</Text>
			</View>


			<Text className="font-poppins text-center text-sm mb-7">A continuación selecciona que características aceptas y tu precio en cada una</Text>

			<View>
				{services.map((service,i) => (
					// <View key={i} className="flex flex-col bg-white my-3 rounded-[10px] p-4 items-center ">
					// 	<View className="flex flex-row items-center justify-between  bg-red-200">
					// 		<Text className="font-poppinsBold text-base">{category.peso}</Text>
					// 		<View className="flex flex-row w-20 h-9 bg-new rounded-2xl items-center justify-evenly">
					// 			<TouchableOpacity onPress={() => { }} className={`${"isActive" && "bg-white rounded-full"}  flex flex-row items-center justify-center w-7 h-7`}><Text style={{ textAlignVertical: "bottom" }} className="font-poppinsSemiBold   text-center ">Si</Text></TouchableOpacity>
					// 			<TouchableOpacity onPress={() => { }} className={`${!"isActive" && "bg-white rounded-full"} flex flex-row items-center justify-center w-7 h-7`}><Text style={{ textAlignVertical: "bottom" }} className="font-poppinsSemiBold   text-center ">No</Text></TouchableOpacity>
					// 		</View>
					// 	</View>
					// 	<Text className="font-poppins text-sm">{service}</Text>
					// 	<View className="flex flex-row items-center justify-center my-4 ">
					// 		<TextInput
					// 			className="bg-celeste w-3/5 text-white font-poppins text-center text-xl rounded-[10px]"

					// 			value={"price"}
					// 			onChangeText={() => { }}
					// 			keyboardType="numeric"
					// 			placeholder='-'
					// 			placeholderTextColor="white"
					// 		/>
					// 		<View className="absolute right-16">
					// 			<Text className="text-xl text-white font-poppins">€</Text>
					// 		</View>
					// 	</View>
					// </View>
					<View className="bg-white w-full rounded-[10px] my-3">
						<View className="flex flex-row justify-between items-center px-4 py-3">
							<Text className="font-poppinsBold text-base">{category.peso}</Text>
							<View className="flex  flex-row w-20 h-9 bg-new rounded-2xl items-center justify-evenly">
								<TouchableOpacity onPress={() => {}} className={`${"isActive" && "bg-white rounded-full"}  flex flex-row items-center justify-center w-7 h-7`}><Text style={{ textAlignVertical: "bottom" }} className="font-poppinsSemiBold   text-center ">Si</Text></TouchableOpacity>
								<TouchableOpacity onPress={() => {}} className={`${!"isActive" && "bg-white rounded-full"} flex flex-row items-center justify-center w-7 h-7`}><Text style={{ textAlignVertical: "bottom" }} className="font-poppinsSemiBold   text-center ">No</Text></TouchableOpacity>
							</View>
						</View>
						<Text className="text-sm text-center">{service}</Text>
						<View className="flex flex-row items-center justify-center my-4 ">
							<TextInput
								className="bg-celeste w-3/5 text-white font-poppins text-center text-xl rounded-[10px]"

								value={0}
								onChangeText={()=>{}}
								keyboardType="numeric"
								placeholder='-'
								placeholderTextColor="white"
							/>
							<View className="absolute right-16">
								<Text className="text-xl text-white font-poppins">€</Text>
							</View>
						</View>
					</View>
				))}
			</View>
		</View>
	)
}

export default ServiciosPerros