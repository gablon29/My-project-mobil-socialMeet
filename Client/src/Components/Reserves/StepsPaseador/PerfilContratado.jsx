import React,{ useEffect,useState } from 'react'
import { Image,ScrollView,Text,TouchableOpacity,View } from 'react-native'
import UserInfo from '../../ProfessionalArea/Profile/UserInfo'
import Pawpoints from '../../ProfessionalArea/Profile/Pawpoints'
import { useSelector } from 'react-redux'
import { usePay } from '../../../CustomHooks/usePay'
import PaseadorTabs from '../Components/PaseadorTabs'

const PerfilContratado = ({ profession,setStep,STEPS,query,displayTotalPrice,productId }) => {

	
	const price = useSelector((state) => state?.ReducerProfessional?.userProfessional?.professions?.paseador?.services?.price)
	const reviews = useSelector((state) => state?.ReducerProfessional?.userProfessional?.professions?.paseador?.reviews)
	const { description,pawpoints } = useSelector((state) => state?.ReducerProfessional?.userProfessional)
	const { handleBuy } = usePay()


	return (
		<ScrollView className="">
			<TouchableOpacity onPress={() => setStep(STEPS.PROFESSIONALS)} className="flex flex-col justify-center w-64 h-14 bg-naranja rounded-2xl">
				<Text className="font-bold text-base text-white text-center">Atrás</Text>
			</TouchableOpacity>
			<View className="flex flex-col items-center justify-center">
				<UserInfo />
				<Pawpoints pawpoints={pawpoints || 0} />
				{description && <Text className="w-80 font-poppins text-center font-medium my-10">{description} </Text>}
			</View>

			<View className="w-full	flex flex-col items-center mt-5">
				<Text className="font-poppinsSemiBold text-xl">Precio total</Text>
				{query?.persDates?.map((day, i)=>{
					return <Text key={i} className="text-gray-700">{day.date} | {day.hour}</Text>	
				})}
				<Text className="text-4xl font-poppinsSemiBold mt-7">{(displayTotalPrice * 1.15).toFixed(2).replace(".",",")}€</Text>
				<Text className="italic text-gray-700">Este precio incluye las comisiones de la app</Text>
				{/* <TouchableOpacity onPress={() => setStep(STEPS.CHECKOUT)} className="mt-10 w-64 h-14 bg-naranja rounded-2xl flex flex-col items-center justify-center"> */}
				<TouchableOpacity onPress={() => {}} className="mt-10 w-64 h-14 bg-naranja rounded-2xl flex flex-col items-center justify-center">
					<Text className="text-white font-bold">Reservar</Text>
				</TouchableOpacity>
			</View>
			<PaseadorTabs query={query} totalPrice={displayTotalPrice} pricePerHour={price} reviews={reviews}/>
		</ScrollView>
	)
}

export default PerfilContratado