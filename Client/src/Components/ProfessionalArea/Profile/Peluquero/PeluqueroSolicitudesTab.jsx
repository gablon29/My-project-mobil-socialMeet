import { View } from "react-native";
import RangoFechas from "../CalendarioCitas/RangoFechas";
import MascotasTab from "../MascotasTab";
import PeluqueroServicios from "./PeluqueroServicios";
import ButtonGestionarReserva from "../ButtonGestinarReserva";
import FotoActivoSoliTabs from "../FotoActivoSoliTabs";

const PeluqueroSolicitudesTab = ({index}) => {
    
    return (
        <View key={index} className="relative shadow-2xl shadow-black pb-10 mb-28 w-80 rounded-xl bg-lightnew items-center">
            <FotoActivoSoliTabs />
            <RangoFechas />
            <MascotasTab />
            <PeluqueroServicios />
            <ButtonGestionarReserva />
        </View>
    );
}
 
export default PeluqueroSolicitudesTab;