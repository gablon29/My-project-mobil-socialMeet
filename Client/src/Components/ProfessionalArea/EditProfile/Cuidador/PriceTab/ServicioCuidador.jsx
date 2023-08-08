import React,{ useEffect,useState } from 'react'
import { Text,TextInput,TouchableOpacity,View } from 'react-native'

const ServicioCuidador = ({ petName,category,activeServices,setActiveServices }) => {
	const [price,setPrice] = useState(null)
	const [isActive,setIsActive] = useState(false)
	const quitarTildes = (string) => {
		const mapaAcentos = {
			'á': 'a',
			'é': 'e',
			'í': 'i',
			'ó': 'o',
			'ú': 'u',
			'Á': 'A',
			'É': 'E',
			'Í': 'I',
			'Ó': 'O',
			'Ú': 'U'
		};
		return string.toLowerCase().replace(/[áéíóúÁÉÍÓÚ]/g,(letra) => mapaAcentos[letra] || letra);
	}

	const handleActivation = (status) => {
		setIsActive(status)
		const actualServices = activeServices

		const animal = quitarTildes(petName)

		let exist = false

		actualServices[animal].forEach((service,i) => {
			if (service.name === category) {
				const updatedService = { ...actualServices[animal][i],isActive: status }
				actualServices[animal][i] = updatedService
				exist = true;
			}
		})
		if (!exist) {
			actualServices[animal] = [...actualServices[animal],{ name: category,isActive: status,price }]
		}
		setActiveServices(actualServices)
	}
	
	const handlePriceChange = (input) => {
		const numericRegex = /^[0-9]*$/;
		if (numericRegex.test(input)) {
			setPrice(input);
			const actualServices = activeServices
			
			const animal = quitarTildes(petName)
			
			let exist = false
			
			actualServices[animal].forEach((service,i) => {
				if (service.name === category) {
					const updatedService = { ...activeServices[animal][i],price: input }
					actualServices[animal][i] = updatedService
					exist = true;
				}
			})
			if(!exist){
				actualServices[animal] = [...actualServices[animal],{ name: category,price }]
			}
			setActiveServices(actualServices)
		}
	};


	return (
		<View className="bg-white w-full rounded-[10px] my-3">
			<View className="flex flex-row justify-between items-center px-4 py-3">
				<Text className="font-poppinsBold text-base">{category}</Text>
				<View className="flex  flex-row w-20 h-9 bg-new rounded-2xl items-center justify-evenly">
					<TouchableOpacity onPress={() => handleActivation(true)} className={`${isActive && "bg-white rounded-full"}  flex flex-row items-center justify-center w-7 h-7`}><Text style={{ textAlignVertical: "bottom" }} className="font-poppinsSemiBold   text-center ">Si</Text></TouchableOpacity>
					<TouchableOpacity onPress={() => handleActivation(false)} className={`${!isActive && "bg-white rounded-full"} flex flex-row items-center justify-center w-7 h-7`}><Text style={{ textAlignVertical: "bottom" }} className="font-poppinsSemiBold   text-center ">No</Text></TouchableOpacity>
				</View>
			</View>
			<Text className="text-sm text-center">¿Cuál es el precio por noche?</Text>
			<View className="flex flex-row items-center justify-center my-4 ">
				<TextInput
					className="bg-celeste w-3/5 text-white font-poppins text-center text-xl rounded-[10px]"

					value={price}
					onChangeText={handlePriceChange}
					keyboardType="numeric"
					placeholder='-'
					placeholderTextColor="white"
				/>
				<View className="absolute right-16">
					<Text className="text-xl text-white font-poppins">€</Text>
				</View>
			</View>
		</View>
	)
}

export default ServicioCuidador