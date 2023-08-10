import React,{ useState } from "react";
import { CreateProfessionalServices,EditProfessionalMethod } from "../metodos/professionalMetodos";
import { useDispatch,useSelector } from "react-redux";
import { setErrorProfessional,setLoadingProffesional,setProfessional } from "../Redux/ReducerProffesional";
import { useNavigation } from "@react-navigation/native";

export const useServices = () => {
	const dispatch = useDispatch()
	const navigation = useNavigation()

	const { firstName,email } = useSelector((state) => state.ReducerAuth.profile)
	const profession = useSelector((state) => state?.ReducerProfessional?.profession)
	const professionalPets = useSelector((state) => state?.ReducerProfessional?.userProfessional?.professions[profession].mascotasAcuidar)

	const [services,setServices] = useState([])
	const [petsPerNight,setPetsPerNight] = useState({})
	const [mascotasAcuidarStrings,setMascotasAcuidarStrings] = useState([...professionalPets])
	const saveServices = () => {
		const updatedServices = {
			services,
			petsPerNight,
			profession,
			metadata: {
				name: firstName,
				email,
			}
		}
		console.log(petsPerNight);
		EditProfessionalMethod({
			data: { mascotasAcuidar: mascotasAcuidarStrings,profession },
			success: (updatedProfessional) => { dispatch(setProfessional(updatedProfessional)); navigation.goBack() },
			error: (e) => dispatch(setErrorProfessional(e)),
			loading: (boolean) => dispatch(setLoadingProffesional(boolean))
		})

		// CreateProfessionalServices({
		// 	updatedServices,
		// 	success: (response) => { console.log(response); },
		// 	error: (e) => { console.log(e); },
		// 	loading: (b) => { console.log(`loading ${b}`);}
		// })
	}

	return {
		services,
		setServices,
		saveServices,
		petsPerNight,
		setPetsPerNight,
		mascotasAcuidarStrings,
		setMascotasAcuidarStrings
	}
}