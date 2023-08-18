import React,{ useEffect,useState } from 'react'
import { Image,Text,TextInput,TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import perro from '../../../../../../images/especies/ic_perro.png';
import Button from '../../../../Buttons/ButtonCuston';
import { useSelector } from 'react-redux';
import { useServices } from '../../../../../CustomHooks/useServices';

const EducadorPriceTab = () => {
	const { setServices,saveServices,petsPerNight,setPetsPerNight } = useServices()
	const { country,province,city } = useSelector(state => state?.ReducerProfessional?.userProfessional)
	const profession = useSelector(state => state?.ReducerProfessional?.profession)
	const savedService = useSelector(state => state?.ReducerProfessional?.userProfessional?.professions[profession]?.services?.price)
	const capacity = useSelector(state => state?.ReducerProfessional?.userProfessional?.professions[profession]?.capacity)
	const [price,setPrice] = useState(savedService || 0)

	useEffect(() => {
		if (capacity) {
			setPetsPerNight(capacity)
		}	
	},[])

	const handlePriceChange = (input) => {
		const numericRegex = /^[0-9]*\,?[0-9]*$/
		if (numericRegex.test(input)) {
			setPrice(input);
			setServices([{ name: "Adiestramiento de perros",price: input,country,province,city,profession }])
		}
	}

	return (<>
		<View className="flex flex-col items-center  px-5">
			<Text className="font-poppinsSemiBold text-base text-center mt-6 mb-4">¿Cuántos perros aceptas por día?</Text>
			<Text className="font-poppins text-center w-3/4 text-sm">En base a esto calcularemos el cupo maximo de mascotas por día en las reservas</Text>
			<View className="flex flex-row justify-evenly my-7">
				{[1,2,3,4,5].map((n) => (
					<TouchableOpacity key={n} onPress={() => { setPetsPerNight({ Perro: n }) }} className={`${petsPerNight?.Perro === n && "border-[2px] border-black "} flex flex-row items-center justify-center bg-new w-9 h-9 mx-2 rounded-[10px]`}>
						<Text className=" font-poppinsBold text-base text-center " style={{ textAlignVertical: "center" }}>{n}</Text>
					</TouchableOpacity>
				))}
			</View>

			<View className="pt-20 mt-20 relative flex flex-col w-full rounded-[10px] bg-lightnew px-5 pb-5">
				<View className="absolute -top-10 left-5 w-24 h-24 border-[5px] border-white rounded-full bg-new justify-center items-center">
					<Image source={perro} className="w-10 h-14" resizeMode='contain' />
				</View>
				<View className="flex flex-col items-center px-4">
					<Text className="font-poppinsSemiBold text-xl ">Adiestrador</Text>
				</View>


				<Text className="font-poppins text-center text-sm">A continuación pon el precio por hora de tus servicios</Text>
				<View className="bg-white w-full rounded-[10px] my-3 py-4">
					<View className="flex flex-col items-center justify-center space-y-4 ">
						<Text className="font-poppinsBold text-base">Sesión de adiestramiento</Text>
						<Text className="font-poppins text-sm">Precio por sesión</Text>
						<View className="relative flex flex-row items-center justify-center">
							<TextInput
								className="bg-celeste w-3/5 text-white font-poppins text-center text-xl rounded-[10px]"

								value={price}
								onChangeText={handlePriceChange}
								keyboardType="numeric"
								placeholder='-'
								placeholderTextColor="white"
							/>
							<View className="absolute right-3">
								<Text className="text-xl text-white font-poppins">€</Text>
							</View>
						</View>

					</View>
				</View>

			</View>
			<Button onPress={saveServices} title="Guardar" titleClass="text-base text-naranja font-semibold" buttonClass="bg-transparent w-64 h-14 rounded-2xl border-2 border-naranja justify-center items-center my-20" />

		</View>
	</>
	)
}


export default EducadorPriceTab