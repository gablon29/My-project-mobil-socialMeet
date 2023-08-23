import { View } from "react-native";
import FotoActivoSoliTabs from "../FotoActivoSoliTabs";
import RangoFechas from "../CalendarioCitas/RangoFechas";
import MascotasTab from "../MascotasTab";
import PeluqueroServicios from "./PeluqueroServicios";

const PeluqueroGestionarReserva = ({item}) => {

    const { name, dateRange, mascotas, servicios } = item;
    const date = dateRange.start

    return (
        <View className="relative mt-10 px-5 shadow-2xl shadow-black w-80 rounded-xl bg-lightnew">
            <FotoActivoSoliTabs />
            <RangoFechas fechaServicio={date} name={name}/>
            <MascotasTab mascotas={mascotas}/>
            <PeluqueroServicios servicios={servicios}/>
        </View>
    );
}
 
export default PeluqueroGestionarReserva;