import React,{ useState } from 'react'
import { useSelector } from 'react-redux'

import SelectPets from '../Steps/SelectPets'
import SelectPlace from '../Steps/SelectPlace'
import SelectLocation from '../Steps/SelectLocation'
import SelectDates from '../Steps/SelectDates'
import SelectProfessional from '../Steps/SelectProfessional'
import PerfilContratado from '../Steps/PerfilContratado'
import Checkout from '../Steps/Checkout'


const ReservaCuidador = ({ route }) => {
	const { profession } = route.params

	const myPets = useSelector(state => state.ReducerPets?.userPets)
	
	const [displayTotalPrice, setDisplayTotalPrice] = useState(null)
	const [productId, setProductId] = useState("")

	const STEPS = {
		PET: 0,
		PLACE: 1,
		LOCATION: 2,
		DATES: 3,
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
		place: "",
		country: "",
		province: "",
		city: "",
		startDate: "",
		endDate: ""
	})

	

	if (STEPS.PET === step) return <SelectPets query={query} setQuery={setQuery} myPets={myPets} setStep={setStep} isActive={isActive} setIsActive={setIsActive} STEPS={STEPS} />
	if (STEPS.PLACE === step) return <SelectPlace query={query} setQuery={setQuery} place={place} setPlace={setPlace} setStep={setStep} STEPS={STEPS} />
	if (STEPS.LOCATION === step) return <SelectLocation query={query} setQuery={setQuery} setStep={setStep} STEPS={STEPS} />
	if (STEPS.DATES === step) return <SelectDates setStep={setStep} STEPS={STEPS} query={query} setQuery={setQuery}/>
	if (STEPS.PROFESSIONALS === step) return <SelectProfessional setStep={setStep} STEPS={STEPS} setDisplayTotalPrice={setDisplayTotalPrice} startDate={query.startDate} endDate={query.endDate} setProductId={setProductId}/>
	if (STEPS.PROFILE === step) return <PerfilContratado setStep={setStep} STEPS={STEPS} profession={profession} query={query} displayTotalPrice={displayTotalPrice} productId={productId}/>
	if (STEPS.CHECKOUT === step) return <Checkout displayTotalPrice={displayTotalPrice} query={query}/>
}

export default ReservaCuidador