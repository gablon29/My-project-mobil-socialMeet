import React,{ useState } from "react";
import { CreateProfessionalServices,EditProfessionalMethod } from "../metodos/professionalMetodos";
import { useDispatch,useSelector } from "react-redux";
import { setErrorProfessional,setLoadingProffesional,setProfessional } from "../Redux/ReducerProffesional";
import { useNavigation } from "@react-navigation/native";

export const useServices = () => {
	const dispatch = useDispatch()
	const navigation = useNavigation()

	const profession = useSelector((state) => state?.ReducerProfessional?.profession)
	const professionalPets = useSelector((state) => state?.ReducerProfessional?.userProfessional?.professions[profession].mascotasAcuidar)

	const [services,setServices] = useState([])
	const [petsPerNight,setPetsPerNight] = useState({})
	const [mascotasAcuidarStrings,setMascotasAcuidarStrings] = useState([...professionalPets])
	const saveServices = () => {
		console.log("services",services);
		console.log("petsPerNight",petsPerNight);
		// const services = {
		// 	activeServices,
		// 	petsPerNight,
		// 	profession,
		// 	metadata: {
		// 		name: firstName,
		// 		email,
		// 	}
		// }

		EditProfessionalMethod({
			data: { mascotasAcuidar: mascotasAcuidarStrings,profession },
			success: (updatedProfessional) => { dispatch(setProfessional(updatedProfessional)); navigation.goBack() },
			error: (e) => dispatch(setErrorProfessional(e)),
			loading: (boolean) => dispatch(setLoadingProffesional(boolean))
		})

		CreateProfessionalServices({
			services,
			success: (response) => { console.log(response); },
			error: (e) => { console.log(e); },
			loading: () => { }
		})
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