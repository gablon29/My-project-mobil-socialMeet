import React,{ useEffect } from 'react'
import { ScrollView,Text,View } from 'react-native'
import ProfessionalProfile from './ProfessionalProfile'
import Button from '../../Buttons/ButtonCuston'
import { useNavigation } from '@react-navigation/native'
import { useDispatch,useSelector } from 'react-redux'
import { GetDataProfessionalMethod } from '../../../metodos/professionalMetodos'
import { setErrorProfessional,setLoadingProffesional,setProfessional } from '../../../Redux/ReducerProffesional'
import DisplayTabs from './DisplayTabs'

const DisplayProfessionalProfile = ({ route }) => {
	const navigate = useNavigation()


	//de este tendriamos que sacar los datos del profesional segun la profesion que llega por params no se bien cual esta hecho y no puedo ver el console.log
	const professionals = useSelector((state) => state.ReducerProfessional.userProfessionals);
	//educador // veterinario cuidadorpaseador peluquero tienda
	//seria mas o menos asi 
	const professionMap = {
		paseador: professionals.paseador,
		peluquero: professionals.peluquero,
		veterinario: professionals.veterinario,
		tienda: professionals.tienda,
		cuidador: professionals.cuidador,
	};
	
	let profesional = professionMap[route.params.profession]
	//abria que mirar bien como llega y como se guardan en redux al entrar a 1 perfil con console.log pero no logro entrar despues mandar por props a profesional y renderizar descripcion reviewrs etc segun el tipo de profesional.
	
	return (
		<ScrollView>
			<ProfessionalProfile/>

			<View className="flex flex-col justify-center items-center">
				<Button onPress={() => navigate.navigate("EditProfessionalProfile",{ profession: route.params.profession })} title="Configurar mi perfil" titleClass="text-base text-naranja font-semibold" buttonClass="bg-transparent w-64 h-14 rounded-2xl border-2 border-naranja justify-center items-center mb-8" />

				<View className="relative">
					<View className="z-10 flex flex-row justify-center items-center absolute top-[-8px] right-[-8px] bg-naranja rounded-full w-8 h-8 border border-white ">
						<Text className="text-white text-center font-medium text-xs rounded-full w-5 h-5">3</Text>
					</View>
					<Button title="Calendario de servicios" titleClass="text-white font-semibold text-base" buttonClass="bg-celeste w-64 h-14 rounded-2xl items-center justify-center" />
				</View>
			</View>

			<DisplayTabs/>
		</ScrollView>
	)
}

export default DisplayProfessionalProfile