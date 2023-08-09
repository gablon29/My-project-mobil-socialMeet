import React from 'react'
import { useSelector } from 'react-redux'
import CuidadorPriceTab from './PriceTabs/CuidadorPriceTab'
import PeluqueroPriceTab from './PriceTabs/PeluqueroPriceTab'
const PriceTab = () => {
	const profession = useSelector(state => state?.ReducerProfessional?.profession)


	if (profession === "cuidador") return <CuidadorPriceTab/>
	if (profession === "peluquero") return <PeluqueroPriceTab />

}

export default PriceTab