import React,{ useEffect,useState } from 'react'
import { Image,Text,TouchableOpacity,View } from 'react-native'
import StarRating from '../../ProfessionalArea/Profile/StarRating'
import { useDispatch } from 'react-redux'
import { setProfessionalPets } from '../../../Redux/ReducerServices'
import { setProfessional } from '../../../Redux/ReducerProffesional'
import { GetProfessionalPets } from '../../../metodos/professionalMetodos'

const CardPaseador = ({ professional,setStep,STEPS,query, setDisplayTotalPrice }) => {
	const dispatch = useDispatch()

	const [totalPrice,setTotalPrice] = useState(null)

	useEffect(() => {
		console.log(professional);
		const {dateType, persDates, animals } = query
		console.log(persDates);
		const price = Number(professional?.professions?.paseador?.services?.price)
		let subtotal = 0
		if (dateType === "pers") {
			persDates.forEach((d) => {
				if (d) {
					subtotal += price
				}
			})
		}
		
		subtotal = subtotal * animals.length

		setTotalPrice(subtotal)
	},[])

	const getProfessionalInfo = async () => {
		dispatch(setProfessional(professional))
	}

	return (
		<View className="flex flex-row justify-start bg-new w-full rounded-2xl h-36 p-4 my-4">
			<View className="mr-5">
				{professional.profilePic && <Image source={{ uri: professional.profilePic }} className="w-16 h-16 rounded-full" />}
			</View>
			<View>
				<Text className="font-bold text-base">{professional.name}</Text>
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

export default CardPaseador