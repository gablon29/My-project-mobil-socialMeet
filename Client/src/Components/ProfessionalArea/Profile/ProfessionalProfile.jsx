import React from 'react';
import { View,Text,ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

import UserInfo from './UserInfo';
import Pawpoints from './Pawpoints';
const ProfessionalProfile = () => {

	const { description,pawpoints } = useSelector((state) => state.ReducerProfessional.userProfessional)


	return (
		<ScrollView className="">
			<View className="flex flex-col items-center justify-center">
				<UserInfo />
				<Pawpoints pawpoints={pawpoints || 0} />
				<Text className="w-80 font-poppins text-center font-medium my-10">{description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos obcaecati fugiat sapiente inventore! Vero perferendis possimus ab mollitia, est accusamus quasi illum numquam amet velit, ea impedit vitae adipisci nisi!"} </Text>
			</View>
		</ScrollView>
	);
};

export default ProfessionalProfile;
