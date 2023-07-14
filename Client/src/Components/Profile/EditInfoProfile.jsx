import React from 'react';
import { View, Image, TextInput, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Delete from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../Buttons/ButtonCuston';
import ButtonIcon from '../Buttons/Button';
import { useSelectImagen } from '../../CustomHooks/useImage';


const EditInfoProfile = () => {
    const { selImg, setProfile } = useSelectImagen();
    
    return (
        <ScrollView>
            <View className="w-screen h-full bg-white items-center pt-10 mb-5">
                <View className="bg-naranja w-40 h-40 rounded-full relative justify-center">
                    <TouchableOpacity className="flex justify-center items-center rounded-full bg-naranja w-40 h-40" onPress={() => setProfile()}>
                        {selImg.profile ? <Image source={{ uri: selImg.profile }} style={{ width: 160, height: 160 }} className='rounded-full' /> : <Icon name="plus" size={60} color="white" />}
                    </TouchableOpacity>
                        <View className="absolute z-50 -right-4 -top-3 w-16 h-16 bg-black rounded-full justify-center">
                            <ButtonIcon title={<Delete name="trash-can-outline" size={32} color="white"/>}/>
                        </View>
                </View>
                <View className="w-11/12 items-center mt-5 mb-3">
                    <Text className="w-full text-left font-bold text-lg">Nombre</Text>
                    <TextInput className="mb-5 shadow-lg shadow-black w-full h-10 pl-3 rounded-full bg-gris"/>
                    <Text className="w-full text-left font-bold text-lg">Apellidos</Text>
                    <TextInput className="mb-5 shadow-lg shadow-black w-full h-10 pl-3 rounded-full bg-gris"/>
                    <Text className="w-full text-left font-bold text-lg">Email</Text>
                    <TextInput className="mb-5 shadow-lg shadow-black w-full h-10 pl-3 rounded-full bg-gris"/>
                    <Text className="w-full text-left font-bold text-lg">Télefono</Text>
                    <TextInput className="mb-5 shadow-lg shadow-black w-full h-10 pl-3 rounded-full bg-gris"/>
                    <Text className="w-full text-left font-bold text-lg">País</Text>
                    <TextInput className="mb-5 shadow-lg shadow-black w-full h-10 pl-3 rounded-full bg-gris"/>
                    <Text className="w-full text-left font-bold text-lg">Provincia</Text>
                    <TextInput className="mb-5 shadow-lg shadow-black w-full h-10 pl-3 rounded-full bg-gris"/>
                </View>
                <Button 
                    title="Guardar Información"
                    buttonClass="bg-naranja rounded-3xl p-2 h-10 items-center w-7/12 shadow-xl shadow-black"
                    titleClass="font-semibold text-white text-base"
                    className="shadow- shadow-black"
                />
            </View>
        </ScrollView>
    )
};

export default EditInfoProfile;