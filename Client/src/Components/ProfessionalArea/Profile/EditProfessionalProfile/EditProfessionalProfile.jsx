import React,{ useEffect, useState } from 'react'
import { ScrollView,Text,TouchableOpacity } from 'react-native'
import SelectTab from './Tabs/SelectTab'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
const EditProfessionalProfile = ({ route }) => {
	const navigation = useNavigation();
	const profession = route.params.profession


	return (
		<ScrollView>
			<TouchableOpacity className="flex flex-row items-center">
				<TouchableOpacity className="flex flex-row items-center m-2" onPress={() => navigation.goBack()}>
					<Icon name="arrow-left" size={30} color="black" />
					<Text className="text-base">
						Atrás
					</Text>
				</TouchableOpacity>
			</TouchableOpacity>

			<SelectTab profession={profession} professional={""} />

		</ScrollView>
	)
}

export default EditProfessionalProfile