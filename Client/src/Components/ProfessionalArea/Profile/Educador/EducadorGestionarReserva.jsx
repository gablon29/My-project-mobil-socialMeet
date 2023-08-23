import { Text, View } from "react-native";
import FotoActivoSoliTabs from "../FotoActivoSoliTabs";
import RangoFechas from "../CalendarioCitas/RangoFechas";
import MascotasTab from "../MascotasTab";

const EducadorGestionarRerserva = ({item}) => {

    const { name, dateRange, mascotas} = item;
    const date = dateRange.start

    return (
        <View className="relative px-3 mt-10 shadow-2xl shadow-black w-80 rounded-xl bg-lightnew">
            <FotoActivoSoliTabs />
            <RangoFechas fechaServicio={date} name={name}/>
            <MascotasTab title={" a adiestrar:"} mascotas={mascotas}/>
        </View>
    );
}
 
export default EducadorGestionarRerserva;