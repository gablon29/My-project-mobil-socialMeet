import { View } from "react-native";
import FotoActivoSoliTabs from "../FotoActivoSoliTabs";
import RangoFechas from "../CalendarioCitas/RangoFechas";
import ButtonGestionarReserva from "../ButtonGestinarReserva";
import MascotasTab from "../MascotasTab";
import FechasPasear from "./FechasPasear";

const PaseadorActivosTab = ({index}) => {
    return (
        <View key={index} className="pb-10 relative shadow-2xl shadow-black mb-28 w-80 rounded-xl bg-lightnew items-center">
            <FotoActivoSoliTabs />
            <RangoFechas />
            <MascotasTab title={" a pasear:"}/>
            <FechasPasear />
            <ButtonGestionarReserva />
        </View>
    );
}
 
export default PaseadorActivosTab;