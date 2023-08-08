import ButtonSocial from '../Buttons/ButtonSocialPaws';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import add from '../../../images/iconos/cruz.png';
import add1 from '../../../images/iconos/add.png';
import remove from '../../../images/iconos/bin.png';

const EditProfile = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const [text, setText] = useState('');

  const handleTextChange = (inputText) => {
    setText(inputText);
  };

    return (
        <ScrollView>
            <View>
                <TouchableOpacity className="flex flex-row items-center mt-5 mb-8 justify-start">
                    <TouchableOpacity className="flex flex-row items-center m-2 ml-4" onPress={() => navigation.goBack()}>
                        <Icon name="arrow-left" size={30} color="black" />
                        <Text className="text-base font-medium ml-2">
                            volver al perfil
                        </Text>
                    </TouchableOpacity>
                </TouchableOpacity>

                <Text className="text-black text-start ml-4 mb-4 font-poppins font-bold text-base">
                    Imagen de portada
                </Text>

                <TouchableOpacity 
                    className="mb-8 bg-[#63C5C9] w-full h-44"
                    onPress={() => handleUploadImage}
                >                    
                    <Image
                    source={add}
                    className="absolute top-12 left-44"
                    />
                </TouchableOpacity>

                <Text className="text-black text-start ml-4 font-poppins font-bold text-base">
                    Descripción
                </Text>
                <TextInput
                    className="bg-[#FEC89A] w-361 h-40 pl-4 rounded-xl m-4"
                    onChangeText={handleTextChange}
                    value={text}
                    placeholder="Escribe una descripción"
                />
                <View className="flex items-center justify-center">                
                    <Text className="text-black text-center font-poppins text-base font-normal leading-[18px] w-72 h-14 mt-4 ">
                        Selecciona hasta 9 imágenes destacadas de tu mascota donde muestres toda su esencia.
                    </Text>
                </View>

                <View className="flex flex-wrap ml-5 mr-5 mt-3">                
                    <View >
                        <TouchableOpacity 
                            className="mt-8  bg-[#FEC89A] w-24 h-24 rounded-xl"
                            onPress={() => handleUploadImage}
                        >                    
                            <Image
                            source={add1}
                            className="absolute top-8 left-8"
                            />
                            <TouchableOpacity
                                className=" bg-[#FB6726] w-10 h-10 rounded-full absolute left-16 top-0"
                            >
                                <Image
                                    source={remove}
                                    className="absolute top-2 left-2"
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>  
                    </View>                      
                </View>

            </View>

        </ScrollView>
    )
};

export default EditProfile;