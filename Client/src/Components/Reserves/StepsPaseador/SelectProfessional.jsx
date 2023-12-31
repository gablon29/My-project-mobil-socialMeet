import React,{ useEffect, useState } from 'react'
import { ScrollView,Text,View } from 'react-native'
import { useSelector } from 'react-redux'
import CardPaseador from '../Components/CardPaseador'

const SelectProfessional = ({ setStep,STEPS,query,setDisplayTotalPrice}) => {

	const allProfessionals = useSelector((state) => state?.ReducerProfessional?.filteredProfessionals)
	const [keys,setKeys] = useState([])

	useEffect(()=>{
		console.log("apare<co");
	},[])
	useEffect(()=>{
		console.log("____________________________PROFESIONALES____________________________");
		console.log(allProfessionals);
	},[])

	return (
		<ScrollView>

			<View className="flex flex-col items-center space-y-14 h-full pt-20 ">
				<View className="px-4 space-y-5">

					<Text className="font-poppins text-justify text-sm">A continuación verás un listado de los cuidadores disponibles en las fechas y ubicación que has seleccionado. Además verás los precios ya calculados según los fechas seleccionados y comisiones de la app. Si no visualizas cuidadores prueba a cambiar las fechas o la ubicación. </Text>
				</View>
				<View className="px-10 w-full">
					{allProfessionals?.map((professional,i) => {
						return (
							<CardPaseador key={i} professional={professional} query={query} setStep={setStep} STEPS={STEPS} setDisplayTotalPrice={setDisplayTotalPrice}/>
						)
					})}
				</View>
			</View>
		</ScrollView>
	)
}

export default SelectProfessional