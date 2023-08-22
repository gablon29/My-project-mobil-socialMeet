import React from 'react'
import { Image,Text,TouchableOpacity,View } from 'react-native';

const SelectPets = ({ query,setQuery,myPets,setStep,isActive,setIsActive,STEPS }) => {

	const handleActive = (pet) => {
		if (isActive.includes(pet.name)) {
			const newActive = isActive.filter((p) => p !== pet.name)
			const newAnimals = query.animals.filter((p) => p.name !== pet.name)
			setIsActive(newActive)
			setQuery({ ...query,animals: newAnimals })
		} else {
			const newActive = [...isActive,pet.name];
			setIsActive(newActive);
			setQuery({ ...query,animals: [...query.animals,{ name: pet.name,weight: { kilos: pet.weight.kilos,gramos: pet.weight.gramos },specie: pet.specie }] })

		}
	}
	return <View className="flex flex-col items-center space-y-14 h-full pt-20 ">
		<Text className="font-poppinsBold text-xl text-center ">
			Selecciona una o varias de tus mascotas
		</Text>

		<View className="flex flex-row flex-wrap justify-center space-x-6 px-4">
			{myPets?.map((pet,i) => {
				return <View key={i} className="flex flex-col items-center mt-2 w-20">
					<TouchableOpacity onPress={() => handleActive(pet)}>
						<View className={`flex flex-col items-center justify-center w-20 h-20 rounded-xl ${isActive.includes(pet.name) && "border-4"}`}>
							<Image source={{ uri: pet.profilePic }} className="h-full w-full rounded-xl border-4" style={{ borderRadius: 10,borderWidth: 4 }} />
						</View>
					</TouchableOpacity>
					<Text className="text-center text-base font-poppinsSemiBold">{pet.name}</Text>
				</View>
			})}
		</View>

		<TouchableOpacity onPress={() => {
			if (query.animals.length === 0) return
			setStep(STEPS.LOCATION)
		}} className="flex flex-col justify-center w-64 h-14 bg-naranja rounded-2xl">
			<Text className="font-bold text-base text-white text-center">Siguiente</Text>
		</TouchableOpacity>

	</View>
}

export default SelectPets