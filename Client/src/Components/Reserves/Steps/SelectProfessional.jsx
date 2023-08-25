import React,{ useEffect, useState } from 'react'
import { ScrollView,Text,View } from 'react-native'
import { useSelector } from 'react-redux'
import CardCuidador from '../CardCuidador'
import Icon from "react-native-vector-icons/AntDesign"
import Button from '../../Buttons/ButtonCuston'

const SelectProfessional = ({ setStep,STEPS,setDisplayTotalPrice, startDate, endDate,setProductId }) => {

	const allProfessionals = useSelector((state) => state?.ReducerProfessional?.filteredProfessionals)
	const [keys,setKeys] = useState([])

	// useEffect(()=>{
	// 	console.log("____________________________PROFESIONALES____________________________");
	// 	console.log(allProfessionals);
	// },[])

	return (
    <ScrollView>
      <Button buttonClass={'w-full p-2'} component={<Icon name="arrowleft" size={32} />} onPress={() => setStep(STEPS.DATES)} />
      <View className="flex flex-col items-center space-y-14 h-full pt-3 w-screen">
			<Text className="font-poppins text-sm w-11/12 mb-7">A continuación verás un listado de los cuidadores disponibles en las fechas y ubicación que has seleccionado. Además verás los precios ya calculados según los fechas seleccionados y comisiones de la app. Si no visualizas cuidadores prueba a cambiar las fechas o la ubicación. </Text>
			{allProfessionals?.map((professional, i) => {
				return <CardCuidador key={i} professional={professional.profile} services={professional.services} setStep={setStep} STEPS={STEPS} setDisplayTotalPrice={setDisplayTotalPrice} startDate={startDate} endDate={endDate} setProductId={setProductId} />;
			})}
      </View>
    </ScrollView>
  );
}

export default SelectProfessional