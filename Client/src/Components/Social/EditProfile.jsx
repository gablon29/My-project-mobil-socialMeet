import ButtonSocial from '../Buttons/ButtonSocialPaws';
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, LogBox } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from 'react-redux';
import { setErrorPets, setLoadingPets } from '../../Redux/ReducerPets';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import add1 from '../../../images/iconos/add.png';
import remove from '../../../images/iconos/bin.png';
import { suvirImagen, useSelectImagen } from '../../CustomHooks/useImage';
import { saveHomeImage, EditProfileMethod, AddGallery } from '../../metodos/socialpet';

const EditProfile = ({route}) => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { pet } = route.params;



    const { selImg, setPortada, setImgProfile } = useSelectImagen();
    const [homePictures,setHomePictures] = useState(pet?.gallery);

    const [gallery, setGallery] = useState([])
    
    const [text, setText] = useState('');
    const handleTextChange = (inputText) => {
        setText(inputText);
    };   
    
    const handleRemoveImage = (i) => {

        if(homePictures.length > 0){
        const newImages = homePictures?.filter((image,index) => index !== i)
		setHomePictures([...newImages])
        }
        else{
            const newImages = gallery?.filter((image,index) => index !== i)
            setGallery([...newImages])
        }
    };


  const handleSaveData = async () => {

    let editedImages = []

    if (homePictures.length > 0) {
        for (const image of homePictures) {

            if (image.substring(0,5) === "file:") {
                const imageUrl = await suvirImagen(image);

                editedImages.push(imageUrl);
            } else {
            editedImages.push(image);
            }
        }
        const data = { 
            editedImages, pet, selImg
        }  
        
        await EditProfileMethod({
            data,
            loading: (v) => dispatch(setLoadingPets(v)),
            error: (msg) => {
              dispatch(setErrorPets(msg));
            },
            success: () => navigation.navigate('SocialProfile'),
          });
    };
    const newImages = [];
    if(gallery.length > 0 ) {
        for (const image of gallery) {

            if (image.substring(0,5) === "file:") {
                const imageUrl = await suvirImagen(image);

                newImages.push(imageUrl);
            } else {
                newImages.push(image);
            }
        };
        const data = { 
            newImages, pet, selImg
        }  
        
        await AddGallery({
            data,
            loading: (v) => dispatch(setLoadingPets(v)),
            error: (msg) => {
              dispatch(setErrorPets(msg));
            },
            success: () => navigation.navigate('SocialProfile'),
          });

    };

    console.log("esto es images", editedImages);
    console.log("esto es pet", newImages);    
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
                    {[...Array(9)?.keys()]?.map((i) => (
                        <View key={i} className="flex flex-row m-2">
                            {
                                homePictures[i] 
                                ? 
                                    <TouchableOpacity
                                        className='bg-[#FEC89A] w-24 h-24 rounded-xl'
                                        onPress={() => saveHomeImage(homePictures, setHomePictures)}
                                    >
                                    
                                        <Image source={{ uri: homePictures[i].url }} className="w-24 h-24 rounded-xl" />

                                        <TouchableOpacity
                                            onPress={() => handleRemoveImage(i)}
                                            className=" bg-[#FB6726] w-10 h-10 rounded-full absolute left-16 bottom-16"
                                        >
                                            <Image source={remove} className="absolute top-2 left-2" />
                                        </TouchableOpacity>
                                    </TouchableOpacity>

                                :
                                    <TouchableOpacity
                                        className='bg-[#FEC89A] w-24 h-24 rounded-xl'
                                        onPress={() => saveHomeImage(gallery, setGallery)}
                                    >
                                    {
                                        gallery[i]
                                        ?
                                            <Image source={{ uri: gallery[i].url }} className="w-24 h-24 rounded-xl" />
                                        :
                                            <Image source={add1} className="absolute top-8 left-8" />
                                    }

                                    <TouchableOpacity
                                        onPress={() => handleRemoveImage(i)}
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