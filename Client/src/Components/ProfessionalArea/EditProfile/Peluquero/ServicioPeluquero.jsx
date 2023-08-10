import React,{ useState } from 'react'
import { Text,TextInput,TouchableOpacity,View } from 'react-native'
import { useSelector } from 'react-redux'

const ServicioPeluquero = ({ petName,category,services,setServices }) => {
	const { country,province,city } = useSelector(state => state?.ReducerProfessional?.userProfessional)
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

		let exist = false
		services.forEach((service,i) => {
			if (service?.name === `${petName} ${category}`) {
				const actualServices = services
				const updatedService = { ...service,isActive: status }
				actualServices[i] = updatedService
				setServices([...actualServices])
				exist = true;
			}
		})
		if (!exist) {
			setServices([...services,{ name: `${petName} ${category}`,isActive: status,price,country,province,city }])
		}
	}

	const handlePriceChange = (input) => {
		const numericRegex = /^[0-9]*\,?[0-9]*$/
		if (numericRegex.test(input)) {
			setPrice(input);

			let exist = false

			services.forEach((service,i) => {
				if (service?.name === `${petName} ${category}`) {
					const actualServices = services

					const updatedService = { ...service,price: input }

					actualServices[i] = updatedService

					setServices([...actualServices])
					exist = true;
				}
			})

			if (!exist) {
				setServices([...services,{ name: `${petName} ${category}`,isActive,price,country,province,city }])
			}
		}
		// console.log(activeServices);
	}

	return (
		<View className="bg-white w-full rounded-[10px] my-3">
			<View className="flex flex-row justify-between items-center px-4 py-3">
				<Text className="font-poppinsBold text-base">{category}</Text>
				<View className="flex  flex-row w-20 h-9 bg-new rounded-2xl items-center justify-evenly">
					<TouchableOpacity onPress={() => handleActivation(true)} className={`${isActive && "bg-white rounded-full"}  flex flex-row items-center justify-center w-7 h-7`}><Text style={{ textAlignVertical: "bottom" }} className="font-poppinsSemiBold   text-center ">Si</Text></TouchableOpacity>
					<TouchableOpacity onPress={() => handleActivation(false)} className={`${!isActive && "bg-white rounded-full"} flex flex-row items-center justify-center w-7 h-7`}><Text style={{ textAlignVertical: "bottom" }} className="font-poppinsSemiBold   text-center ">No</Text></TouchableOpacity>
				</View>
			</View>

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
export default ServicioPeluquero