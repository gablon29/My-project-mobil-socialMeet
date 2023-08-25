import React from 'react'
import { Image,ScrollView,Text,TouchableOpacity,View } from 'react-native';
import Button from '../../Buttons/ButtonCuston';

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
			setQuery({ ...query,animals: [...query.animals,{ name: pet.name,weight: {kilos: pet.weight.kilos, gramos: pet.weight.gramos},specie: pet.specie }] })

		}
	}
	return(
	<ScrollView>
	<View className="flex flex-col items-center space-y-14 h-full pt-20 ">
		<Text className="font-poppinsBold text-xl text-center ">
			Selecciona una o varias de tus mascotas
		</Text>

		<View className="flex flex-row flex-wrap justify-center space-x-6 px-4">
			{myPets && myPets?.map((pet,i) => {
				return <View key={i} className="flex flex-col items-center mt-2 w-20">
					<TouchableOpacity onPress={() => handleActive(pet)}>
						<View className={`flex flex-col items-center justify-center w-20 h-20 rounded-xl ${isActive.includes(pet.name) && "border-4"}`}>
							<Image source={ pet?.profilePic ? {uri: pet?.profilePic} : require("../../../../images/dog1.png") } className="h-full w-full rounded-xl border-4" style={{ borderRadius: 10,borderWidth: 4 }} />
						</View>
					</TouchableOpacity>
					<Text className="text-center text-base font-poppinsSemiBold">{pet.name}</Text>
				</View>
			})}
		</View>
		<Button
		dissable={query.animals.length === 0 ? false : true}
         onPress={() => {
			setStep(STEPS.PLACE)
		}}
          buttonClass={'justify-center w-64 h-14 bg-naranja rounded-2xl mt-10'}
          title={'Siguiente'}
          titleClass={'font-bold text-base text-white text-center'}
        />

	</View>
	</ScrollView>
)}

export default SelectPets