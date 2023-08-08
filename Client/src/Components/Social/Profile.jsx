import ButtonSocial from '../Buttons/ButtonSocialPaws';
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import cover from '../../../images/portada.png';
import profile from '../../../images/temporales/image5.png';
import axios from "axios";
import location from '../../../images/iconos/gps.png';
const SocialProfile = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <ScrollView>
            <View>
                <TouchableOpacity className="flex flex-row items-center mt-4 mb-4 justify-between">
                    <TouchableOpacity className="flex flex-row items-center m-2 ml-4" onPress={() => navigation.goBack()}>
                        <Icon name="arrow-left" size={30} color="black" />
                        <Text className="text-base font-medium ml-2">
                            volver a socialpaws
                        </Text>
                    </TouchableOpacity>
                    <ButtonSocial
                        onPress={() => navigation.navigate('EditSocialProfile')}
                        buttonClass="bg-naranja rounded-full w-32 h-8 justify-center items-center mr-4"
                        title= 'Editar'
                        titleClass= 'text-white font-medium'
                    />
                </TouchableOpacity>
                
                <View>
                    <Image
                        source={cover}
                        className="w-390 h-190"
                    />
                    <Image
                        source={profile}
                        className="rounded-full w-120 h-120 bg-cover bg-no-repeat absolute top-32 left-32"
                    />
                </View>

                <View className="flex items-center justify-center mt-20">
                    <Text className="text-black text-center font-poppins font-bold text-base">
                        ¡Hola! Me llamo (Nombre)
                    </Text>                
                </View>
                <View className="flex flex-row items-center justify-center mt-2">
                    <Image
                        source={location}
                        className="w-6 h-6 mr-1"
                    />
                    <Text className="text-[#63C5C9] font-poppins text-xs font-normal">
                        Pais | Ciudad | Localidad
                    </Text>
                </View>


                <View className = "justify-center items-center m-10">
                    <Text className="text-black text-center leading-[25px] font-poppins text-xs font-normal mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed posuere quam. Morbi molestie bibendum orci. 
                    </Text>     
                    
                    <ButtonSocial 
                        onPress={() => "Home"}
                        buttonClass="border-2 h-8 w-64   border-orange-500 rounded-full justify-center items-center"
                        title= 'Chatea con mi humano'
                        titleClass= 'text-[#FB6726] text-center font-poppins text-base font-medium leading-[18px]'
                    />
                </View>

                <Text className="text-black text-center font-poppins font-bold text-base">
                    Imágenes destacadas
                </Text>         

            </View>
            
        </ScrollView>
    )
};

export default SocialProfile;