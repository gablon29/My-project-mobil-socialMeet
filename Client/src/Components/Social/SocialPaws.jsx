import { SelectList } from 'react-native-dropdown-select-list';
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import ButtonSocial from '../Buttons/ButtonSocialPaws';
import { setGallery, setLoadingPets, setErrorPets } from '../../Redux/ReducerPets';
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import doggy from '../../../images/dropDownMenu/socialDog.png';
import { BringGallery } from '../../metodos/socialpetMetodos';

const SocialPaws = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const gallery = useSelector((state) => state.ReducerPets.gallery);

    console.log(gallery);
    const [filters, setFilters] = useState({
        country: '',
        province: '',
        localidad: '',
        especie: '',
        raza: ''
    });

    const handleChange = (selectedOption) => {
        setFilters({
            ...filters,
            country: selectedOption.value
        })
    };    

    useEffect(() => {
      fetchData();
    }, [dispatch]);
  
    const fetchData = () => {
      BringGallery({
        loading: (v) => dispatch(setLoadingPets(v)),
        error: (msg) => dispatch(setErrorPets(msg)),
        success: (res) => dispatch(setGallery(res.payload)),
      });
    };
    
    return (
        <ScrollView className="bg-white">
            <View className= "h-full w-screen">
                <View className = "justify-center items-center mt-8">
                    <ButtonSocial 
                        onPress={() => navigation.navigate('SelectPet')}
                        buttonClass="bg-naranja rounded-full w-56 h-8 justify-center items-center"
                        title= 'Ver mis perfiles'
                        titleClass= 'text-white font-medium'
                    />
                </View>
                <View className="flex justify-center items-center mt-12 ">
                    <Image 
                        source={doggy}
                        className="w-44 h-32"
                    />
                </View>
                <View className='flex m-10 ml-14 mr-14' >
                    <Text className="text-2xl font-bold font-poppins leading-6 text-black text-center">
                        Descubre {" "}
                            <Text className="text-orange-500">
                                 mascotas simpáticas
                            </Text>
                        {" "} en tu zona
                    </Text>
                </View>
                <View className="">
                    <View className="flex-row justify-center">
                    <View className="m-2">
                        <Text className="font-poppins font-bold ml-2">País</Text>
                    
                        <SelectList 
                            setSelected={(val) => setSelected(val)} 
                            data={"España"} 
                            save="value"
                            placeholder=''
                            onChange={handleChange}
                            boxStyles={{
                                backgroundColor: '#FEC89A',
                                borderRadius: 10,
                                borderColor: '#FEC89A',
                                height: 20,
                                padding: 10,
                              }}
                              inputStyles={{
                                fontSize: 12,
                                fontFamily:"Poppins",
                                marginTop: -2
                  
                              }}
                              dropdownStyles={{
                                backgroundColor: '#FEC89A',
                              }}
                        />
                    </View>
                    <View className="m-2">
                        <Text className="font-poppins font-bold ml-2">Provincia</Text>
                    
                        <SelectList 
                            setSelected={(val) => setSelected(val)} 
                            data={"Buenos Aires"} 
                            save="value"
                            placeholder=''
                            onChange={handleChange}
                            boxStyles={{
                                backgroundColor: '#FEC89A',
                                borderRadius: 10,
                                borderColor: '#FEC89A',
                                height: 20,
                                padding: 10,
                              }}
                              inputStyles={{
                                fontSize: 8,
                                fontFamily:"Poppins",
                                marginTop: -2
                  
                              }}
                              dropdownStyles={{
                                backgroundColor: '#FEC89A',
                              }}
                              
                        />
                    </View>
                    </View>

                    <View className="ml-12 mr-12 mt-2 mb-2">
                        <Text className="font-poppins font-bold ml-2">Localidad</Text>
                    
                        <SelectList 
                            setSelected={(val) => setSelected(val)} 
                            data={"España"} 
                            save="value"
                            placeholder=''
                            onChange={handleChange}
                            boxStyles={{
                                backgroundColor: '#FEC89A',
                                borderRadius: 10,
                                borderColor: '#FEC89A',
                                height: 20,
                                padding: 10
                              }}
                              inputStyles={{
                                fontSize: 12,
                                fontFamily:"Poppins",
                                marginTop: -2
                  
                              }}
                              dropdownStyles={{
                                backgroundColor: '#FEC89A',
                              }}
                        />
                    </View>

                    <View className="flex-row justify-center">
                    <View className="m-2">
                        <Text className="font-poppins font-bold ml-2">Especie</Text>
                    
                        <SelectList 
                            setSelected={(val) => setSelected(val)} 
                            data={"España"} 
                            save="value"
                            placeholder=''
                            onChange={handleChange}
                            boxStyles={{
                                backgroundColor: '#FEC89A',
                                borderRadius: 10,
                                borderColor: '#FEC89A',
                                height: 20,
                                padding: 10,
                              }}
                              inputStyles={{
                                fontSize: 12,
                                fontFamily:"Poppins",
                                marginTop: -2
                  
                              }}
                              dropdownStyles={{
                                backgroundColor: '#FEC89A',
                              }}
                        />
                    </View>
                    <View className="m-2">
                        <Text className="font-poppins font-bold ml-2">Raza</Text>
                    
                        <SelectList 
                            setSelected={(val) => setSelected(val)} 
                            data={"Buenos Aires"} 
                            save="value"
                            placeholder=''
                            onChange={handleChange}
                            boxStyles={{
                                backgroundColor: '#FEC89A',
                                borderRadius: 10,
                                borderColor: '#FEC89A',
                                height: 20,
                                padding: 10,
                                
                              }}
                              inputStyles={{
                                fontSize: 12,
                                fontFamily:"Poppins",
                                marginTop: -2
                  
                              }}
                              dropdownStyles={{
                                backgroundColor: '#FEC89A',
                              }}
                        />
                    </View>
                    </View>

                </View>
                <View className = "justify-center items-center mt-8 mb-8">
                    <ButtonSocial 
                        onPress={() => "Home"}
                        buttonClass="border-2 pl-24 pr-24 pt-3 pb-3 border-orange-500 rounded-xl justify-center items-center"
                        title= 'Buscar'
                        titleClass= 'text-orange-500 font-medium'
                    />
                </View>
                <View className="flex justify-end items-end mr-4">
                <View className="mr-4 mt-2 mb-2 w-2/5">
                        <Text className="font-poppins font-bold ml-2">Ordenar por:</Text>
                    
                        <SelectList 
                            setSelected={(val) => setSelected(val)} 
                            data={"España"} 
                            save="value"
                            placeholder='Seleccionar'
                            onChange={handleChange}
                            
                            boxStyles={{
                                backgroundColor: '#FEC89A',
                                borderRadius: 10,
                                borderColor: '#FEC89A',
                                height: 20,
                                padding: 1
                                
                              }}
                              inputStyles={{
                                fontSize: 12,
                                fontFamily:"Poppins",
                                marginTop: -2
                  
                              }}
                              dropdownStyles={{
                                backgroundColor: '#FEC89A',
                              }}
                        />
                    </View>
                    </View>
                    {
                      gallery 
                      &&
                      <View className=" flex flex-wrap flex-row items-center justify-center mt-6 ">
                        {gallery?.map((i) => (
                            <View key={i.id} className="flex flex-row m-2">
                                <TouchableOpacity
                                    className='bg-[#FEC89A] w-24 h-24 rounded-xl'
                                    onPress={() => navigation.navigate('Photo', { photo: i })}
                                >
                                  <Image source={{ uri: i.url }} className="w-24 h-24 rounded-xl" />
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View> 
                    }                      
            </View>
        </ScrollView>
    )
}

export default SocialPaws;