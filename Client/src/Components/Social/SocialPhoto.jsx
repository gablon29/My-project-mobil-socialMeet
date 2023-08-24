import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorPets, setLoadingPets, setPetByPhoto, setOwnerByPet } from '../../Redux/ReducerPets';
import location from '../../../images/iconos/gps.png';
import React, { useEffect } from 'react';
import ButtonSocial from '../Buttons/ButtonSocialPaws';
import { ActivityIndicator } from "react-native";
import { FindPetByPhoto, FindOwner } from '../../metodos/socialpetMetodos';

const SocialPhoto = ({route}) => {

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { photo } = route.params;

    const pet = useSelector((state) => state.ReducerPets.petByPhoto);
    const owner = useSelector((state)=> state.ReducerPets.owner);
    const loading = useSelector((state) => state.ReducerPets.loadingPets);

    useEffect(() => {
        fetchData();
      }, [photo]);
    
      const fetchData = () => {
        FindPetByPhoto({
          id: photo.id,
          loading: (v) => dispatch(setLoadingPets(v)),
          error: (msg) => dispatch(setErrorPets(msg)),
          success: (res) => dispatch(setPetByPhoto(res)),
        });   
        FindOwner({
            userId: pet.owner,
            loading: (v) => dispatch(setLoadingPets(v)),
            error: (msg) => dispatch(setErrorPets(msg)),
            success: (res) => dispatch(setOwnerByPet(res)),
        });   
      };

    return (
        <>
        {
            loading
            ?
            <View class="flex justify-center items-center">
                <ActivityIndicator color={"#FB6726"} />
            </View>
            :
            <ScrollView className="bg-white">            
                <TouchableOpacity className="flex flex-row items-center mt-4 mb-4 justify-between">
                    <TouchableOpacity className="flex flex-row items-center m-2 ml-4" onPress={() => navigation.goBack()}>
                        <Icon name="arrow-left" size={25} color="black" />
                        <Text className="text-base font-medium ml-2">
                            volver al feed
                        </Text>
                    </TouchableOpacity>
                </TouchableOpacity>
                <View className="flex flex-row items-start m-4">
                    <Image
                        src={pet?.profilePic}
                        className="w-10 h-10 rounded-full"
                    />
                    <View className="flex flex-col">
                        <Text className="text-base font-medium">
                            {pet?.name}
                        </Text>
                        <Text className="text-teal-400 font-poppins text-xs font-normal">
                            {photo.date}
                        </Text>
                    </View>
                </View>
                <View className="flex justify-center items-center">
                    <Image
                    src={photo.url}
                    className="w-80 h-[430] rounded-xl"
                />
                </View>            

                <View className="flex flex-row justify-between m-4">
                    <View className="flex flex-row items-center justify-center ">
                        <Image
                            source={location}
                            className="w-6 h-6 mr-1"
                        />
                        <Text className="text-[#63C5C9] font-poppins text-xs font-normal">
                            {owner?.country} | {owner?.province} 
                        </Text>
                    </View>
                    <ButtonSocial
                        onPress={() => navigation.navigate("SocialComments", {photo: photo, user: owner})}
                        buttonClass="bg-[#FB6726] rounded-full p-1 pl-3 pr-3 justify-center items-center mr-4"
                        title= 'Enviar mensaje'
                        titleClass= 'text-white font-normal'
                    />
                </View>

                <TouchableOpacity
                    className="ml-4 mb- 4"
                    onPress={() => navigation.navigate("SocialComments", {photo: photo, user: owner})}
                >
                    <Text className="text-black font-poppins text-xs font-normal underline">
                        Ver {photo.comments.length} comentarios  
                    </Text>
                </TouchableOpacity>

                <View className="flex justify-center items-center mb-5 mt-5">
                    <ButtonSocial 
                        onPress={() => navigation.navigate("SocialComments", {photo: photo, user: owner})}
                        buttonClass="rounded-full border-2 border-[#FEC89A] bg-white shadow-md p-3 pl-24 pr-24"
                        title= 'Escribir un comentario'
                        titleClass= 'text-[#FEC89A] text-center font-poppins text-xs font-semibold'
                    />
                </View>   
            </ScrollView>
            }
        </>        
    )
};

export default SocialPhoto;