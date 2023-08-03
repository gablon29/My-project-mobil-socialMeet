import React from 'react'
import { ScrollView,Text,TouchableOpacity } from 'react-native'
import SelectTab from './Tabs/SelectTab'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const EditProfessionalProfile = () => {
	const navigation = useNavigation();
	return (
		<ScrollView>
			<TouchableOpacity className="flex flex-row items-center">
				<TouchableOpacity className="flex flex-row items-center m-2" onPress={()=>navigation.goBack()}>
					<Icon name="arrow-left" size={30} color="black" />
					<Text className="text-base">
						Atrás
					</Text>
				</TouchableOpacity>
			</TouchableOpacity>
			
			<SelectTab />
			
		</ScrollView>
	)
}

export default EditProfessionalProfile