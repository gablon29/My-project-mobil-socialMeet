import React from 'react'
import { ScrollView,Text,View } from 'react-native'
import DisplayTabs from './Tabs/DisplayTabs'
import ProfessionalProfile from './ProfessionalProfile'
import Button from '../../Buttons/ButtonCuston'
import { useNavigation } from '@react-navigation/native'

const DisplayProfessionalProfile = ({ route }) => {
	const navigate = useNavigation()
	return (
		<ScrollView>
			<ProfessionalProfile />

			<View className="flex flex-col justify-center items-center">
				<Button onPress={()=>navigate.navigate("EditProfessionalProfile")} title="Configurar mi perfil" titleClass="text-base text-naranja font-semibold" buttonClass="bg-transparent w-64 h-14 rounded-2xl border-2 border-naranja justify-center items-center mb-8" />

				<View className="relative">
					<View className="z-10 flex flex-row justify-center items-center absolute top-[-8px] right-[-8px] bg-naranja rounded-full w-8 h-8 border border-white ">
						<Text className="text-white text-center font-medium text-xs rounded-full w-5 h-5">3</Text>
					</View>
					<Button title="Calendario de servicios" titleClass="text-white font-semibold text-base" buttonClass="bg-celeste w-64 h-14 rounded-2xl items-center justify-center" />
				</View>
			</View>

			<DisplayTabs />
		</ScrollView>
	)
}

export default DisplayProfessionalProfile