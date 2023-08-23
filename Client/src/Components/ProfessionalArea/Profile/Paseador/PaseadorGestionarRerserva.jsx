import { View } from "react-native";
import FotoActivoSoliTabs from "../FotoActivoSoliTabs";
import RangoFechas from "../CalendarioCitas/RangoFechas";
import Datepasear from "./Datepasear";
import MascotasTab from "../MascotasTab";

const PaseadorGestionarReserva = ({item}) => {

    const { name, ubicacion_paseo, mascotas, fechasPasear } = item;

    return (
        <View className="relative mt-10 px-5 shadow-2xl shadow-black w-80 rounded-xl bg-lightnew">
            <FotoActivoSoliTabs />
            <RangoFechas fechaServicio={ubicacion_paseo} name={name}/>
            <MascotasTab title={" a pasear:"} mascotas={mascotas}/>
            <Datepasear fechasPasear={fechasPasear}/>
        </View>
    );
}
 
export default PaseadorGestionarReserva;