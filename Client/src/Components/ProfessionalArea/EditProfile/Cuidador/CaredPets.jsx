import React from 'react'
import { Image,Text,TouchableOpacity,View } from 'react-native';
import ServicioCuidador from './ServicioCuidador';

const CaredPets = ({ pet,nombreAnimal,services,setServices, petsPerNight,setPetsPerNight }) => {
	
	return (
		<View className="flex flex-col items-center rounded-[10px] mt-20 px-5 pt-20 bg-lightnew pb-5">
			<View className="absolute -top-10 left-5 w-24 h-24 border-[5px] border-white rounded-full bg-new justify-center items-center">
				<Image source={pet.image} className="w-10 h-14" resizeMode='contain' />
			</View>
			<View className="flex flex-col items-center px-4">
				<Text className="font-poppinsSemiBold text-xl ">Cuidado de {pet.title}</Text>
				<Text className="font-poppinsSemiBold text-base text-center mt-6 mb-4">¿Cuántos {pet.title} aceptas por noche?</Text>
				<Text className="font-poppins text-center text-sm">En base a esto calcularemos el cupo maximo de mascotas por noche en las reservas</Text>
			</View>

			<View className="flex flex-row justify-evenly my-7">
				{[1,2,3,4,5].map((n) => (
					<TouchableOpacity key={n} onPress={() => { setPetsPerNight({...petsPerNight, [pet.title]:n}) }} className={`${petsPerNight[pet.title] === n && "border-[2px] border-black "} flex flex-row items-center justify-center bg-white w-9 h-9 mx-2 rounded-[10px]`}>
						<Text className=" font-poppinsBold text-base text-center " style={{ textAlignVertical: "center" }}>{n}</Text>
					</TouchableOpacity>
				))}
			</View>

			<Text className="font-poppins text-center text-sm">A continuación selecciona que características aceptas y tu precio en cada una</Text>

			{pet.categories.map((category,i) => (
				<ServicioCuidador key={i} petName={pet.title} nombreAnimal={nombreAnimal} category={category} services={services} setServices={setServices}/>
			))}
		</View>
	)
}

export default CaredPets