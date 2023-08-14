import { Text, View } from "react-native";
import FotoActivoSoliTabs from "../FotoActivoSoliTabs";
import RangoFechas from "../CalendarioCitas/RangoFechas";
import MascotasTab from "../MascotasTab";

const EducadorGestionarRerserva = () => {
    return (
        <View className="relative px-3 mt-10 shadow-2xl shadow-black w-80 rounded-xl bg-lightnew">
            <FotoActivoSoliTabs />
            <RangoFechas fechaServicio={"Fecha de la sesión"}/>
            <MascotasTab title={" a adiestrar:"}/>
        </View>
    );
}
 
export default EducadorGestionarRerserva;