import React from 'react'
import { ScrollView, Text,TextInput,TouchableOpacity,View } from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import { setServices } from '../../../Redux/ReducerServices';
import { GetFilteredProfessionals } from '../../../metodos/professionalMetodos';
import { setFilteredProfessionals } from '../../../Redux/ReducerProffesional';
import Button from '../../Buttons/ButtonCuston';
import Icon from "react-native-vector-icons/AntDesign"

const SelectDates = ({ setStep,STEPS,query,setQuery }) => {
	const dispatch = useDispatch()

	const GetProfessionals = async () => {
		await GetFilteredProfessionals({
			query,
			loading: (b) => console.log(b),
			error: (msg) => console.log(msg),
			success: (res) => dispatch(setFilteredProfessionals(res)),
		});
	};

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
    <ScrollView>
      <View className="flex flex-col items-center h-full">
	  <Button buttonClass={'w-full p-2'} component={<Icon name="arrowleft" size={32} />} onPress={() => setStep(STEPS.LOCATION)} />
        <Text className="text-xl font-poppinsBold mb-10">¿Cuándo lo necesitas?</Text>
        <View className="flex flex-col space-y-5">
          <View>
            <Text className="font-poppinsSemiBold text-base pl-5">Fecha de inicio</Text>
            <TextInput
              keyboardType="numeric"
              value={query.startDate}
              placeholder="00/00/0000"
              onChangeText={(startDate) => {
                handleDateChange(startDate, 'start');
              }}
              className="bg-new w-[270px] h-[47px] rounded-[10px] p-[10px] pl-4 text-base font-poppins"
              boxStyles={{
                backgroundColor: '#FEC89A',
                borderRadius: 10,
                borderColor: '#FEC89A',
              }}
              placeholderTextColor="black"
            />
          </View>
          <View>
            <Text className="font-poppinsSemiBold text-base pl-5">Fecha final</Text>
            <TextInput
              keyboardType="numeric"
              value={query.endDate}
              placeholder="00/00/0000"
              onChangeText={(endDate) => {
                handleDateChange(endDate, 'end');
              }}
              className="bg-new w-[270px] h-[47px] rounded-[10px] p-[10px] pl-4 text-base font-poppins"
              boxStyles={{
                backgroundColor: '#FEC89A',
                borderRadius: 10,
                borderColor: '#FEC89A',
              }}
              placeholderTextColor="black"
            />
          </View>
        </View>

          <Button
           dissable={(!query.endDate|| !query.startDate) ? false : true}
           onPress={() => {
            setStep(STEPS.PROFESSIONALS);
            GetProfessionals();
            }}
            buttonClass={'justify-center w-64 h-14 bg-naranja rounded-2xl mt-10'}
            title={'Siguiente'}
            titleClass={'font-bold text-base text-white text-center'}
          />
      </View>
    </ScrollView>
  );
}

export default SelectDates