import React,{ useEffect,useState } from 'react'
import { Image,Text,TouchableOpacity,View } from 'react-native'
import { useSelector } from 'react-redux'
import cruz from '../../../../../../images/iconos/cruz.png'
import basura from '../../../../../../images/iconos/basura.png'
import countryList from '../../../../../../extras/countrys.json';
import { SelectList } from 'react-native-dropdown-select-list'
import Calendar from 'react-native-modern-datepicker'
import Button from '../../../../Buttons/ButtonCuston'
import { suvirImagen,useSelectImagen } from '../../../../../CustomHooks/useImage'
const PersonalTab = () => {


	const [countries,setCountries] = useState([])
	const [provinces,setProvinces] = useState([])
	const [localities,setLocalities] = useState([])

	const [selectedCountry,setSelectedCountry] = useState("")
	const [selectedProvince,setSelectedProvince] = useState("")
	const [selectedLocality,setSelectedLocality] = useState("")
	const [selectedDate,setSelectedDate] = useState("")
	const { selImg,setProfile,deleteSelImg } = useSelectImagen()

	// const [image,setImage] = useState("")

	const handleSave = () => {
		const image = suvirImagen(selImg.profile)
		const savedData = {
			country: selectedCountry,
			province: selectedProvince,
			locality: selectedLocality,
			birthDate: selectedDate,
			image
		}
		console.log(savedData);
		//POST
	}

	useEffect(() => {
		const selectedCountries = countryList.map((country) => country.name);
		const selectedProvinces = countryList.map((country) => country.name)
		setCountries(selectedCountries);
	},[])

	useEffect(() => {
		if (selectedCountry) {
			const country = countryList.find((c) => c.name === selectedCountry)
			setProvinces(country.provinces)
		}
	},[selectedCountry]);


	return (
		<View className="flex flex-col items-center justify-center">
			
			<View className="relative my-10 w-32 h-32 flex flex-col items-center justify-center">
				<TouchableOpacity onPress={() => setProfile()} className="absolute w-32 h-32 flex flex-row items-center justify-center mb-9" >
					<View className="rounded-full bg-new w-32 h-32">
						{selImg.profile && <Image source={{ uri: selImg.profile }} className="rounded-full w-32 h-32" />}
					</View>
					{!selImg.profile && <Image className="absolute w-9 h-9" source={cruz} />}
				</TouchableOpacity>

				<TouchableOpacity onPress={() => deleteSelImg()} className="absolute top-2 -right-2">
					<Image className="w-9 h-9 bg-naranja rounded-full" source={basura} />
				</TouchableOpacity>
			</View>

			<View>
			</View>
			<Text className="font-poppinsBold text-base">¿Dónde cuidas mascotas?</Text>

			<View className="flex flex-col items-start w-full p-6">
				<Text className="font-poppinsSemiBold text-base">País</Text>
				<View className="w-[99%] self-cente">

					<SelectList
						data={countries}
						setSelected={setSelectedCountry}
						placeholder="Seleccionar"
						search={true}
						boxStyles={{
							backgroundColor: '#FEC89A',
							borderRadius: 10,
							borderColor: '#FEC89A',
							height: 40,
							width: "100%",
							padding: 10,
						}}
						inputStyles={{
							fontSize: 12,
							fontFamily: "Poppins",
							marginTop: -2

						}}
						dropdownStyles={{
							backgroundColor: '#FEC89A',
						}}
					/>
				</View>
			</View>

			<View className="flex flex-col items-start w-full p-6">
				<Text className="font-poppinsSemiBold text-base">Provincia</Text>
				<View className="w-[99%] self-cente">

					<SelectList
						data={provinces}
						setSelected={setSelectedProvince}
						placeholder="Seleccionar"
						search={true}
						boxStyles={{
							backgroundColor: '#FEC89A',
							borderRadius: 10,
							borderColor: '#FEC89A',
							height: 40,
							width: "100%",
							padding: 10,
						}}
						inputStyles={{
							fontSize: 12,
							fontFamily: "Poppins",
							marginTop: -2

						}}
						dropdownStyles={{
							backgroundColor: '#FEC89A',
						}}
					/>
				</View>
			</View>
			<View className="flex flex-col items-start w-full p-6">
				<Text className="font-poppinsSemiBold text-base">Localidad</Text>
				<View className="w-[99%] self-cente">

					<SelectList
						data={[]}
						setSelected={() => { }}
						placeholder="Seleccionar"
						search={true}
						boxStyles={{
							backgroundColor: '#FEC89A',
							borderRadius: 10,
							borderColor: '#FEC89A',
							height: 40,
							width: "100%",
							padding: 10,
						}}
						inputStyles={{
							fontSize: 12,
							fontFamily: "Poppins",
							marginTop: -2

						}}
						dropdownStyles={{
							backgroundColor: '#FEC89A',
						}}
					/>
				</View>
			</View>
			{/* CALENDARIO */}
			<View className="w-full px-4 my-4 ">

				<Text className="font-poppinsBold text-base text-center my-9 ">¿Cual es tu fecha de nacimiento?</Text>


				<Calendar
					mode='calendar'
					onSelectedChange={(date) => {
						setSelectedDate(date)
					}}

					options={{
						backgroundColor: '#FFFFFF',
						textHeaderColor: 'black',
						textDefaultColor: 'black',
						selectedTextColor: '#fff',
						mainColor: '#FB6726',
						textSecondaryColor: 'black',
						borderColor: 'rgba(122, 146, 165, 0.1)',
					}}
					style={{ borderRadius: 16,elevation: 6 }}
				/>


			</View>
			<Button onPress={handleSave} title="Guardar" titleClass="text-base text-naranja font-semibold" buttonClass="bg-transparent w-64 h-14 rounded-2xl border-2 border-naranja justify-center items-center my-8" />
		</View>

	)
}

export default PersonalTab