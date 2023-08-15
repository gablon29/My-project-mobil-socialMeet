import { View } from "react-native";
import RangoFechas from "../CalendarioCitas/RangoFechas";
import MascotasTab from "../MascotasTab";
import PeluqueroServicios from "./PeluqueroServicios";
import ButtonsAcceptDeneg from "../ButtonsAcceptDeneg";
import FotoActivoSoliTabs from "../FotoActivoSoliTabs";
import ButtonGestionarReserva from "../ButtonGestinarReserva";

const PeluqueroActivosTab = () => {

    return (
        <View className="relative pb-10 shadow-2xl shadow-black mb-28 w-80 rounded-xl bg-lightnew items-center">
            <FotoActivoSoliTabs />
            <RangoFechas />
            <MascotasTab />
            <PeluqueroServicios />
            <ButtonGestionarReserva />
        </View>
    );
}
 
export default PeluqueroActivosTab;