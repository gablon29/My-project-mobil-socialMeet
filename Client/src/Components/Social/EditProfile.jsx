import ButtonSocial from '../Buttons/ButtonSocialPaws';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, LogBox } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import add1 from '../../../images/iconos/add.png';
import remove from '../../../images/iconos/bin.png';
import { setErrorPets, setLoadingPets } from '../../Redux/ReducerPets';
import { suvirImagen, useSelectImagen } from '../../CustomHooks/useImage';
import { EditPetMethod } from '../../metodos/petsMetodos';
import { saveHomeImage, AddGallery, deletePhoto } from '../../metodos/socialpetMetodos';

const EditProfile = ({route}) => {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const { userPet } = useSelector((state) => state.ReducerPets);
    const { pet } = route.params;
    const { id } = pet;

    const { selImg, setPortada, setImgProfile } = useSelectImagen();
    const [homePictures,setHomePictures] = useState(userPet?.gallery || []);

    const [gallery, setGallery] = useState([]);
    const [text, setText] = useState(userPet?.information);
    const handleTextChange = (inputText) => {
        setText(inputText);
    };   
    
    const handleRemoveImage = async (imagetoRemove) => {
        if (imagetoRemove.url && homePictures?.some((image) => image.url === imagetoRemove.url)) {
            const newHomePictures = homePictures.filter((image) => image.url !== imagetoRemove.url);
            setHomePictures(newHomePictures);
            
            const data = { id, imagetoRemove};

            await deletePhoto({
                data,
                loading: (v) => dispatch(setLoadingPets(v)),
                error: (msg) => {
                  dispatch(setErrorPets(msg));
                },
              })
            .then(()=>console.log('se elimino la foto'))

        } else {
            const newGallery = gallery.filter((image) => image !== imagetoRemove);
            setGallery(newGallery);
        }
    };  
   
  const handleSaveData = async () => {
    let pet = {...userPet, information: text}
     if (selImg.portada) {
        const imageUrl = await suvirImagen(selImg.portada);
        pet = {
            ...pet,
            coverImage: imageUrl
        }
    };
    
    await EditPetMethod({
        pet,
        loading: (v) => dispatch(setLoadingPets(v)),
        error: (msg) => {
          dispatch(setErrorPets(msg));
        },
        success: () => "Hola",
    });

    const newPhotos = [];
    if(gallery.length > 0 ) {
        for (const image of gallery) {
            if (image.substring(0,5) === "file:") {
                const imageUrl = await suvirImagen(image);
                newPhotos.push(imageUrl);
            } else {
                newPhotos.push(image);
            }
        };
        const data = { newPhotos, pet }          
        await AddGallery({
            data,
            loading: (v) => dispatch(setLoadingPets(v)),
            error: (msg) => {
              dispatch(setErrorPets(msg));
            },
            success: () => navigation.navigate('SocialProfile', { pet }),
          });
    }
     navigation.navigate('SocialProfile', { pet });
}

    return (
        <ScrollView className="bg-white">
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

                <View className="w-[360px] h-44 mx-auto mb-2 bg-[#63C5C9]">
                    <TouchableOpacity className="flex justify-center items-center w-[360px] h-44" onPress={() => setPortada()}>
                        {selImg?.portada 
                            ? 
                                <Image source={{ uri: selImg?.portada }} className="w-[360px] h-44  " /> 
                            :   <Icon name="plus" size={60} color="white" />
                        }
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="absolute z-50 top-3 -right-2"
                        onPress={() => {
                        if (selImg?.portada) {
                            setImgProfile('');
                        }
                        }}
                    >
                    </TouchableOpacity>
                    </View>       
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

                <View className=" flex flex-wrap flex-row items-center justify-center mt-6 ">
                    {
                        homePictures?.map((image, index) => {
                            return (
                                <View key={index} className="flex flex-row m-2">
                                     <TouchableOpacity
                                        className='bg-[#FEC89A] w-24 h-24 rounded-xl'
                                        onPress={() => saveHomeImage(homePictures, setHomePictures)}
                                    >
                                    
                                        <Image source={{ uri: image?.url }} className="w-24 h-24 rounded-xl" />

                                        <TouchableOpacity
                                            onPress={() => handleRemoveImage(image)}
                                            className=" bg-[#FB6726] w-10 h-10 rounded-full absolute left-16 bottom-16"
                                        >
                                            <Image source={remove} className="absolute top-2 left-2" />
                                        </TouchableOpacity>
                                    </TouchableOpacity>
                                </View>
                            )
                        })                      
                    }

                    {[...Array(9 - homePictures?.length).keys()].map((index) => (
                        <View key={index} className="flex flex-row m-2">
                            {                                
                                    <TouchableOpacity
                                        className='bg-[#FEC89A] w-24 h-24 rounded-xl'
                                        onPress={() => saveHomeImage(gallery, setGallery)}
                                    >
                                    {
                                        gallery[index]
                                        ?
                                            <Image source={{ uri: gallery[index] }} className="w-24 h-24 rounded-xl" />
                                        :
                                            <Image source={add1} className="absolute top-8 left-8" />
                                    }

                                    <TouchableOpacity
                                        onPress={() => handleRemoveImage(gallery[index])}
                                        className=" bg-[#FB6726] w-10 h-10 rounded-full absolute left-16 bottom-16"
                                    >
                                        <Image source={remove} className="absolute top-2 left-2" />
                                    </TouchableOpacity>
                                </TouchableOpacity>

                            }              
                        </View>
                    ))}
                            
                </View>

                <View className="flex items-center mt-10 mb-8">
                    <ButtonSocial 
                        onPress={handleSaveData}
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