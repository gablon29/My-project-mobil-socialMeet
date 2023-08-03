import React,{ useState } from 'react'
import { Image,Text,TouchableOpacity,View,TextInput } from 'react-native';

const CaredPets = ({ pet }) => {
	const [numericValue,setNumericValue] = useState(null)
	const [petPerNight,setPetPerNight] = useState(null)
	const handleNumericChange = (text) => {
		const numericRegex = /^[0-9]*$/;
		if (numericRegex.test(text)) {
			setNumericValue(text);
		}
	};

	return (
		<View className="flex flex-col items-center rounded-[10px] mt-20 px-5 pt-20 bg-lightnew pb-5">
			<View className="absolute -top-10 left-5 w-24 h-24 border-[5px] border-white rounded-full bg-new justify-center items-center">
				<Image source={pet.image} className="w-10 h-14" resizeMode='contain' />
			</View>
			<View className="flex flex-col items-center px-4">
				<Text className="font-poppinsSemiBold text-xl ">Cuidado de {pet.name}</Text>
				<Text className="font-poppinsSemiBold text-base text-center mt-6 mb-4">¿Cuántos {pet.name} aceptas por noche?</Text>
				<Text className="font-poppins text-center text-sm">En base a esto calcularemos el cupo maximo de mascotas por noche en las reservas</Text>
			</View>

			<View className="flex flex-row justify-evenly my-7">
				{[1,2,3,4,5].map((n) => (
					<TouchableOpacity key={n} onPress={() => { setPetPerNight(n) }} className={`${petPerNight === n && "border-[2px] border-black "} flex flex-row items-center justify-center bg-white w-9 h-9 mx-2 rounded-[10px]`}>
						<Text className=" font-poppinsBold text-base text-center " style={{ textAlignVertical: "center" }}>{n}</Text>
					</TouchableOpacity>
				))}
			</View>

			<Text className="font-poppins text-center text-sm">A continuación selecciona que características aceptas y tu precio en cada una</Text>

			{pet.categories.map((category,i) => (
				<View key={i} className="bg-white w-full rounded-[10px] my-3">
					<View className="flex flex-row justify-between items-center px-4 py-3">
						<Text className="font-poppinsBold text-base">{category}</Text>
						<View className="flex  flex-row w-20 h-9 bg-new rounded-2xl items-center justify-evenly">
							<TouchableOpacity onPress={() => { }} className={`${1 && "bg-white rounded-full"}  flex flex-row items-center justify-center w-7 h-7`}><Text style={{ textAlignVertical: "bottom" }} className="font-poppinsSemiBold   text-center ">Si</Text></TouchableOpacity>
							<TouchableOpacity onPress={() => { }} className={`${!1 && "bg-white rounded-full"} flex flex-row items-center justify-center w-7 h-7`}><Text style={{ textAlignVertical: "bottom" }} className="font-poppinsSemiBold   text-center ">No</Text></TouchableOpacity>
						</View>
					</View>
					<Text className="text-sm text-center">¿Cuál es el precio por noche?</Text>
					<View className="flex flex-row items-center justify-center my-4 ">
						<TextInput
							className="bg-celeste w-3/5 text-white font-poppins text-center text-xl rounded-[10px]"

							value={numericValue}
							onChangeText={handleNumericChange}
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
	)
}

export default CaredPets