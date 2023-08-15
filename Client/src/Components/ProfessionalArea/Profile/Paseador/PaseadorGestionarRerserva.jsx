import { View } from "react-native";
import FotoActivoSoliTabs from "../FotoActivoSoliTabs";
import RangoFechas from "../CalendarioCitas/RangoFechas";
import FechasPasear from "./FechasPasear";
import MascotasTab from "../MascotasTab";

const PaseadorGestionarReserva = () => {
    return (
        <View className="relative mt-10 px-5 shadow-2xl shadow-black w-80 rounded-xl bg-lightnew">
            <FotoActivoSoliTabs />
            <RangoFechas fechaServicio={"ubicación del paseo"}/>
            <MascotasTab title={" a pasear:"}/>
            <FechasPasear />
        </View>
    );
}
 
export default PaseadorGestionarReserva;