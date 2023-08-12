import React from 'react'
import { useSelector } from 'react-redux'
import CuidadorCaracteristicasTab from './CaracteristicasTabs/CuidadorCaracteristicasTab'
import PeluqueroCaracteristicasTab from './CaracteristicasTabs/PeluqueroCaracteristicasTab'
import PaseadorCaracteristicasTab from './CaracteristicasTabs/PaseadorCaracteristicasTab'
import EducadorCaracteristicasTab from './CaracteristicasTabs/EducadorCaracteristicasTab'
const CaracteristicasTab = () => {
	
	const profession = useSelector(state=>state?.ReducerProfessional?.profession)

	if(profession === "cuidador") return <CuidadorCaracteristicasTab/>
	if(profession === "peluquero") return <PeluqueroCaracteristicasTab/>
	if(profession === "paseador") return <PaseadorCaracteristicasTab/>
	if(profession === "educador") return <EducadorCaracteristicasTab/>
}

export default CaracteristicasTab