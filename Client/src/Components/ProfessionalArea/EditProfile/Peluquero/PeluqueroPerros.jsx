import React from 'react'
import { Image,Text,View } from 'react-native'
import ServiciosPerros from './ServiciosPerros'

const PeluqueroPerros = ({ pet,services,setServices,dogServices,image }) => {
	return (
		<View className="pt-20 mt-20 relative flex flex-col justify-center items-center rounded-[10px] bg-lightnew px-5 pb-5">
			<View className="absolute -top-10 left-5 w-24 h-24 border-[5px] border-white rounded-full bg-new justify-center items-center">
				<Image source={image} className="w-10 h-14" resizeMode='contain' />
			</View>
			<View className="flex flex-col items-center px-4">
				<Text className="font-poppinsSemiBold text-xl text-center">Cuidado de {pet.name}</Text>
			</View>

			<Text className="font-poppins text-center text-sm">A continuación selecciona que características aceptas y tu precio en cada una</Text>

			<View className="w-full">
				{dogServices.map((dogService,i) => (
					<ServiciosPerros key={i} petName={pet.name} peso={pet.peso} dogService={dogService} services={services} setServices={setServices} />
				))}
			</View>
		</View>
	)
}

export default PeluqueroPerros