import React from 'react'
import { Text,Image, View } from 'react-native'

const UserInfo = ({firstName, lastName, country, province, profilePic}) => {
	return (
		<View className="flex flex-col items-center space-y-3  my-12">
			<Image source={{ uri: profilePic }} className="rounded-full w-24 h-24" />
			<Text className="font-bold font-poppins">
				{firstName} {lastName}
			</Text>
			<Text className="font-poppins">
				{country} | {province} | localidad | x Años
			</Text>
		</View>
	)
}

export default UserInfo