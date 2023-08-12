import { View, ScrollView, Text } from "react-native";
import RangoFechas from "./RangoFechas"
import Button from "../../../Buttons/ButtonCuston";

const GestionarReserva = () => {
    return (
        <ScrollView className="bg-white">
            <View className="items-center w-screen h-full py-10">
                <View className="relative mt-10 shadow-2xl shadow-black w-80 rounded-xl bg-lightnew">
                    <View className="absolute -left-3 -top-10 w-24 h-24 bg-new rounded-full border-[7px] border-white"></View>
                    <RangoFechas />
                    <View className="p-4 bottom-3 w-full justify-center">
                        <Text className="font-semibold text-lg my-5">Mascotas a cuidar</Text>
                        <View className="flex-row flex-wrap">
                            {
                                [1,2,3,4,5].map((item,index)=>(
                                    <View className="items-center justify-center w-[50%]">
                                        <View className="rounded-full w-11 h-11 bg-black"></View>
                                        <Text className="font-poppinsSemiBold text-sm mt-2">Nombre</Text>
                                        <Button title={"Ver perfil"} titleClass={`text-black font-poppins text-xs font-medium`} buttonClass={`mt-5 mb-10 bg-new rounded-lg w-[90px] h-5 justify-center items-center`}/>
                                    </View>
                                ))
                            }
                        </View>
                    </View>
                </View>
                <View className="mt-5 w-11/12 py-10">
                    <Button title={"Abrir Chat"} titleClass={`text-black font-poppinsBold`} buttonClass={`bg-new rounded-2xl h-14 w-full justify-center items-center`}/>                
                    <Button title={"Solicitar desbloqueo de fondos"} titleClass={`text-white font-poppinsBold`} buttonClass={`mt-20 bg-limon rounded-2xl h-14 w-full justify-center items-center`}/>                
                    <Button title={"Reportar usuario"} titleClass={`text-white font-poppinsBold`} buttonClass={`my-8 bg-amarillo rounded-2xl h-14 w-full justify-center items-center`}/>                
                    <Button title={"Cancelar la reserva"} titleClass={`text-white font-poppinsBold`} buttonClass={`bg-rojo rounded-2xl h-14 w-full justify-center items-center`}/>                
                </View>
            </View>
        </ScrollView>
    );
}
 
export default GestionarReserva;