import React,{ useState } from 'react'
import { Text,View } from 'react-native'
import Question from '../../Cuidador/Question'
import Button from '../../../../Buttons/ButtonCuston'
import FotoCasa from '../../Cuidador/FotoCasa'
import { suvirImagen,useSelectImagen } from '../../../../../CustomHooks/useImage'
import { EditProfessionalCaracterMethod } from '../../../../../metodos/professionalMetodos'
import { useDispatch,useSelector } from 'react-redux'
import { setErrorProfessional,setLoadingProffesional,setProfessional } from '../../../../../Redux/ReducerProffesional'
import { useNavigation } from '@react-navigation/native'

const CuidadorCaracteristicasTab = () => {

	const dispatch = useDispatch()
	const navigation = useNavigation()
	const professional = useSelector(state => state.ReducerProfessional.userProfessional)
	const profession = useSelector(state => state?.ReducerProfessional?.profession)

	const [caracterUpdates,setCaracterUpdates] = useState(professional?.professions?.cuidador?.caracter)
	
	const [homePictures,setHomePictures] = useState(professional?.professions?.cuidador?.gallery)

	const { saveHomeImage } = useSelectImagen()

	const handleDeleteHomeImage = (i) => {
		const newImages = homePictures?.filter((image,index) => index !== i)
		setHomePictures([...newImages])
	}

	const [questions,setQuestions] = useState([
		{ title: "¿Tienes jardín?",caracteristica: "jardin" },
		{ title: "¿Tienes niños?",caracteristica: "niños" },
		{ title: "¿Tienes mascotas?",caracteristica: "mascotas" },
		{ title: "¿Tienes conocimientos en primeros auxilios?",caracteristica: "p_auxilios" },
		{ title: "¿Puedes administrar medicamentos orales?",caracteristica: "m_orales" },
		{ title: "¿Puedes administrar medicamentos inyectables?",caracteristica: "m_inyectables" },
		{ title: "¿Tienes experiencia con mascotas mayores?",caracteristica: "e_mascotas_mayores" }
	])

	const handleSaveData = async () => {

		let images = []

		for (const image of homePictures) {
			if (image.substring(0,5) === "file:") {
				const imageUrl = await suvirImagen(image);
				images.push(imageUrl);
			} else {
				images.push(image);
			}
		}
		const data = {
			images,
			profession,
			caracterUpdates
		}

		EditProfessionalCaracterMethod({
			data,
			success: (response) => { dispatch(setProfessional(response)); navigation.goBack() },
			error: (e) => dispatch(setErrorProfessional(e)),
			loading: (boolean) => dispatch(setLoadingProffesional(boolean))
		})
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
						<FotoCasa key={n} homePictures={homePictures} setHomePictures={setHomePictures} saveHomeImage={saveHomeImage} handleDeleteHomeImage={handleDeleteHomeImage} image={homePictures[n - 1]} i={n - 1} />
					))}
				</View>
				<View className="flex flex-row px-2 flex-wrap justify-evenly">
					{[4,5,6].map((n) => (
						<FotoCasa key={n} homePictures={homePictures} setHomePictures={setHomePictures} saveHomeImage={saveHomeImage} handleDeleteHomeImage={handleDeleteHomeImage} image={homePictures[n - 1]} i={n - 1} />
					))}
				</View>
			</View>

			<View className="flex flex-col items-center justify-center mt-10 px-4 space-y-6">
				{questions?.map((question,i) => (
					<Question key={i} question={question.title} caracteristica={question.caracteristica} confirmation={caracterUpdates[question.caracteristica]} setCaracterUpdates={setCaracterUpdates} caracterUpdates={caracterUpdates} />
				))}
			</View>
			<Button onPress={handleSaveData} title="Guardar" titleClass="text-naranja font-bold text-base" buttonClass="my-10 bg-trasparent border border-naranja w-72 h-14 rounded-2xl items-center justify-center" />
		</View>
	)
}

export default CuidadorCaracteristicasTab