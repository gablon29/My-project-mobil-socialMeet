import { View } from "react-native";
import FotoActivoSoliTabs from "../FotoActivoSoliTabs";
import RangoFechas from "../CalendarioCitas/RangoFechas";
import ButtonsAcceptDeneg from "../ButtonsAcceptDeneg";
import MascotasTab from "../MascotasTab";
import FechasPasear from "./FechasPasear";

const PaseadorSolicitudesTab = ({index}) => {
    return (
        <View key={index} className="pb-10 relative shadow-2xl shadow-black mb-28 w-80 rounded-xl bg-lightnew items-center">
            <FotoActivoSoliTabs />
            <RangoFechas />
            <MascotasTab title={" a pasear:"}/>
            <FechasPasear />
            <ButtonsAcceptDeneg />
        </View>
    );
}
 
export default PaseadorSolicitudesTab;