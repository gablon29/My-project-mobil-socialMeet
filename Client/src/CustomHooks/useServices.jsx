import React,{ useState } from "react";
import { CreateProfessionalServices,EditProfessionalMethod } from "../metodos/professionalMetodos";
import { useSelector } from "react-redux";

export const useServices = () => {

	const profession = useSelector((state) => state?.ReducerProfessional?.profession)
	const professionalPets = useSelector((state) => state?.ReducerProfessional?.userProfessional?.professions[profession].mascotasAcuidar)

	const [services,setServices] = useState([])
	const [petsPerNight,setPetsPerNight] = useState({})
	const [mascotaAcuidar,setmascotaAcuidar] = useState([])
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

		// EditProfessionalMethod({
		// 	data: { mascotasAcuidar: mascotasAcuidarStrings,profession },
		// 	success: (updatedProfessional) => { dispatch(setProfessional(updatedProfessional)); navigation.goBack() },
		// 	error: (e) => dispatch(setErrorProfessional(e)),
		// 	loading: (boolean) => dispatch(setLoadingProffesional(boolean))
		// })

		// CreateProfessionalServices({
		// 	services,
		// 	success: (response) => { console.log(response); },
		// 	error: (e) => { console.log(e); },
		// 	loading: () => { }
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