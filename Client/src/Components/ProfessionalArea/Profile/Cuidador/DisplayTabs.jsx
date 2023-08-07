import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import InformationTab from './InformationTab';
import PriceTab from './PriceTab';
import ReviewsTab from './ReviewsTab';

const DisplayTabs = ({profession}) => {
	
	const tabs = {
		Cuidador: ["Información", "Precios", "Reseñas"]
	}
	
	const [tab, setTab] = useState(tabs[profession][0]);


	return (
		<>
		<View className="relative flex flex-col items-center mb-14">
        <View className="flex flex-row mt-10 w-10/12">
					{tabs[profession].map((tabName, index)=>(
          <TouchableOpacity key={index} className="w-1/3" onPress={() => setTab(tabName)}>
            <Text className={`${tab === tabName && 'text-naranja'} text-center font-medium font-poppins`}>{tabName}</Text>
            {tab === tabName && <View className="flex-grow h-[4px] bg-black mx-2"></View>}
          </TouchableOpacity>					
					))}
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