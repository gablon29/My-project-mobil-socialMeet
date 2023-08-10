import React,{ useEffect,useState } from 'react'
import perro from '../../../../../images/especies/ic_perro.png';
import gato from '../../../../../images/especies/ic_gato.png';
import ave from '../../../../../images/especies/ic_ave.png';
import reptil from '../../../../../images/especies/ic_reptil.png';
import pez from '../../../../../images/especies/ic_pez.png';
import huron from '../../../../../images/especies/conejo.png';
import conejo from '../../../../../images/especies/ardilla.png';
import roedor from '../../../../../images/especies/ic_roedor.png';
import { Image,Text,View } from 'react-native'
import { useSelector } from 'react-redux'

const InformationPaseadorTab = () => {
	const profession = useSelector(state => state?.ReducerProfessional?.profession)
	const caracteristicasProfesional = useSelector(state => state?.ReducerProfessional?.userProfessional?.professions[profession]?.caracter)

	const [caracteristicas,setCaracteristicas] = useState([
		{ title: "Tengo conocimientos en primeros auxilios",caracteristica: "p_auxilios" },
		{ title: "Tengo conocimientos veterinarios",caracteristica: "conocimiento_veterinario" },
		{ title: "Tengo experiencia paseando perros",caracteristica: "e_paseador" }
	])




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

	return (
		<View>
			<View className="flex flex-col space-y-32 items-center mt-14">
				
				<View className="bg-lightnew w-5/6 px-5 z-10 pt-16 rounded-[10px]">
					<View className="absolute top-[-50px] left-5 w-24 h-24 bg-new rounded-full border-[5px] border-white justify-center items-center">
						<Image source={perro} className="h-14 w-14" resizeMode="contain" />
					</View>

					<View>
						<Text className="font-poppinsSemiBold text-[20px]">{"Paseo de perros"}</Text>
						<Text className="font-poppins text-sm">Precio por hora</Text>
					</View>

					<View className="flex flex-col my-8 space-y-5">
						<View className="flex flex-row items-center">
							<Text className="text-base font-poppinsBold">Paseo</Text>
							<View className="flex-grow h-px bg-black mx-2"></View>
							<Text className="font-poppins text-base"> $</Text>
						</View>
					</View>

				</View>
			</View>
			<View className="w-screen rounded-t-[50px] pt-6 px-6 mt-10 pb-10">
				<Text className="font-bold text-lg mb-5">Información general</Text>
				<View className="flex flex-col space-y-6">
					{caracteristicas?.map((c,i) => (
						<View key={i} className="flex flex-row items-center  gap-2">
							{caracteristicasProfesional ? caracteristicasProfesional[c.caracteristica] ? check : not : <></>}
							<Text className="font-medium">{c.title}</Text>
						</View>
					))}
				</View>
			</View>
		</View>
	)
}

export default InformationPaseadorTab