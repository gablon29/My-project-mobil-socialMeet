import { View } from "react-native";
import RangoFechas from "../CalendarioCitas/RangoFechas";
import PeluqueroMascotasTab from "./PeluqueroMascotasTab";
import PeluqueroServicios from "./PeluqueroServicios";
import ButtonGestionarReserva from "../ButtonGestinarReserva";

const PeluqueroSolicitudesTab = ({index}) => {
    
    return (
        <View key={index} className="relative shadow-2xl shadow-black pb-10 mb-28 w-80 rounded-xl bg-lightnew items-center">
            <View className="absolute -left-3 -top-10 w-24 h-24 bg-new rounded-full border-[7px] border-white"></View>
            <RangoFechas />
            <PeluqueroMascotasTab />
            <PeluqueroServicios />
            <ButtonGestionarReserva />
        </View>
    );
}
 
export default PeluqueroSolicitudesTab;