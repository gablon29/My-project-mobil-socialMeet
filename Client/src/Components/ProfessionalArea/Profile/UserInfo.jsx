import React,{ useEffect,useState } from 'react'
import { Text,Image,View } from 'react-native'
import { useSelector } from 'react-redux'
import Pawpoints from './Pawpoints'

const UserInfo = () => {
	const { profilePic,city,province,country,fechaNacimiento } = useSelector((state) => state.ReducerProfessional.userProfessional)
	const { firstName,lastName } = useSelector((state) => state.ReducerAuth.profile);

	const [edad,setEdad] = useState("undefined")

	const calcularEdad = (fechaNacimiento,fechaActual) => {
		const nacimiento = new Date(fechaNacimiento);
		const actual = new Date(fechaActual);

		let edad = actual.getFullYear() - nacimiento.getFullYear();

		if (actual.getMonth() < nacimiento.getMonth() || (actual.getMonth() === nacimiento.getMonth() && actual.getDate() < nacimiento.getDate())) {
			edad--;
		}

		return edad;
	}

	useEffect(() => {
		setEdad(calcularEdad(fechaNacimiento,new Date()))
	},[fechaNacimiento])

	return (
		<View className="flex flex-col items-center space-y-6 mt-12">
			<Image source={{ uri: profilePic }} className="rounded-full w-24 h-24" />
			<View className="flex flex-col items-center mb-4">

				<Text className="font-bold font-poppins">
					{firstName} {lastName}
				</Text>
				<Text className="font-poppins">
					{country} | {province} | {city} | {edad} años
				</Text>
			</View>
		</View>
	)
}

export default UserInfo