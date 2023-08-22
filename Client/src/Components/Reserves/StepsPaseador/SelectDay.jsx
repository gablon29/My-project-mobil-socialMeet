import React,{ useState } from 'react'
import { Image, Text,TextInput,View } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import basura from '../../../../images/iconos/basura.png'

const SelectDay = ({ query,setQuery }) => {

	const [selectedHour,setSelectedHour] = useState("")
	const horariosDisponibles = [
		'08:00 AM','08:30 AM','09:00 AM','09:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM','12:00 PM','12:30 PM','01:00 PM','01:30 PM',
		'02:00 PM','02:30 PM','03:00 PM','03:30 PM','04:00 PM','04:30 PM','05:00 PM','05:30 PM','06:00 PM','06:30 PM','07:00 PM','07:30 PM','08:00 PM'
	];

	const handleDateChange = (inputValue,date) => {
		const numericValue = inputValue.replace(/\D/g,'');
		const dateType = date === "start" ? "startDate" : "endDate"

		if (numericValue.length <= 2) {
			setQuery({ ...query,[dateType]: numericValue })
		} else if (numericValue.length <= 4) {
			const parsedDate = `${numericValue.slice(0,2)}/${numericValue.slice(2)}`
			setQuery({ ...query,[dateType]: parsedDate })
		} else {
			const parsedDate = `${numericValue.slice(0,2)}/${numericValue.slice(2,4)}/${numericValue.slice(4,8)}`;
			setQuery({ ...query,[dateType]: parsedDate })
		}
	};

	return (
		<View className="w-screen h-screen">
			<View className="w-full px-4 my-4 ">

				<Text className="font-poppinsBold text-base text-center my-9 ">Fechas personalizadas</Text>
				<Text className="font-poppins text-sm text-justify my-9 px-9 ">Una vez escrita la fecha que desea podrá seleccionar en el desplegable inferior un horario disponible por el paseador en la fecha elegida.</Text>
				<View>
					<View>
						<TextInput
							keyboardType="numeric"
							value={query.startDate}
							placeholder='00/00/0000'
							onChangeText={(startDate) => { handleDateChange(startDate,"start") }}
							className="bg-new w-[270px] h-[47px] rounded-[10px] p-[10px] pl-4 text-base font-poppins"
							boxStyles={{
								backgroundColor: '#FEC89A',
								borderRadius: 10,
								borderColor: '#FEC89A',
							}}
							placeholderTextColor="black"
						/>
						<Image className="w-9 h-9 bg-naranja rounded-full absolute " source={basura} />

					</View>

					<SelectList
						data={horariosDisponibles}
						setSelected={(horario) => setSelectedHour(horario)}
						placeholder="00:00"
						searchPlaceholder=''
						search={true}
						boxStyles={{
							backgroundColor: '#FEC89A',
							borderRadius: 10,
							borderColor: '#FEC89A',
							height: 48,
							padding: 10,
							width: 326,
							marginVertical: 20
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
		</View>
	)
}

export default SelectDay