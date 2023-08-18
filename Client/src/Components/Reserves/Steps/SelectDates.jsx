import React from 'react'
import { Text,TextInput,TouchableOpacity,View } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { setServices } from '../../../Redux/ReducerServices';
import { GetFilteredProfessionals } from '../../../metodos/professionalMetodos';
import { setFilteredProfessionals } from '../../../Redux/ReducerProffesional';

const SelectDates = ({ setStep,STEPS,query,setQuery }) => {
	const dispatch = useDispatch()

	const GetProfessionals = async () => {
		await GetFilteredProfessionals({
			query,
			loading: (b) => console.log(b),
			error: (msg) => console.log(msg),
			success: (res) => dispatch(setFilteredProfessionals(res)),
		});
	};

	const handleDateChange = (inputValue,date) => {
		const numericValue = inputValue.replace(/\D/g,'');
		const dateType = date === "start" ? "startDate" : "endDate"

		if (numericValue.length <= 2) {
			setQuery({ ...query,[dateType]: numericValue })
		} else if (numericValue.length <= 4) {
			const parsedDate = `${numericValue.slice(0,2)}/${numericValue.slice(2)}`
			setQuery({ ...query,[dateType]: parsedDate })
		} else {
			const parsedDate = `${numericValue.slice(0,2)}/${numericValue.slice(2,4)}/${numericValue.slice(4,8)}`;
			setQuery({ ...query,[dateType]: parsedDate })
		}
	};


	return (
		<View className="flex flex-col items-center h-full pt-20 ">
			<Text className="text-xl font-poppinsBold mb-10">¿Cuándo lo necesitas?</Text>
			<View className="flex flex-col space-y-5">
				<View>
					<Text className="font-poppinsSemiBold text-base pl-5">Fecha de inicio</Text>
					<TextInput
						keyboardType="numeric"
						value={query.startDate}
						placeholder='00/00/0000'
						onChangeText={(startDate) => { handleDateChange(startDate,"start") }}
						className="bg-new w-[270px] h-[47px] rounded-[10px] p-[10px] pl-4 text-base font-poppins"
						boxStyles={{
							backgroundColor: '#FEC89A',
							borderRadius: 10,
							borderColor: '#FEC89A',
						}}
						placeholderTextColor="black"
					/>
				</View>
				<View>
					<Text className="font-poppinsSemiBold text-base pl-5">Fecha final</Text>
					<TextInput
						keyboardType="numeric"
						value={query.endDate}
						placeholder='00/00/0000'
						onChangeText={(endDate) => { handleDateChange(endDate,"end") }}
						className="bg-new w-[270px] h-[47px] rounded-[10px] p-[10px] pl-4 text-base font-poppins"
						boxStyles={{
							backgroundColor: '#FEC89A',
							borderRadius: 10,
							borderColor: '#FEC89A',
						}}
						placeholderTextColor="black"
					/>
				</View>
			</View>

			<View className="flex flex-col space-y-5 mt-36">
				<TouchableOpacity onPress={() => { setStep(STEPS.PROFESSIONALS); GetProfessionals(); console.log(query); }} className="flex flex-col justify-center w-64 h-14 bg-naranja rounded-2xl">
					<Text className="font-bold text-base text-white text-center">Siguiente</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setStep(STEPS.PLACE)} className="flex flex-col justify-center w-64 h-14 bg-naranja rounded-2xl">
					<Text className="font-bold text-base text-white text-center">Atrás</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default SelectDates