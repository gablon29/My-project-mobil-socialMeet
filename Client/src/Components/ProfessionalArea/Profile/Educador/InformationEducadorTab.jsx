import React,{ useEffect,useState } from 'react'
import perro from '../../../../../images/especies/ic_perro.png';
import { Image,Text,View } from 'react-native'
import { useSelector } from 'react-redux'
const InformationEducadorTab = () => {
	const profession = useSelector(state => state?.ReducerProfessional?.profession)

	const caracteristicasProfesional = useSelector(state => state?.ReducerProfessional?.userProfessional?.professions[profession]?.caracter)
	const savedService = useSelector(state => state?.ReducerProfessional?.userProfessional?.professions[profession]?.services?.price)

	const [caracteristicas,setCaracteristicas] = useState([
		{ title: "Tiene una titulación como adiestrador",caracteristica: "titulacon_adiestrador" },
		{ title: "Tiene más de 2 años de experiencia",caracteristica: "experiencia_2a" },
		{ title: "Tiene experiencia con perros difíciles",caracteristica: "e_perros_dif" }
	])

	useEffect(()=>{
	},[])

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
						<Text className="font-poppinsSemiBold text-[20px]">Adiestramiento</Text>
						<Text className="font-poppins text-sm">Precio por sesión</Text>
					</View>

					<View className="flex flex-col my-8 space-y-5">
						<View className="flex flex-row items-center">
							<Text className="text-base font-poppinsBold">Adiestramiento</Text>
							<View className="flex-grow h-px bg-black mx-2"></View>
							<Text className="font-poppins text-base font-medium	">{savedService} $</Text>
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
export default InformationEducadorTab