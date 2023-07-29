import { ScrollView, View, Text, Image } from "react-native";
import Button from "../Buttons/ButtonCuston";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const DisplayVet = () => {
    const navigate = useNavigation();
    const [select, setSelect] = useState(null)

    return (
        <ScrollView className="bg-white">
            <View className="w-screen h-full items-center pt-24">
                <Text className="w-screen text-center font-semibold text-xl">Selecciona una modalidad</Text>
                <View className="mt-10 flex-row justify-evenly w-screen h-44">
                    <View className="items-center">
                        <Button 
                            buttonClass={`h-24 w-20 rounded-2xl items-center justify-center ${select === "HomeVet" ? "border-2 border-black bg-new" : "bg-gris"}`}
                            component={<Image className="w-full h-full rounded-2xl"/>}
                            onPress={()=>setSelect("HomeVet")}
                        />
                        <Text className="mt-5 text-center font-semibold text-xl">Veterinario a {"\n"} domicilio</Text>
                    </View>
                    <View className="items-center">
                        <Button 
                            buttonClass={`h-24 w-20 rounded-2xl items-center justify-center ${select === "ClinicVet" ? "border-2 border-black bg-new" : "bg-gris"}`}
                            component={<Image className="w-full h-full rounded-2xl"/>}
                            onPress={()=>setSelect("ClinicVet")}
                        />
                        <Text className="mt-5 text-center font-semibold text-xl">Clínicas {"\n"} veterinarias</Text>
                    </View>
                    
                </View>
                <Button 
                    buttonClass={"mt-20 bg-naranja w-56 h-12 rounded-2xl items-center justify-center"}
                    title={"Siguiente"}
                    titleClass={"text-white font-semibold text-base"}
                    onPress={()=> navigate.navigate(select)}
                    dissable={select === null ? false : true}
                />
            </View>
        </ScrollView>
    );
}
 
export default DisplayVet;