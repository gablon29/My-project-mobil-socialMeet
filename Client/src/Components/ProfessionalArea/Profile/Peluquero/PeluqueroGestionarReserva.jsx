import { View } from "react-native";
import FotoActivoSoliTabs from "../FotoActivoSoliTabs";
import RangoFechas from "../CalendarioCitas/RangoFechas";
import MascotasTab from "../MascotasTab";
import PeluqueroServicios from "./PeluqueroServicios";

const PeluqueroGestionarReserva = () => {
    return (
        <View className="relative mt-10 px-5 shadow-2xl shadow-black w-80 rounded-xl bg-lightnew">
            <FotoActivoSoliTabs />
            <RangoFechas fechaServicio={"Fecha del servicio"}/>
            <MascotasTab />
            <PeluqueroServicios />
        </View>
    );
}
 
export default PeluqueroGestionarReserva;