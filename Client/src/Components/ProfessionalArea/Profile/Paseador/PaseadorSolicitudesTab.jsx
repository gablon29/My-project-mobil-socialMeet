import { View } from "react-native";
import FotoActivoSoliTabs from "../FotoActivoSoliTabs";
import RangoFechas from "../CalendarioCitas/RangoFechas";
import ButtonsAcceptDeneg from "../ButtonsAcceptDeneg";
import MascotasTab from "../MascotasTab";
import Datepasear from "./Datepasear";

const PaseadorSolicitudesTab = ({item, aceptarOno}) => {

    const { name, ubicacion_paseo, mascotas, fechasPasear } = item;

    return (
        <View className="pb-10 relative shadow-2xl shadow-black mb-28 w-80 rounded-xl bg-lightnew items-center">
            <FotoActivoSoliTabs />
            <RangoFechas name={name} fechaServicio={ubicacion_paseo}/>
            <MascotasTab mascotas={mascotas} title={" a pasear:"}/>
            <Datepasear fechasPasear={fechasPasear}/>
            <ButtonsAcceptDeneg aceptarOno={aceptarOno} item={item}/>
        </View>
    );
}
 
export default PaseadorSolicitudesTab;