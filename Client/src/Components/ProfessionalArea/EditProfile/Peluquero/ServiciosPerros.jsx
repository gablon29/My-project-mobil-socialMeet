import React from 'react'
import { useState } from 'react'
import { Image,Text,TextInput,TouchableOpacity,View } from 'react-native'
import { useSelector } from 'react-redux'

const ServiciosPerros = ({ petName,peso,dogService,services,setServices }) => {
	
	const { country,province,city } = useSelector(state => state?.ReducerProfessional?.userProfessional)
	const profession = useSelector((state) => state?.ReducerProfessional?.profession)
	const actualServices = useSelector(state => state?.ReducerProfessional?.userProfessional?.professions[profession]?.services)
	const perroText = "Perro"
	const [isActive,setIsActive] = useState(false)
	const [price,setPrice] = useState(null)

	useState(()=>{
		const existentService = actualServices.find((s)=>s.name === `${petName} ${dogService}` )
		if(existentService){
			setPrice(existentService.price)
			setIsActive(existentService.isActive)
		}
	},[])


	const handleActivation = (status) => {
		setIsActive(status)
		let exist = false

		services.forEach((service,i) => {
			if (service?.name === `${petName} ${dogService}`) {
				const actualServices = services
				const updatedService = { ...service,isActive: status }
				actualServices[i] = updatedService
				setServices([...actualServices])
				exist = true;
			}
		})
		if (!exist) {
			setServices([...services,{ name: `${petName} ${dogService}`,isActive: status,price,country,province,city,description:dogService,animal:perroText,profession }])
		}
	}

	const handlePriceChange = (input) => {
		const numericRegex = /^[0-9]*\,?[0-9]*$/
		if (numericRegex.test(input)) {
			setPrice(input);

			let exist = false

			services.forEach((service,i) => {
				if (service?.name === `${petName} ${dogService}`) {
					const actualServices = services

					const updatedService = { ...service,price: input }

					actualServices[i] = updatedService

					setServices([...actualServices])
					exist = true;
				}
			})

			if (!exist) {
				setServices([...services,{ name: `${petName} ${dogService}`,isActive,price:input,country,province,city,description:dogService,animal:perroText,profession }])
			}
		}
	}
	return (
		<View className="flex flex-col bg-white  rounded-[10px] my-3">

			<View className="flex flex-row justify-between items-center px-4 py-3">
				<Text className="font-poppinsBold text-base">{peso}</Text>
				<View className="flex  flex-row w-20 h-9 bg-new rounded-2xl items-center justify-evenly">
					<TouchableOpacity onPress={() => handleActivation(true)} className={`${isActive && "bg-white rounded-full"}  flex flex-row items-center justify-center w-7 h-7`}><Text style={{ textAlignVertical: "bottom" }} className="font-poppinsSemiBold   text-center ">Si</Text></TouchableOpacity>
					<TouchableOpacity onPress={() => handleActivation(false)} className={`${!isActive && "bg-white rounded-full"} flex flex-row items-center justify-center w-7 h-7`}><Text style={{ textAlignVertical: "bottom" }} className="font-poppinsSemiBold   text-center ">No</Text></TouchableOpacity>
				</View>
			</View>

				<Text className="text-center font-poppins text-sm">{dogService}</Text>
			<View className="flex flex-col items-center justify-center my-4 ">
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

export default ServiciosPerros