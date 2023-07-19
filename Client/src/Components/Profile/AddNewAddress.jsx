import { ScrollView, TextInput, View, Text } from "react-native";
import Button from "../Buttons/ButtonCuston";
import { useState } from "react";

const AddNewAddress = () => {

    const [dataInputs, setDataInputs] = useState({});

    const labels = [
        {label:"Calle"}, 
        {label:"Número/Piso/Portal"}, 
        {label:"Provincia"}, 
        {label:"Localidad"}, 
        {label:"Código Postal"}
    ]

    const renderInputs = ({input, index}) => {
        return (
            <View key={index} className="mb-7">
                <Text className="text-base font-medium left-5">{input.label}</Text>
                <TextInput 
                    className="bg-gris rounded-full p-3 shadow-xl shadow-black"
                />
            </View>
        )
    }

    return (
        <ScrollView className="bg-white">
            <View className="w-screen h-full items-center mt-10">
                <Text className="text-2xl font-bold font-poppins">Nueva dirección</Text>
                <View className="w-10/12 mt-10">
                    {labels.map((input, index)=> renderInputs({input, index}))}
                </View>
                <Button 
                    title="Agregar dirección"
                    buttonClass="rounded-full bg-black w-8/12 h-14 my-3 justify-center"
                    titleClass="text-white text-center text-base font-semibold"
                />
            </View>
        </ScrollView>
    );
}
 
export default AddNewAddress;