import React,{ useEffect,useState } from 'react'
import { Image,Text,TouchableOpacity,View } from 'react-native'
import StarRating from '../../ProfessionalArea/Profile/StarRating'
import { useDispatch } from 'react-redux'
import { setProfessionalPets } from '../../../Redux/ReducerServices'
import { setProfessional } from '../../../Redux/ReducerProffesional'
import { GetProfessionalPets } from '../../../metodos/professionalMetodos'

const CardCuidador = ({ professional,services,setStep,STEPS,setDisplayTotalPrice,startDate,endDate, setProductId }) => {
	const dispatch = useDispatch()

	const [totalPrice,setTotalPrice] = useState(null)


	useEffect(() => {

		const partesStartDate = startDate.split("/");
		const fechaInicio = new Date(partesStartDate[2],partesStartDate[1] - 1,partesStartDate[0]).getTime()

		const partesEndDate = endDate.split("/");
		const fechaFinal = new Date(partesEndDate[2],partesEndDate[1] - 1,partesEndDate[0]).getTime()

		const diferenciaEnDias = (fechaFinal - fechaInicio) / (1000 * 60 * 60 * 24)

		console.log(diferenciaEnDias);

		let total = 0
		if (services) {
			services.forEach((service) => {
				setProductId(service.stripeProduct_id)
				const numero = parseFloat(service.price.replace(',','.'));
				console.log(service);
				total += numero
				console.log(numero);
			})
		}
		total = total * diferenciaEnDias * 1.15
		setTotalPrice(total.toFixed(2).replace('.',','))
	},[professional,services])

	const getProfessionalInfo = async () => {
		dispatch(setProfessional(professional))

		await GetProfessionalPets({
			id: professional.user,
			success: (pets) => dispatch(setProfessionalPets(pets)),
			loading: (l) => console.log(l),
			error: (msg) => console.log(msg)
		})
	}

	return (
		<View className="flex flex-row justify-start bg-new w-full rounded-2xl h-36 p-4 my-4">
			<View className="mr-5">
				{professional.profilePic && <Image source={{ uri: professional.profilePic }} className="w-16 h-16 rounded-full" />}
			</View>
			<View>
				<Text className="font-bold text-base">{professional.name}</Text>
				<Text>Del {startDate} al {endDate}</Text>
				<StarRating rating={4} />
				<TouchableOpacity onPress={() => { setStep(STEPS.PROFILE); getProfessionalInfo(); setDisplayTotalPrice(totalPrice) }} className="flex flex-row h-8 items-center bg-black rounded-[10px] px-4 mt-2">
					<View className="flex flex-row items-center">
						<Text className="text-white text-sm ">Ver propuesta | <Text className="text-white font-poppinsSemiBold h-auto">{totalPrice}€</Text>
						</Text>
					</View>
				</TouchableOpacity>

			</View>

		</View>
	)
}

export default CardCuidador