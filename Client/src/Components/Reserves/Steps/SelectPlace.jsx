import React,{ useEffect } from 'react'
import { Image,Text,TouchableOpacity,View } from 'react-native';
import casaCuidador from '../../../../images/casaCuidador.png'
import domicilio from '../../../../images/domicilio.png'
import { useDispatch } from 'react-redux';

const SelectPlace = ({ query,setQuery,place,setPlace,setStep,STEPS }) => {

	const handlePlace = (lugar) => {
		setPlace(lugar)
		setQuery({ ...query,place: lugar })
		console.log(lugar);
	}

	return (
		<View className="flex flex-col items-center space-y-14 h-full pt-20 ">
			<Text className="font-poppinsBold text-xl text-center ">¿Dónde lo necesitas</Text>
			<View className="flex flex-row justify-evenly w-full">
				<View className="w-32">
					<TouchableOpacity onPress={() => handlePlace("MiCasa")} className={`${place === "MiCasa" && "border-2"} flex flex-col justify-center items-center w-32 h-32 mb-4 bg-new rounded-xl `}>
						<Image source={domicilio} className="w-24 h-24" resizeMode='contain' />
					</TouchableOpacity>
					<Text className="font-poppinsSemiBold text-base text-center">Lo quiero en mi casa</Text>
				</View>
				<View className="w-32 ">
					<TouchableOpacity onPress={() => handlePlace("CasaCuidador")} className={`${place === "CasaCuidador" && "border-2"} flex flex-col justify-center items-center w-32 h-32 mb-4 bg-new rounded-xl `}>
						<Image source={casaCuidador} className="w-24 h-24" resizeMode='contain' />
					</TouchableOpacity>
					<Text className="font-poppinsSemiBold text-base text-center">Casa del cuidador/a</Text>
				</View>
			</View>
			<TouchableOpacity onPress={() => {
				if (!query.place) return
				setStep(STEPS.LOCATION)
			}} className="flex flex-col justify-center w-64 h-14 bg-naranja rounded-2xl">
				<Text className="font-bold text-base text-white text-center">Siguiente</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setStep(STEPS.PET)} className="flex flex-col justify-center w-64 h-14 bg-naranja rounded-2xl">
				<Text className="font-bold text-base text-white text-center">Atrás</Text>
			</TouchableOpacity>
		</View>
	)
}

export default SelectPlace