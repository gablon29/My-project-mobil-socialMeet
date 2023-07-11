import React from 'react';
import { View, Image, TextInput, Text, ScrollView } from 'react-native';
import Plus from 'react-native-vector-icons/AntDesign';
import Delete from 'react-native-vector-icons/AntDesign';
import Button from '../Buttons/Button';

const EditInfoProfile = () => {
    return (
        <ScrollView>
            <View className="w-screen h-screen bg-white items-center pt-10">
                <View className="bg-naranja w-32 h-32 rounded-full relative justify-center">
                    <Button title={<Plus name="plus" size={40} color="white"/>} className="absolute"/>
                    <View className="absolute z-50 -right-4 -top-3 w-16 h-16 bg-black rounded-full justify-center">
                        <Button title={<Delete name="delete" size={32} color="white"/>}/>
                    </View>
                    {/* <Image source={require("../../../images/dog1.png")} className="w-[100%] h-[100%] rounded-full absolute"/> */}
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
                <View className="bg-naranja w-64 h-14 rounded-3xl  justify-center flex-row items-center">
                    <Button title="Guardar Información" colorText="text-white" textSize="text-base"/>
                </View>
            </View>
        </ScrollView>
    )
};

export default EditInfoProfile;