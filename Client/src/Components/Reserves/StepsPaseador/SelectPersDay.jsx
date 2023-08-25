import React,{ useState } from 'react'
import { ScrollView,Text,View } from 'react-native'
import DatePicker from '../Components/DatePicker'
import { TouchableOpacity } from 'react-native'
import { GetFilteredProfessionals } from '../../../metodos/professionalMetodos'
import { setFilteredProfessionals } from '../../../Redux/ReducerProffesional'
import { useDispatch } from 'react-redux'
const SelectPersDay = ({ query,setQuery,STEPS,setStep }) => {
	
	const dispatch = useDispatch()
	const [selectedHour,setSelectedHour] = useState("")
	const [cantidadHorarios,setCantidadHorarios] = useState([0])
	const [counter,setCounter] = useState(1)

	const GetProfessionals = async () => {
		await GetFilteredProfessionals({
			query,
			loading: (b) => console.log(b),
			error: (msg) => console.log(msg),
			success: (res) =>{dispatch(setFilteredProfessionals(res))}
		});
	};

	return (
		<ScrollView className="w-screen h-screen">
			<View className="w-full px-4 my-4 ">
				<Text className="font-poppinsBold text-xl text-center mt-9 ">Fechas personalizadas</Text>
				<Text className="font-poppins text-sm text-justify my-9 px-9 ">Una vez escrita la fecha que desea podrá seleccionar en el desplegable inferior un horario disponible por el paseador en la fecha elegida.</Text>
				{cantidadHorarios?.map((n) => {
					if (n || n === 0) return <DatePicker key={n} i={n} query={query} setQuery={setQuery} counter={counter} cantidadHorarios={cantidadHorarios} setCantidadHorarios={setCantidadHorarios}/>
				})}
				<View className="flex flex-col mt-10 items-center justify-center space-y-5">
					<TouchableOpacity onPress={() => { setCantidadHorarios([...cantidadHorarios,counter]); setCounter(counter + 1) }} className="flex flex-col justify-center w-64 h-14 bg-celeste rounded-2xl">
						<Text className="font-bold text-base text-white text-center">Agregar otra fecha</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => {
						query.persDates.forEach(date => {
							if(date !== null) setStep(STEPS.PROFESSIONALS); GetProfessionals()
						});
					}} className="flex flex-col justify-center w-64 h-14 bg-naranja rounded-2xl">
						<Text className="font-bold text-base text-white text-center">Siguiente</Text>
					</TouchableOpacity>
				</View>
			</View>

		</ScrollView>
	)
}

export default SelectPersDay