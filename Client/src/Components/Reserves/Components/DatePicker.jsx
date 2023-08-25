import React from 'react'
import { Image,TextInput,TouchableOpacity,View } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list'
import basura from '../../../../images/iconos/basura.png'

const DatePicker = ({query,setQuery,i,cantidadHorarios, setCantidadHorarios}) => {
	const horariosDisponibles = [
		'08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30',
		'14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00'
	];
	
	const handleDeleteHorario = () => {
		console.log("actual persDates",query.persDates)
		const newHorarios = cantidadHorarios.filter((h)=> h !== i)
		setCantidadHorarios([...newHorarios])

		const persDates = query.persDates
		persDates[i] = null
		setQuery({...query, persDates})
		console.log("persDates",persDates);
	}

	const handleDateChange = (inputValue) => {
		const numericValue = inputValue.replace(/\D/g,'');
		const horarios = query.persDates
		if(!horarios[i]) horarios[i] = {date:"",hour:""}
		console.log(query.persDates);
		if (numericValue.length <= 2) {
			horarios[i].date = inputValue
			setQuery({...query, persDates: horarios})
		} else if (numericValue.length <= 4) {
			const parsedDate = `${numericValue.slice(0,2)}/${numericValue.slice(2)}`
			horarios[i].date = parsedDate
			setQuery({...query, persDates: horarios})
		} else {
			const parsedDate = `${numericValue.slice(0,2)}/${numericValue.slice(2,4)}/${numericValue.slice(4,8)}`;
			horarios[i].date = parsedDate
			setQuery({...query, persDates: horarios})
		}
	};
	
	const handleHourChange = (inputValue) => {
		const horarios = query.persDates
		if(!horarios[i]) horarios[i] = {date:"",hour:""}
		horarios[i].hour = inputValue

		console.log(query.persDates);
		setQuery({...query, persDates: horarios})
	}

	return (
		<View className="flex flex-col items-center my-3">
			<View className="w-[326px]">
				<TextInput
					keyboardType="numeric"
					value={query.persDates[i]?.date}
					placeholder='00/00/0000'
					onChangeText={(startDate) => { handleDateChange(startDate) }}
					className="bg-new w-full h-[48px] rounded-[10px] p-[10px] pl-4 text-[15px] font-poppinsSemiBold"
					boxStyles={{
						backgroundColor: '#FEC89A',
						borderRadius: 10,
						borderColor: '#FEC89A',
					}}
					placeholderTextColor="black"
				/>
				<TouchableOpacity onPress={handleDeleteHorario} className="w-[32px] h-[32px]  bg-black border-[3px] border-white  absolute -right-3 -top-3 items-center justify-center rounded-full">
					<Image className="w-4 h-4  rounded-full " source={basura} />
				</TouchableOpacity>

			</View>

			<SelectList
				data={horariosDisponibles}
				
				setSelected={(horario) => handleHourChange(horario)}
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
					marginVertical: 20,

				}}
				inputStyles={{
					fontSize: 15,
					fontFamily: "Poppins",
					marginTop: -2,
					fontWeight: '700'

				}}
				dropdownStyles={{
					backgroundColor: '#FEC89A',
				}}
			/>
		</View>)
}

export default DatePicker