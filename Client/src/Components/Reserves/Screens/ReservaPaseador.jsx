import React,{ useState } from 'react'
import { useSelector } from 'react-redux'

import SelectPets from '../StepsPaseador/SelectPets'
import SelectLocation from '../StepsPaseador/SelectLocation'
import SelectDateType from '../StepsPaseador/SelectDateType'
import SelectPersDay from '../StepsPaseador/SelectPersDay'
import SelectProfessional from '../StepsPaseador/SelectProfessional'
import PerfilContratado from '../StepsPaseador/PerfilContratado'


const ReservaPaseador = ({ route }) => {
	const { profession } = route.params

	const myPets = useSelector(state => state.ReducerPets?.userPets)

	const [displayTotalPrice,setDisplayTotalPrice] = useState(null)
	const [productId,setProductId] = useState("")

	const STEPS = {
		PET: 0,
		LOCATION: 1,
		DATETYPE: 2,
		DATE: 3,
		PROFESSIONALS: 4,
		PROFILE: 5,
		CHECKOUT: 6
	}


	const [step,setStep] = useState(STEPS.PET)
	const [isActive,setIsActive] = useState([])
	const [place,setPlace] = useState("")
	const [query,setQuery] = useState({
		profession,
		animals: [],
		dateType: "",
		persDates: [],
		date: "",
		country: "",
		province: "",
		city: "",
	})



	if (STEPS.PET === step) return <SelectPets query={query} setQuery={setQuery} myPets={myPets} setStep={setStep} isActive={isActive} setIsActive={setIsActive} STEPS={STEPS} />
	if (STEPS.LOCATION === step) return <SelectLocation query={query} setQuery={setQuery} setStep={setStep} STEPS={STEPS} />
	if (STEPS.DATETYPE === step) return <SelectDateType query={query} setQuery={setQuery} setStep={setStep} STEPS={STEPS} />
	if (STEPS.DATE === step) {return query.dateType === "pers" ? <SelectPersDay query={query} setQuery={setQuery} setStep={setStep} STEPS={STEPS} /> : <></>}
	if (STEPS.PROFESSIONALS === step) return <SelectProfessional query={query} STEPS={STEPS} setStep={setStep} setDisplayTotalPrice={setDisplayTotalPrice}/>
	if(STEPS.PROFILE === step) return <PerfilContratado query={query} STEPS={STEPS} setStep={setStep} profession={profession} displayTotalPrice={displayTotalPrice}/>
}

export default ReservaPaseador