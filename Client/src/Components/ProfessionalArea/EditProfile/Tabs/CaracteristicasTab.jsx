import React from 'react'
import { useSelector } from 'react-redux'
import CuidadorCaracteristicasTab from './CaracteristicasTabs/CuidadorCaracteristicasTab'
import PeluqueroCaracteristicasTab from './CaracteristicasTabs/PeluqueroCaracteristicasTab'
const CaracteristicasTab = () => {
	
	const profession = useSelector(state=>state?.ReducerProfessional?.profession)

	if(profession === "cuidador") return <CuidadorCaracteristicasTab/>
	if(profession === "peluquero") return <PeluqueroCaracteristicasTab/>
}

export default CaracteristicasTab