import React,{ useEffect } from 'react'
import { Image,ScrollView,Text,TouchableOpacity,View } from 'react-native';
import casaCuidador from '../../../../images/casaCuidador.png'
import domicilio from '../../../../images/domicilio.png'
import Icon from "react-native-vector-icons/AntDesign"
import Button from '../../Buttons/ButtonCuston';

const SelectPlace = ({ query,setQuery,place,setPlace,setStep,STEPS }) => {

	const handlePlace = (lugar) => {
		setPlace(lugar)
		setQuery({ ...query,place: lugar })
		console.log(lugar);
	}

	return (
		<ScrollView>
			<View className="flex flex-col items-center space-y-14 h-full">
				<Button buttonClass={"w-full p-2"} component={<Icon name='arrowleft' size={32} />} onPress={() => setStep(STEPS.PET)}/>
				<Text className="font-poppinsBold text-xl text-center">¿Dónde lo necesitas</Text>
				<View className="flex flex-row justify-evenly w-full mb-9">
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
				<Button 
				dissable={!query.place ? false : true}
				onPress={() => {
					setStep(STEPS.LOCATION)
			   }}
				buttonClass={"justify-center w-64 h-14 bg-naranja rounded-2xl"}
				title={"Siguiente"}
				titleClass={"font-bold text-base text-white text-center"}
				/>
			</View>
		</ScrollView>
	)
}

export default SelectPlace