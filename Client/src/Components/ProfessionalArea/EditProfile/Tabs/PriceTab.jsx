import React from 'react'
import { useSelector } from 'react-redux'
import CuidadorPriceTab from './PriceTabs/CuidadorPriceTab'
import PeluqueroPriceTab from './PriceTabs/PeluqueroPriceTab'
import PaseadorPriceTab from './PriceTabs/PaseadorPriceTab'
import EducadorPriceTab from './PriceTabs/EducadorPriceTab'
const PriceTab = () => {
	const profession = useSelector(state => state?.ReducerProfessional?.profession)


	if (profession === "cuidador") return <CuidadorPriceTab />
	if (profession === "peluquero") return <PeluqueroPriceTab />
	if (profession === "paseador") return <PaseadorPriceTab />
	if (profession === "educador") return <EducadorPriceTab />
}

export default PriceTab