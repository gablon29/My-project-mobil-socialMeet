import React, { useEffect, useState } from 'react'
import { ScrollView, Text,TouchableOpacity,View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import countryList from '../../../../extras/countrys.json'
import { TextInput } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign"
import Button from '../../Buttons/ButtonCuston';

const SelectLocation = ({query,setQuery, setStep, STEPS}) => {
	
	const [countries,setCountries] = useState([])
	const [provinces,setProvinces] = useState([])
	
	useEffect(() => {
		const selectedCountries = countryList.map((country) => country.name);
		setCountries(selectedCountries);
	},[])

	useEffect(() => {
		if (query.country) {
			const country = countryList.find((c) => c.name === query.country)
			setProvinces(country.provinces)
		}
	},[query.country]);
	
	return (
    <ScrollView>
      <View className="flex flex-col items-center space-y-14 h-full w-full">
        <Button buttonClass={'w-full p-2'} component={<Icon name="arrowleft" size={32} />} onPress={() => setStep(STEPS.PLACE)} />
        <Text className="font-poppinsBold text-xl text-center">¿Dónde lo necesitas?</Text>
        <View className="w-11/12">
          <SelectList
            data={countries}
            setSelected={(country) => setQuery({ ...query, country })}
            placeholder="País"
            search={false}
            boxStyles={{
              backgroundColor: '#FEC89A',
              borderRadius: 10,
              borderColor: '#FEC89A',
            }}
            inputStyles={{
              fontSize: 12,
              fontFamily: 'Poppins',
            }}
            dropdownStyles={{
              backgroundColor: '#FEC89A',
            }}
          />
		  <View className="mt-3"></View>
          <SelectList
            data={provinces}
            setSelected={(province) => setQuery({ ...query, province })}
            placeholder="Seleccionar"
            search={false}
            boxStyles={{
              backgroundColor: '#FEC89A',
              borderRadius: 10,
              borderColor: '#FEC89A',
              fontFamily: 'Poppins',
            }}
            inputStyles={{
              fontSize: 12,
            }}
            dropdownStyles={{ backgroundColor: '#FEC89A' }}
          />
          <TextInput
            value={query.city}
            placeholder="Localidad"
            onChangeText={(city) => setQuery({ ...query, city })}
            className="bg-new w-full h-[40px] rounded-[10px] p-[10px] pl-4 text-[12px] font-poppins mt-3"
            boxStyles={{
              backgroundColor: '#FEC89A',
              borderRadius: 10,
              borderColor: '#FEC89A',
            }}
            placeholderTextColor="black"
          />
        </View>
        <Button
        dissable={(!query.country || !query.province) ? false : true}
				onPress={() => {
					setStep(STEPS.DATES)
			   }}
          buttonClass={'justify-center w-64 h-14 bg-naranja rounded-2xl mt-10'}
          title={'Siguiente'}
          titleClass={'font-bold text-base text-white text-center'}
        />
      </View>
    </ScrollView>
  );
}

export default SelectLocation