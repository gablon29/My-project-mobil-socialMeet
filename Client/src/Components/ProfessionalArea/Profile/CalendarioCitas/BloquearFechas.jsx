import { View, Text, ScrollView } from "react-native";
import Button from "../../../Buttons/ButtonCuston";

const BloquearFechas = () => {
    return (
        <ScrollView className="bg-white">
            <View className="items-center py-10">
                <Text className="font-poppinsBold text-base">Bloquea tus fechas</Text>
                <Text className="font-poppins text-center mb-10 mt-5">Si te vas de viaje, tienes un compromiso o {"\n"} simplemente te apetece descansar, bloquea {"\n"} las fechas aquí para que no aparezcan {"\n"} disponibles en las reservas.</Text>
                <Text className="text-red-600 font-bold">En desarrollo</Text>
                <Text className="font-poppinsSemiBold  w-11/12 pl-4">Desde</Text>
                <View className="bg-new w-11/12 h-12 rounded-lg"></View>
                <Text className="font-poppinsSemiBold w-11/12 pl-4">Hasta</Text>
                <View className="bg-new w-11/12 h-12 rounded-lg"></View>
                <Button title={"Agregar más fechas"} titleClass={`text-white font-poppinsBolb`} buttonClass={`my-10 bg-celeste w-9/12 justify-center items-center rounded-2xl h-12`}/>
                <Button title={"Guardar"} titleClass={`text-naranja font-poppinsBolb`} buttonClass={`bg-white border-2 border-naranja w-9/12 justify-center items-center rounded-2xl h-12`}/>
            </View>
        </ScrollView>
    );
}
 
export default BloquearFechas;