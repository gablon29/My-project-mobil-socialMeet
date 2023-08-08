import React from 'react';
import { View, Text } from 'react-native';
import StarRating from './ratings/StarRating';
import { useSelector } from 'react-redux';
const ReviewsTab = () => {
  const reseñas = [
    { name: 'Laura', ago: '3 días', rating: '3', comment: 'So impressed with the care my dog Bella has received. Amazing surgical skills alongside high standards of care and compassion. Susie was fabulous and helped make a stressful time so much easier. Thank you so much!.' },
    { name: 'Laura', ago: '3 días', rating: '3', comment: 'So impressed with the care my dog Bella has received. Amazing surgical skills alongside high standards of care and compassion. Susie was fabulous and helped make a stressful time so much easier. Thank you so much!.' },
    { name: 'Laura', ago: '3 días', rating: '5', comment: 'So impressed with the care my dog Bella has received. Amazing surgical skills alongside high standards of care and compassion. Susie was fabulous and helped make a stressful time so much easier. Thank you so much!.' },
    { name: 'Laura', ago: '3 días', rating: '2', comment: 'So impressed with the care my dog Bella has received. Amazing surgical skills alongside high standards of care and compassion. Susie was fabulous and helped make a stressful time so much easier. Thank you so much!.' },
  ];

	const reviews = useSelector(state=>state.ReducerProfessional.userProfessional.professions.cuidador.reviews)
	const totalStars = [1,2,3,4,5]
	const totalVotes = reviews.length
	const promedio = 4.5

	const porcentajes = {
		1:0,
		2:0,
		3:0,
		4:0,
		5:0,
	}

	reviews.forEach((reseña)=>{
		porcentajes[reseña.rating]++ 
	})

  return (
    <View className="px-4 space-y-7">
			<View>

      <View className="flex flex-row justify-evenly">
        <Text className="font-semibold text-5xl text-center" style={{verticalAlign: "middle"}} >{promedio}</Text>
        <View className="flex flex-col-reverse  ">
					<Text className="text-[#8E8E8E] text-right">{totalVotes} Reseñas</Text>
          {totalStars.map((n) => {
						const porcentaje = Math.ceil((porcentajes[n] / totalVotes) * 100);				
            return (
							<View key={n} className="flex flex-row items-center justify-center">
                <Text className="text-[7px] text-gray-500">{n}</Text>
                <View className={`w-40 h-[3px] bg-new`}>
                  <View className={`h-[3px] bg-[#594444]`} style={{width:`${porcentaje.toString()}%`}}></View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
			
				</View>

      <View className="flex flex-col space-y-12 mb-12">
        {reviews.map((reseña, i) => (
					<View key={i} className="bg-new rounded-2xl p-4">
            <View className="flex flex-row justify-between">
              <Text className="font-semibold text-base">{reseña.name}</Text>
              <Text className="text-xs">Hace {reseña.ago}</Text>
            </View>

            <StarRating rating={reseña.rating} />

            <Text className="text-sm">{reseña.comment}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ReviewsTab;
