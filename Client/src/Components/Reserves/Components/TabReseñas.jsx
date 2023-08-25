import React from 'react'
import { View,Text } from 'react-native'
import StarRating from '../../ProfessionalArea/Profile/StarRating'

const TabReseñas = ({reviews}) => {
	return (
		<View>
			{reviews.length >0 &&reviews.map((reseña,i)=>{
				
				<View key={i} className="bg-new rounded-2xl p-4">
				<View className="flex flex-row justify-between">
					<Text className="font-semibold text-base">{reseña.name}</Text>
					<Text className="text-xs">Hace {reseña.ago}</Text>
				</View>

				<StarRating rating={reseña.rating} />

				<Text className="text-sm">{reseña.comment}</Text>
			</View>
			})}
			{reviews.length === 0 && <Text>Todavía no hay reseñas</Text>}
		</View>
	)
}

export default TabReseñas