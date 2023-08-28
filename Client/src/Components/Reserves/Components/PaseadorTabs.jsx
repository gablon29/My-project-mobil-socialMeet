import React,{ useState } from 'react'
import { Text,TouchableOpacity,View } from 'react-native';
import TabResumen from './TabResumen';
import TabReseñas from './TabReseñas';

const PaseadorTabs = ({pricePerHour, reviews}) => {
	const [tab,setTab] = useState('Resumen');

	return (
		<>
			<View className="relative flex flex-col items-center mb-14">
				<View className="flex flex-row mt-10 w-full justify-center">
					<TouchableOpacity className="w-[32%]" onPress={() => setTab('Resumen')}>
						<Text className={`${tab === 'Resumen' && 'text-naranja'} text-center font-medium font-poppins`}>Resumen</Text>
						{tab === 'Resumen' && <View className="flex-grow h-[4px] bg-black mx-2"></View>}
					</TouchableOpacity>
					<TouchableOpacity className="w-[32%]" onPress={() => setTab('Reseñas')}>
						<Text className={`${tab === 'Reseñas' && 'text-naranja'} text-center font-medium font-poppins`}>Reseñas</Text>
						{tab === 'Reseñas' && <View className="flex-grow h-[4px] bg-black mx-2"></View>}
					</TouchableOpacity>
				</View>
				<View className="absolute w-11/12 h-px bg-black bottom-[1px] flex flex-row"></View>

			</View>
			{tab === "Resumen" && <TabResumen pricePerHour={pricePerHour}/>}
			{tab === "Reseñas" && <TabReseñas reviews={reviews}/>}
				{/* {tab === "Características" && <CaracteristicasTab profession={profession} professional={professional}/>}
				{tab === "Precios" && <PriceTab profession={profession} professional={professional}/>}  */}
		</>
	)
}

export default PaseadorTabs