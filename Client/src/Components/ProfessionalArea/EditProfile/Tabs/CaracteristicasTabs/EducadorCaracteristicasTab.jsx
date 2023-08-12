import React,{ useState } from 'react'
import { Text,View } from 'react-native'
import Question from '../../Cuidador/Question'
import Button from '../../../../Buttons/ButtonCuston'
import { EditProfessionalCaracterMethod } from '../../../../../metodos/professionalMetodos'
import { useDispatch,useSelector } from 'react-redux'
import { setErrorProfessional,setLoadingProffesional,setProfessional } from '../../../../../Redux/ReducerProffesional'
import { useNavigation } from '@react-navigation/native'

const EducadorCaracteristicasTab = () => {
	const dispatch = useDispatch()
	const navigation = useNavigation()
	
	const professional = useSelector(state => state.ReducerProfessional.userProfessional)
	const profession = useSelector(state => state?.ReducerProfessional?.profession)

	const [caracterUpdates,setCaracterUpdates] = useState(professional?.professions[profession].caracter)


	const [questions,setQuestions] = useState([
		{ title: "¿Tienes titulación como adiestrador?",caracteristica: "titulacon_adiestrador" },
		{ title: "¿Tienes más de 2 años de experiencia?",caracteristica: "experiencia_2a" },
		{ title: "¿Tienes experiencia con perros difíciles?",caracteristica: "e_perros_dif" }
	])
	const handleSaveData = async () => {
		const data = {
			profession,
			caracterUpdates
		}
		console.log(caracterUpdates);
		EditProfessionalCaracterMethod({
			data,
			success: (response) => { dispatch(setProfessional(response)); navigation.goBack() },
			error: (e) => dispatch(setErrorProfessional(e)),
			loading: (boolean) => dispatch(setLoadingProffesional(boolean))
		})
	}


	return (
		<View className="flex flex-col items-center">

			<View className="flex flex-col items-center justify-center mt-10 px-4 space-y-6">
				{questions?.map((question,i) => (
					<Question key={i} question={question.title} caracteristica={question.caracteristica} confirmation={caracterUpdates[question.caracteristica]} setCaracterUpdates={setCaracterUpdates} caracterUpdates={caracterUpdates} />
				))}
			</View>	
			<Button onPress={handleSaveData} title="Guardar" titleClass="text-naranja font-bold text-base" buttonClass="my-10 bg-trasparent border border-naranja w-72 h-14 rounded-2xl items-center justify-center" />
		
		</View>
	)
}

export default EducadorCaracteristicasTab