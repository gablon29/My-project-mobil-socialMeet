import { View, ScrollView, Text } from "react-native";
import RangoFechas from "./RangoFechas"
import Button from "../../../Buttons/ButtonCuston";
import CuidadorGestionarReserva from "../Cuidador/CuidadorGestinarReserva";
import { useSelector } from "react-redux";
import PeluqueroGestionarReserva from "../Peluquero/PeluqueroGestionarReserva";
import PaseadorGestionarReserva from "../Paseador/PaseadorGestionarRerserva";
import EducadorGestionarRerserva from "../Educador/EducadorGestionarReserva";

const GestionarReserva = ({route}) => {

    const {item} = route.params;

    const { profession } = useSelector((state) => state?.ReducerProfessional);

    return (
        <ScrollView className="bg-white">
            <View className="items-center w-screen h-full py-10">
                {profession === "cuidador" && <CuidadorGestionarReserva item={item}/>}
                {profession === "peluquero" && <PeluqueroGestionarReserva item={item}/>}
                {profession === "paseador" && <PaseadorGestionarReserva item={item}/>}
                {profession === "educador" && <EducadorGestionarRerserva item={item}/>}
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