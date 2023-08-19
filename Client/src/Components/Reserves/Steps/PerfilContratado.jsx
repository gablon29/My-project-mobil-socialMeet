import React,{ useEffect,useState } from 'react'
import { Image,ScrollView,Text,TouchableOpacity,View } from 'react-native'
import UserInfo from '../../ProfessionalArea/Profile/UserInfo'
import Pawpoints from '../../ProfessionalArea/Profile/Pawpoints'
import { useSelector } from 'react-redux'
import { usePay } from '../../../CustomHooks/usePay'

const PerfilContratado = ({ profession,setStep,STEPS,query,displayTotalPrice,productId }) => {

	const { description,pawpoints } = useSelector((state) => state?.ReducerProfessional?.userProfessional)
	const professional = useSelector((state) => state?.ReducerProfessional?.userProfessional)
	const professionalPets = useSelector(state => state?.ReducerServices?.professionalPets)
	const { handleBuy } = usePay()

	const check = (
		<View className="bg-green-600 w-5 h-5 rounded-full items-center justify-center">
			<Text className="font-bold text-white text-center">✓</Text>
		</View>
	);
	const not = (
		<View className="relative bg-red-600 w-5 h-5 rounded-full items-center justify-center">
			<Text className="absolute top-[-1px] font-bold text-white">x</Text>
		</View>
	);



	const caracteristicas = [
		{ title: "Tengo jardín",caracteristica: "jardin" },
		{ title: "Tengo niños",caracteristica: "niños" },
		{ title: "Tengo mascotas",caracteristica: "mascotas" },
		{ title: "Tengo conocimientos en primeros auxilios",caracteristica: "p_auxilios" },
		{ title: "Puedo administrar medicamentos orales",caracteristica: "m_orales" },
		{ title: "Puedo administrar medicamentos inyectables",caracteristica: "m_inyectables" },
		{ title: "Tengo experiencia con mascotas mayores",caracteristica: "e_mascotas_mayores" }
	]

	return (
		<ScrollView className="">
			<TouchableOpacity onPress={() => setStep(STEPS.PROFESSIONALS)} className="flex flex-col justify-center w-64 h-14 bg-naranja rounded-2xl">
				<Text className="font-bold text-base text-white text-center">Atrás</Text>
			</TouchableOpacity>
			<View className="flex flex-col items-center justify-center">
				<UserInfo />
				<Pawpoints pawpoints={pawpoints || 0} />
				<Text className="w-80 font-poppins text-center font-medium my-10">{description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos obcaecati fugiat sapiente inventore! Vero perferendis possimus ab mollitia, est accusamus quasi illum numquam amet velit, ea impedit vitae adipisci nisi!"} </Text>
			</View>

			<View className="w-full	flex flex-col items-center">
				<Text className="font-poppinsSemiBold">Precio total</Text>
				<Text className="text-gray-700">Del {query.startDate} al {query.endDate}</Text>
				<Text className="text-4xl font-poppinsSemiBold mt-7">{displayTotalPrice}€</Text>
				<Text className="italic text-gray-700">Este precio incluye las comisiones de la app</Text>
				{/* <TouchableOpacity onPress={() => setStep(STEPS.CHECKOUT)} className="mt-10 w-64 h-14 bg-naranja rounded-2xl flex flex-col items-center justify-center"> */}
				<TouchableOpacity onPress={() => handleBuy({
					succes:(msg)=>console.log(msg),
					error:(msg)=>console.log(msg),
					loading:(msg)=>console.log(msg),
					productId,
					shippingAdress:{direccion1:"asdasd"}
				})} className="mt-10 w-64 h-14 bg-naranja rounded-2xl flex flex-col items-center justify-center">
					<Text className="text-white font-bold">Reservar</Text>
				</TouchableOpacity>
			</View>

			<View className="w-full mt-10">
				<Text className="font-poppins text-base text-left font-bold mb-5 px-4">Aquí cuidaré de tu mascota</Text>
				<View className="flex flex-row flex-wrap justify-center gap-4">
					{professional?.professions[profession]?.gallery?.map((img,_idx) => {
						return <View key={_idx} className="justify-start items-center rounded-[10px]">
							<Image source={{ uri: img[0] }} className="w-24 h-24 rounded-[10px]" resizeMode='contain' />
						</View>
					})}
				</View>
			</View>

			<View className="w-full px-6 my-14">

				<View className="flex flex-row w-full justify-between bg-new  p-4 rounded-[10px]">
					<Text className="font-poppinsBold">Mascotas cuidadas</Text>
					<Text className="font-poppinsBold">7</Text>
				</View>
			</View>

			{professionalPets?.length > 0 &&
				<View className="w-screen mt-10">
					<Text className="font-poppins text-base text-left font-bold mb-5 px-4">Estas son mis mascotas</Text>
					<View className="flex flex-row flex-wrap gap-5 justify-center px-8">
						{professionalPets?.map((pet,_idx) => {

							return <View key={_idx} className="bg-celeste rounded-xl w-full p-4 shadow-2xl">
								<View className="flex flex-row items-center mb-4">
									<Image source={{ uri: pet.profilePic }} className="w-14 h-14 mr-4 rounded-full" />
									<View>
										<Text className="text-white font-medium text-base">{pet.name}</Text>
										<Text className="text-white font-normal text-sm">{pet.specie} | {pet.breed} | {pet.age.years} {pet.age.years === 1 ? "año" : "años"}, {pet.age.months} meses</Text>
									</View>
								</View>
								<Text className="text-white text-xs text-justify leading-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eligendi in, officia praesentium enim sequi voluptatum sed laboriosam, qui ducimus veniam dignissimos, corrupti incidunt mollitia magni neque laborum? Laborum, illum.</Text>
							</View>
						})}
					</View>
				</View>
			}

			<View className="bg-new w-screen rounded-t-[50px] pt-6 px-6 mt-10 pb-10">
				<Text className="font-bold text-lg mb-5">Información general</Text>
				<View className="flex flex-col space-y-6">
					{caracteristicas?.map((c,i) => (
						<View key={i} className="flex flex-row items-center  gap-2">
							{professional?.professions[profession]?.caracter
								? professional?.professions[profession]?.caracter[c.caracteristica] ? check : not
								: <></>}
							<Text className="font-medium">{c.title}</Text>
						</View>
					))}
				</View>
			</View>
		</ScrollView>
	)
}

export default PerfilContratado