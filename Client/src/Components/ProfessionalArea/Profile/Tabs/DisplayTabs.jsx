import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import InformationTab from './InformationTab';
import PriceTab from './PriceTab';
import ReviewsTab from './ReviewsTab';

const DisplayTabs = () => {
	
	const [tab, setTab] = useState('Información');
	return (
		<>
		<View className="relative flex flex-col items-center mb-14">
        <View className="flex flex-row mt-10 w-10/12">
          <TouchableOpacity className="w-1/3" onPress={() => setTab('Información')}>
            <Text className={`${tab === 'Información' && 'text-naranja'} text-center font-medium font-poppins`}>Información</Text>
            {tab === 'Información' && <View className="flex-grow h-[4px] bg-black mx-2"></View>}
          </TouchableOpacity>
          <TouchableOpacity className="w-1/3" onPress={() => setTab('Precios')}>
            <Text className={`${tab === 'Precios' && 'text-naranja'} text-center font-medium font-poppins`}>Precios</Text>
            {tab === 'Precios' && <View className="flex-grow h-[4px] bg-black mx-2"></View>}
          </TouchableOpacity>
          <TouchableOpacity className="w-1/3" onPress={() => setTab('Reseñas')}>
            <Text className={`${tab === 'Reseñas' && 'text-naranja'} text-center font-medium font-poppins`}>Reseñas</Text>
            {tab === 'Reseñas' && <View className="flex-grow h-[4px] bg-black mx-1"></View>}
          </TouchableOpacity>
        </View>
        <View className="absolute w-11/12 h-px bg-black bottom-[1px] "></View>
      </View>

      {tab === 'Información' && <InformationTab />}
      {tab === 'Precios' && <PriceTab />}
      {tab === 'Reseñas' && <ReviewsTab />}
		</>
	)
}

export default DisplayTabs