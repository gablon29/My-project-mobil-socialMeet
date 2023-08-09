import React,{ useState } from "react";
import { CreateProfessionalServices, EditProfessionalMethod } from "../metodos/professionalMetodos";

export const useServices = () => {
	const [services,setServices] = useState([])

	const saveServices = () => {
		
		// EditProfessionalMethod({})

		// CreateProfessionalServices({})
	}

	return {
		services,
		setServices,
		saveServices
	}
}