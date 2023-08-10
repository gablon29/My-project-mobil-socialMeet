import ButtonSocial from '../Buttons/ButtonSocialPaws';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import add from '../../../images/iconos/cruz.png';
import add1 from '../../../images/iconos/add.png';
import remove from '../../../images/iconos/bin.png';
import { suvirImagen } from '../../CustomHooks/useImage';

const EditProfile = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const [text, setText] = useState('');
    
  const handleTextChange = (inputText) => {
    setText(inputText);
  };

  

  const handleUploadImage = () => {
      
  }

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

                <View className="flex ml-5 mr-5 mt-6">                
                    <View className="flex flex-row  mt-5 ml-3 ">
                        <View className="mr-4">
                        <TouchableOpacity 
                            className=" bg-[#FEC89A] w-24 h-24 rounded-xl"
                            onPress={() => handleUploadImage}
                        >                    
                            <Image
                            source={add1}
                            className="absolute top-8 left-8"
                            />
                            <TouchableOpacity
                                className=" bg-[#FB6726] w-10 h-10 rounded-full absolute left-16 bottom-16"
                            >
                                <Image
                                    source={remove}
                                    className="absolute top-2 left-2"
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>  
                        </View>
                        <View className="mr-4">
                        <TouchableOpacity 
                            className=" bg-[#FEC89A] w-24 h-24 rounded-xl"
                            onPress={() => handleUploadImage}
                        >                    
                            <Image
                            source={add1}
                            className="absolute top-8 left-8"
                            />
                            <TouchableOpacity
                                className=" bg-[#FB6726] w-10 h-10 rounded-full absolute left-16 bottom-16"
                            >
                                <Image
                                    source={remove}
                                    className="absolute top-2 left-2"
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>  
                        </View>

                        <View>
                        <TouchableOpacity 
                            className=" bg-[#FEC89A] w-24 h-24 rounded-xl"
                            onPress={() => handleUploadImage}
                        >                    
                            <Image
                            source={add1}
                            className="absolute top-8 left-8"
                            />
                            <TouchableOpacity
                                className=" bg-[#FB6726] w-10 h-10 rounded-full absolute left-16 bottom-16"
                            >
                                <Image
                                    source={remove}
                                    className="absolute top-2 left-2"
                                />
                            </TouchableOpacity>
                        </TouchableOpacity> 
                        </View> 
                    </View>  

                    <View className="flex flex-row  mt-5 ml-3 ">
                        <View className="mr-4">
                        <TouchableOpacity 
                            className=" bg-[#FEC89A] w-24 h-24 rounded-xl"
                            onPress={() => handleUploadImage}
                        >                    
                            <Image
                            source={add1}
                            className="absolute top-8 left-8"
                            />
                            <TouchableOpacity
                                className=" bg-[#FB6726] w-10 h-10 rounded-full absolute left-16 bottom-16"
                            >
                                <Image
                                    source={remove}
                                    className="absolute top-2 left-2"
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>  
                        </View>
                        <View className="mr-4">
                        <TouchableOpacity 
                            className=" bg-[#FEC89A] w-24 h-24 rounded-xl"
                            onPress={() => handleUploadImage}
                        >                    
                            <Image
                            source={add1}
                            className="absolute top-8 left-8"
                            />
                            <TouchableOpacity
                                className=" bg-[#FB6726] w-10 h-10 rounded-full absolute left-16 bottom-16"
                            >
                                <Image
                                    source={remove}
                                    className="absolute top-2 left-2"
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>  
                        </View>

                        <View>
                        <TouchableOpacity 
                            className=" bg-[#FEC89A] w-24 h-24 rounded-xl"
                            onPress={() => handleUploadImage}
                        >                    
                            <Image
                            source={add1}
                            className="absolute top-8 left-8"
                            />
                            <TouchableOpacity
                                className=" bg-[#FB6726] w-10 h-10 rounded-full absolute left-16 bottom-16"
                            >
                                <Image
                                    source={remove}
                                    className="absolute top-2 left-2"
                                />
                            </TouchableOpacity>
                        </TouchableOpacity> 
                        </View> 
                    </View>

                    <View className="flex flex-row  mt-5 ml-3 ">
                        <View className="mr-4">
                        <TouchableOpacity 
                            className=" bg-[#FEC89A] w-24 h-24 rounded-xl"
                            onPress={() => handleUploadImage}
                        >                    
                            <Image
                            source={add1}
                            className="absolute top-8 left-8"
                            />
                            <TouchableOpacity
                                className=" bg-[#FB6726] w-10 h-10 rounded-full absolute left-16 bottom-16"
                            >
                                <Image
                                    source={remove}
                                    className="absolute top-2 left-2"
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>  
                        </View>
                        <View className="mr-4">
                        <TouchableOpacity 
                            className=" bg-[#FEC89A] w-24 h-24 rounded-xl"
                            onPress={() => handleUploadImage}
                        >                    
                            <Image
                            source={add1}
                            className="absolute top-8 left-8"
                            />
                            <TouchableOpacity
                                className=" bg-[#FB6726] w-10 h-10 rounded-full absolute left-16 bottom-16"
                            >
                                <Image
                                    source={remove}
                                    className="absolute top-2 left-2"
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>  
                        </View>

                        <View>
                        <TouchableOpacity 
                            className=" bg-[#FEC89A] w-24 h-24 rounded-xl"
                            onPress={() => handleUploadImage}
                        >                    
                            <Image
                            source={add1}
                            className="absolute top-8 left-8"
                            />
                            <TouchableOpacity
                                className=" bg-[#FB6726] w-10 h-10 rounded-full absolute left-16 bottom-16"
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

                <View className="flex items-center mt-10">
                    <ButtonSocial 
                        onPress={() => "Home"}
                        buttonClass="border-2 flex w-56 h-14 justify-center items-center border-orange-500 rounded-xl"
                        title= 'Guardar'
                        titleClass= 'text-orange-500 font-medium'
                    />
                </View>
            </View>

        </ScrollView>
    )
};

export default EditProfile;