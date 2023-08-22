import React,{ useState } from 'react'
import { useSelector } from 'react-redux'

import SelectPets from '../StepsPaseador/SelectPets'
import SelectLocation from '../StepsPaseador/SelectLocation'
import SelectDateType from '../StepsPaseador/SelectDateType'
import SelectDay from '../StepsPaseador/SelectDay'


const ReservaCuidador = ({ route }) => {
	const { profession } = route.params

	const myPets = useSelector(state => state.ReducerPets?.userPets)

	const [displayTotalPrice,setDisplayTotalPrice] = useState(null)
	const [productId,setProductId] = useState("")

	const STEPS = {
		PET: 0,
		LOCATION: 1,
		DATETYPE: 2,
		DATE: 3,
		PROFESSIONALS: 3,
		PROFILE: 4,
		CHECKOUT: 5
	}


	const [step,setStep] = useState(STEPS.PET)
	const [isActive,setIsActive] = useState([])
	const [place,setPlace] = useState("")
	const [query,setQuery] = useState({
		profession,
		animals: [],
		dateType: "",
		country: "",
		province: "",
		city: "",
		startDate: "",
		endDate: ""
	})



	if (STEPS.PET === step) return <SelectPets query={query} setQuery={setQuery} myPets={myPets} setStep={setStep} isActive={isActive} setIsActive={setIsActive} STEPS={STEPS} />
	if (STEPS.LOCATION === step) return <SelectLocation query={query} setQuery={setQuery} setStep={setStep} STEPS={STEPS} />
	if (STEPS.DATETYPE === step) return <SelectDateType query={query} setQuery={setQuery} setStep={setStep} STEPS={STEPS} />
	if (STEPS.DATE === step) { 
		console.log(query.dateType);
		return	query.dateType === "día" ? <SelectDay query={query} setQuery={setQuery} setStep={setStep} STEPS={STEPS} /> : <></> 
	}
}

export default ReservaCuidador