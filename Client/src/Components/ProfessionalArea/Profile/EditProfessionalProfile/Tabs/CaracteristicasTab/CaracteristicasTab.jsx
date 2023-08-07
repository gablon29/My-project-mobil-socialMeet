import React,{ useState } from 'react'
import { Text,View,Image,TouchableOpacity } from 'react-native'

import basura from '../../../../../../../images/iconos/basura.png'
import cruz from '../../../../../../../images/iconos/cruz.png'
import Question from './Question'
import Button from '../../../../../Buttons/ButtonCuston'
import FotoCasa from './FotoCasa'
import { suvirImagen,useSelectImagen } from '../../../../../../CustomHooks/useImage'
import { EditProfessionalCaracterMethod } from '../../../../../../metodos/professionalMetodos'

const CaracteristicasTab = ({ profession }) => {

	const [caracterUpdates, setCaracterUpdates] = useState({
		jardin:false,
		niños:false,
		mascotas:false,
		p_auxilios:false,
		m_orales:false,
		m_inyectables:false,
		e_mascotas_mayores:false
	})

	const questions = [
		{ title: "¿Tienes jardín?",caracteristica: "jardin" },
		{ title: "¿Tienes niños?",caracteristica: "niños" },
		{ title: "¿Tienes mascotas?",caracteristica: "mascotas" },
		{ title: "¿Tienes conocimientos en primeros auxilios?",caracteristica: "p_auxilios" },
		{ title: "¿Puedes administrar medicamentos orales?",caracteristica: "m_orales" },
		{ title: "¿Puedes administrar medicamentos inyectables?",caracteristica: "m_inyectables" },
		{ title: "¿Tienes experiencia con mascotas mayores?",caracteristica: "e_mascotas_mayores"}
	]


	const { homeImages,saveHomeImage,deleteHomeImage } = useSelectImagen()

	const handleSaveData = async () => {

		let images = []
		
		for (const image of homeImages) {
			const imageUrl = await suvirImagen(image);
			images.push(imageUrl);
		}
		
		const data = {
			images,
			profession,
			caracterUpdates
		}
		
		EditProfessionalCaracterMethod({ data,success: (s) => { console.log(s) },error: (e) => { console.log(e) },loading: (l) => { console.log(l) } })
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
					<Question key={i} question={question.title} caracteristica={question.caracteristica} confirmation={caracterUpdates[question.caracteristica]} setCaracterUpdates={setCaracterUpdates} caracterUpdates={caracterUpdates} />
				))}
			</View>
			<Button onPress={handleSaveData} title="Guardar" titleClass="text-naranja font-bold text-base" buttonClass="my-10 bg-trasparent border border-naranja w-72 h-14 rounded-2xl items-center justify-center" />
		</View>
	)
}

export default CaracteristicasTab