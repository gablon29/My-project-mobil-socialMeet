import React,{ useState } from 'react'
import { Text,View,Image,TouchableOpacity } from 'react-native'

import basura from '../../../../../../../images/iconos/basura.png'
import cruz from '../../../../../../../images/iconos/cruz.png'
import Question from './Question'
import Button from '../../../../../Buttons/ButtonCuston'
import FotoCasa from './FotoCasa'
import { suvirImagen,useSelectImagen } from '../../../../../../CustomHooks/useImage'

const CaracteristicasTab = () => {
	const questions = ["¿Tienes jardín?","¿Tienes niños?","¿Tienes mascotas?","¿Tienes conocimientos en primeros auxilios?","¿Puedes administrar medicamentos orales?","¿Puedes administrar medicamentos inyectables?","¿Tienes experiencia con mascotas mayores?"]


	const { homeImages,saveHomeImage,deleteHomeImage } = useSelectImagen()

	const handleSaveData = () => {
		let images = []
		// homeImages.forEach(async (image)=>{
		// 	const imageUrl = await suvirImagen(image)
		// 	images.push(imageUrl)
		// })

	}

	return (
		<View className="flex flex-col items-center">
			<Text className="text-base font-poppinsBold mb-4">
				¿Dónde cuidarás las mascotas?
			</Text>
			<Text className="font-poppins text-center">Añade hasta 6 fotos de tu hogar, esto ayudará a los propietarios a la hora de contratarte</Text>

			<View className="w-full">
				<View className="flex flex-row px-2 flex-wrap justify-evenly">

					{[1,2,3].map((n) => (
						<FotoCasa key={n} saveHomeImage={saveHomeImage} deleteHomeImage={deleteHomeImage} image={homeImages[n - 1]} i={n - 1} />
					))}
				</View>
				<View className="flex flex-row px-2 flex-wrap justify-evenly">

					{[4,5,6].map((n) => (
						<FotoCasa key={n} saveHomeImage={saveHomeImage} deleteHomeImage={deleteHomeImage} image={homeImages[n - 1]} i={n - 1} />
					))}
				</View>
			</View>

			<View className="flex flex-col items-center justify-center mt-10 px-4 space-y-6">
				{questions.map((question,i) => (
					<Question key={i} question={question} />
				))}
			</View>
			<Button onPress={handleSaveData} title="Guardar" titleClass="text-naranja font-bold text-base" buttonClass="my-10 bg-trasparent border border-naranja w-72 h-14 rounded-2xl items-center justify-center" />
		</View>
	)
}

export default CaracteristicasTab