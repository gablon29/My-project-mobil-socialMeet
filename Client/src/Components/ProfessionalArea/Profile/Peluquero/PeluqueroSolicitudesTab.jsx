import { View } from "react-native";
import RangoFechas from "../CalendarioCitas/RangoFechas";
import MascotasTab from "../MascotasTab";
import PeluqueroServicios from "./PeluqueroServicios";
import FotoActivoSoliTabs from "../FotoActivoSoliTabs";
import ButtonsAcceptDeneg from "../ButtonsAcceptDeneg";

const PeluqueroSolicitudesTab = () => {
    
    return (
        <View className="relative shadow-2xl shadow-black pb-10 mb-28 w-80 rounded-xl bg-lightnew items-center">
            <FotoActivoSoliTabs />
            <RangoFechas />
            <MascotasTab />
            <PeluqueroServicios />
            <ButtonsAcceptDeneg />
        </View>
    );
}
 
export default PeluqueroSolicitudesTab;