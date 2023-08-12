import React,{ useEffect,useState } from 'react'
import { Text,TouchableOpacity,View } from 'react-native'
import CuidadorInformationTab from './Cuidador/CuidadorInformationTab';
import CuidadorPriceTab from './Cuidador/CuidadorPriceTab';
import { useSelector } from 'react-redux';
import InformationPeluqueroTab from './Peluquero/InformationPeluqueroTab';
import PricePeluqueroTab from './Peluquero/PricePeluqueroTab';
import ReviewsTab from './Tabs/ReviewsTab';
import InformationPaseadorTab from './Paseador/InformationPaseadorTab';
import InformationEducadorTab from './Educador/InformationEducadorTab';

const DisplayTabs = () => {

	const profession = useSelector((state) => state?.ReducerProfessional?.profession)

	const tabs = {
		cuidador: ["Información","Precios","Reseñas"],
		peluquero: ["Información","Precios","Reseñas"],
		paseador:["Información","Reseñas"],
		educador:["Información","Reseñas"]
	}
	
	// const [tabs,setTabs] = useState({
	// 	cuidador: ["Información","Precios","Reseñas"]
	// })

	const [tab,setTab] = useState("");

	useEffect(() => {
		if (profession) {
			setTab(tabs[profession][0])
		}
	},[profession])




	return (
		<>
			<View className="relative flex flex-col items-center mb-14">
				<View className="flex flex-row mt-10 w-10/12 justify-center">
					{tabs[profession]?.map((tabName,index) => (
						<TouchableOpacity key={index} className="w-1/3" onPress={() => setTab(tabName)}>
							<Text className={`${tab === tabName && 'text-naranja'} text-center font-medium font-poppins`}>{tabName}</Text>
							{tab === tabName && <View className="flex-grow h-[4px] bg-black mx-2"></View>}
						</TouchableOpacity>
					))}
				</View>
				<View className="absolute w-11/12 h-px bg-black bottom-[1px] "></View>
			</View>
			{profession === "cuidador" && (
				<>
					{tab === 'Información' && <CuidadorInformationTab />}
					{tab === 'Precios' && <CuidadorPriceTab />}
					{tab === 'Reseñas' && <ReviewsTab />}
				</>
			)}
			{profession === "peluquero" && (
				<>
					{tab === 'Información' && <InformationPeluqueroTab />}
					{tab === 'Precios' && <PricePeluqueroTab />}
					{tab === 'Reseñas' && <ReviewsTab />}
				</>
			)}
			{profession === "paseador" && (
				<>
					{tab === 'Información' && <InformationPaseadorTab/>}
					{tab === 'Reseñas' && <ReviewsTab />}
				</>
			)}
			{profession === "educador" && (
				<>
					{tab === 'Información' && <InformationEducadorTab/>}
					{tab === 'Reseñas' && <ReviewsTab />}
				</>
			)}
		</>
	)
}

export default DisplayTabs