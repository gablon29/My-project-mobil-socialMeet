import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import ButtonSocial from '../Buttons/ButtonSocialPaws';

const SelectPet = () => {

    const pets = useSelector(state => state.ReducerPets.userPets)
    const navigation = useNavigation();

    const [selectedPetId, setSelectedPetId] = useState(null);

    const handlePetSelection = (petId) => {
        setSelectedPetId(petId);
    };

    const handleSelectButton = () => {
        if (selectedPetId !== null) {
            // Aquí navega a la ruta 'Profile' con el pet seleccionado
            navigation.navigate('SocialProfile', { pet: pets.find(pet => pet.id === selectedPetId) });
        }
    };

    return (
        <View>
            <TouchableOpacity className="flex flex-row items-center mt-4 mb-4 justify-between">
                    <TouchableOpacity className="flex flex-row items-center m-2 ml-4" onPress={() => navigation.goBack()}>
                        <Icon name="arrow-left" size={30} color="black" />
                        <Text className="text-base font-medium ml-2">
                            volver a socialpaws
                        </Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            
            <View className="flex flex-col mt-14 ml-14 mr-14">
                <Text className="text-black text-center font-Poppins font-bold text-xl leading-30">
                    Selecciona una de tus mascotas
                </Text>
            </View>

            <View className="flex flex-wrap justify-center items-center">
                {pets?.map(pet => {
                    return (
                        <View key={pet.id} className="flex flex-row items-center justify-center mt-4">
                            
                            <View className=""> 
                                <TouchableOpacity
                                    onPress={() => handlePetSelection(pet.id)}
                                >
                                    <Image
                                        source={!pet?.profilePic ? {uri: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"} : { uri: pet?.profilePic }}
                                        className="w-32 h-32 ml-3 mr-3"
                                    />
                                </TouchableOpacity>
                                <Text className="text-xl text-center font-poppins font-semibold">
                                    {pet.name}
                                </Text>     
                            </View>
                        </View>
                    )
                })}
            </View>

            <View className = "justify-center items-center mt-8 mb-8">
                <ButtonSocial 
                    onPress={handleSelectButton}
                    buttonClass="border-2 pl-24 pr-24 pt-3 pb-3 border-orange-500 rounded-xl justify-center items-center"
                    title= 'Seleccionar'
                    titleClass= 'text-orange-500 font-medium'
                />
            </View>

        </View>
    )
};

export default SelectPet;