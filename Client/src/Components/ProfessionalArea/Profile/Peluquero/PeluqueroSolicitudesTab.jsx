import { View } from "react-native";
import RangoFechas from "../CalendarioCitas/RangoFechas";
import MascotasTab from "../MascotasTab";
import PeluqueroServicios from "./PeluqueroServicios";
import FotoActivoSoliTabs from "../FotoActivoSoliTabs";
import ButtonsAcceptDeneg from "../ButtonsAcceptDeneg";

const PeluqueroSolicitudesTab = ({item, aceptarOno}) => {

    const { name, dateRange, mascotas, servicios } = item;
    const date = dateRange.start
    
    return (
        <View className="relative shadow-2xl shadow-black pb-10 mb-28 w-80 rounded-xl bg-lightnew items-center">
            <FotoActivoSoliTabs />
            <RangoFechas name={name} fechaServicio={date}/>
            <MascotasTab mascotas={mascotas}/>
            <PeluqueroServicios servicios={servicios}/>
            <ButtonsAcceptDeneg aceptarOno={aceptarOno} item={item}/>
        </View>
    );
}
 
export default PeluqueroSolicitudesTab;