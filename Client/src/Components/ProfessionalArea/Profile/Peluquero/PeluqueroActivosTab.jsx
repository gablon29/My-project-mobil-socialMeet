import { View } from "react-native";
import RangoFechas from "../CalendarioCitas/RangoFechas";
import MascotasTab from "../MascotasTab";
import PeluqueroServicios from "./PeluqueroServicios";
import ButtonsAcceptDeneg from "../ButtonsAcceptDeneg";
import FotoActivoSoliTabs from "../FotoActivoSoliTabs";
import ButtonGestionarReserva from "../ButtonGestinarReserva";

const PeluqueroActivosTab = ({item}) => {

    const { name, dateRange, mascotas, servicios } = item;
    const date = dateRange.start

    return (
        <View className="relative pb-10 shadow-2xl shadow-black mb-28 w-80 rounded-xl bg-lightnew items-center">
            <FotoActivoSoliTabs />
            <RangoFechas name={name} fechaServicio={date}/>
            <MascotasTab mascotas={mascotas}/>
            <PeluqueroServicios servicios={servicios}/>
            <ButtonGestionarReserva item={item}/>
        </View>
    );
}
 
export default PeluqueroActivosTab;