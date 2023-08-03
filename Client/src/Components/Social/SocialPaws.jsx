import { SelectList } from 'react-native-dropdown-select-list';
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import ButtonSocial from '../Buttons/ButtonSocialPaws';
import { View, Text, Image } from "react-native";
import doggy from '../../../images/dropDownMenu/misMascotas.png';
const SocialPaws = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [country, setCountry] = useState()
    const [countryOptions, setCountryOptions] = useState([]);
    const [provinceOptions, setProvinceOptions] = useState([]);
    const [filters, setFilters] = useState({
        country: '',
        province: '',
        localidad: '',
        especie: '',
        raza: ''
    })


    const handleChange = (selectedOption) => {
        setCountry(selectedOption.value); // Actualizar el estado country con el valor seleccionado
    };

    
    
    return (
        <View className= "h-full w-screen">
            <View className = "justify-center items-center p-8">
                <ButtonSocial 
                    onPress={() => "Home"}
                    buttonClass="bg-naranja rounded-full w-56 h-8 justify-center items-center"
                    title= 'Ver mis perfiles'
                    titleClass= 'text-white'
                />
            </View>
            <Image 
                source={doggy}
                className="w-20 h-4"
            />

            <Text>Descubre mascotas simpáticas en tu zona</Text>

            <View>
            <Text className="font-poppins">País</Text>
          

        </View>
        </View>
    )
}

export default SocialPaws;