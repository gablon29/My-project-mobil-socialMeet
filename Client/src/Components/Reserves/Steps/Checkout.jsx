import React,{ useState } from 'react'
import { Linking, Text,TextInput,TouchableOpacity,View } from 'react-native';

const Checkout = () => {

	const [cardNumber,setCardNumber] = useState("")
	const [CVV,setCVV] = useState("")
	const [expirationDate,setExpirationDate] = useState("")
	return (
		<View className="relative h-full">
			<View className="my-12">
				<Text className="text-2xl font-poppinsBold text-center mb-8">Pasarela de pagos</Text>
				<Text className="text-4xl font-poppinsSemiBold text-center">1231€</Text>
				<Text className="text-gray-700 text-center text-base my-1">del 0000 al 0000</Text>
				<Text className="italic text-gray-700 text-center">Este precio incluye las comisiones de la app</Text>
			</View>
			<View>
				<Text className="text-base font-poppinsSemiBold text-center">Selecciona una tarjeta</Text>
				{/* RENDERIZAR TARJETAS DE CREDITO */}
			</View>
			<View>
				<Text className="text-base font-poppinsSemiBold text-center mb-8">o añade una nueva tarjeta</Text>
				<View className="w-full items-center">
					<TextInput
						className="rounded-[10px] border w-80 h-12 px-4"
						placeholder="Número de tarjeta"
						value={cardNumber}
						onChangeText={text => setCardNumber(text)}
					/>
					<View className="flex flex-row justify-between w-80 mt-6">
						<TextInput
							className="rounded-[10px] border w-32 h-12 px-4"
							placeholder="Fecha (00/00)"
							value={expirationDate}
							onChangeText={text => setExpirationDate(text)}
						/>
						<TextInput
							className="rounded-[10px] border w-32 h-12 px-4"
							placeholder="CVV"
							value={CVV}
							onChangeText={text => setCVV(text)}
						/>
					</View>
				</View>
			</View>
			<View className="flex flex-col items-center space-y-4 mt-8 absolute bottom-28 left-0 right-0">
				<View className="flex flex-row items-center justify-center" style={{ textAlignVertical: "center" }}>
					<Text className="inline text-xs">Haciendo click en pagar aceptas </Text>
					<TouchableOpacity className="" onPress={() => Linking.openURL('https://www.facebook.com')}>
						<Text className="text-naranja text-xs underline">políticas de privacidad y uso</Text>
					</TouchableOpacity>
				</View>

				<TouchableOpacity className="flex flex-col items-center rounded-2xl justify-center bg-naranja w-72 h-14">
					<Text className="font-poppinsSemiBold text-white">Pagar precio€</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Checkout