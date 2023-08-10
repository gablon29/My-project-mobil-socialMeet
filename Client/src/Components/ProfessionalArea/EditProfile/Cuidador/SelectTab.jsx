import React,{ useEffect, useState } from 'react'
import { Text,TouchableOpacity,View } from 'react-native';
import PriceTab from './PriceTab/PriceTab'
import PersonalTab from '../Tabs/PersonalTab'
import CaracteristicasTab from '../Tabs/CaracteristicasTab';

const SelectTab = ({profession, professional}) => {
	const [tab,setTab] = useState('Personal');
	const [countries, setCountries] = useState([])

	useEffect(()=>{
		const selectedCountries = countries.map((country) => country.name);
    setCountries(selectedCountries);
	},[])

	return (
		<>
			<View className="relative flex flex-col items-center mb-14">
				<View className="flex flex-row mt-10 w-full justify-center">
					<TouchableOpacity className="w-[32%]" onPress={() => setTab('Personal')}>
						<Text className={`${tab === 'Personal' && 'text-naranja'} text-center font-medium font-poppins`}>Personal</Text>
						{tab === 'Personal' && <View className="flex-grow h-[4px] bg-black mx-2"></View>}
					</TouchableOpacity>
					<TouchableOpacity className="w-[36%]" onPress={() => setTab('Características')}>
						<Text className={`${tab === 'Características' && 'text-naranja'} text-center font-medium font-poppins`}>Características</Text>
						{tab === 'Características' && <View className="flex-grow h-[4px] bg-black mx-2"></View>}
					</TouchableOpacity>
					<TouchableOpacity className="w-[32%]" onPress={() => setTab('Precios')}>
						<Text className={`${tab === 'Precios' && 'text-naranja'} text-center font-medium font-poppins`}>Precios</Text>
						{tab === 'Precios' && <View className="flex-grow h-[4px] bg-black mx-2"></View>}
					</TouchableOpacity>
				</View>
				<View className="absolute w-[96%] h-px bg-black bottom-[1px] flex flex-row"></View>

			</View>
				{tab === "Personal" && <PersonalTab profession={profession} professional={professional}/>}
				{tab === "Características" && <CaracteristicasTab profession={profession} professional={professional}/>}
				{tab === "Precios" && <PriceTab profession={profession} professional={professional}/>}
		</>
	)
}

export default SelectTab