import React, { useEffect, useState } from 'react'
import { Text,TouchableOpacity,View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import countryList from '../../../../extras/countrys.json'
import { TextInput } from 'react-native';

const SelectLocation = ({query,setQuery, setStep, STEPS}) => {
	
	const [countries,setCountries] = useState([])
	const [provinces,setProvinces] = useState([])
	
	useEffect(() => {
		const selectedCountries = countryList.map((country) => country.name);
		setCountries(selectedCountries);
	},[])

	useEffect(() => {
		if (query.country) {
			const country = countryList.find((c) => c.name === query.country)
			setProvinces(country.provinces)
		}
	},[query.country]);
	
	return (
	<View className="flex flex-col items-center space-y-14 h-full w-full pt-20 ">
		<Text className="font-poppinsBold text-xl text-center mb-10">¿Dónde lo necesitas?</Text>
		<SelectList
			data={countries}
			setSelected={(country) => setQuery({ ...query,country })}
			placeholder="País"
			search={true}
			boxStyles={{
				backgroundColor: '#FEC89A',
				borderRadius: 10,
				borderColor: '#FEC89A',
				height: 40,
				padding: 10,
				width:326,
				marginVertical: 20
			}}
			inputStyles={{
				fontSize: 12,
				fontFamily: "Poppins",
				marginTop: -2
				
			}}
			dropdownStyles={{
				backgroundColor: '#FEC89A',
			}}
			/>
		<SelectList
			data={provinces}
			setSelected={(province) => setQuery({ ...query,province })}
			placeholder="Provicia"
			search={true}
			boxStyles={{
				backgroundColor: '#FEC89A',
				borderRadius: 10,
				borderColor: '#FEC89A',
				height: 40,
				padding: 10,
				width:326,
				marginTop: 20
			}}
			inputStyles={{
				fontSize: 12,
				fontFamily: "Poppins",
				marginTop: -2
			}}
			dropdownStyles={{
				backgroundColor: '#FEC89A',
			}}

		/>
		
			<TextInput
				value={query.city}
				placeholder='Localidad'
				onChangeText={(city) => setQuery({ ...query,city })}
				className="bg-new w-[326px] h-[40px] rounded-[10px] p-[10px] pl-4 text-[12px] font-poppins"
				boxStyles={{
					backgroundColor: '#FEC89A',
					borderRadius: 10,
					borderColor: '#FEC89A',
				}}
				placeholderTextColor="black"
			/>

		<TouchableOpacity onPress={() => {
			if(!query.country || !query.province) return
			setStep(STEPS.DATETYPE)}} className="flex flex-col justify-center w-64 h-14 bg-naranja rounded-2xl">
			<Text className="font-bold text-base text-white text-center">Siguiente</Text>
		</TouchableOpacity>
		<TouchableOpacity onPress={() => setStep(STEPS.PET)} className="flex flex-col justify-center w-64 h-14 bg-naranja rounded-2xl">
			<Text className="font-bold text-base text-white text-center">Atrás</Text>
		</TouchableOpacity>
	</View>
	)
}

export default SelectLocation