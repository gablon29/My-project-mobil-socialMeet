import { View } from "react-native";
import FotoActivoSoliTabs from "../FotoActivoSoliTabs";
import RangoFechas from "../CalendarioCitas/RangoFechas";
import MascotasTab from "../MascotasTab";
import ButtonGestionarReserva from "../ButtonGestinarReserva";

const EducadorActivosTab = () => {
    return (
        <View className="pb-10 relative shadow-2xl shadow-black mb-28 w-80 rounded-xl bg-lightnew items-center">
            <FotoActivoSoliTabs />
            <RangoFechas fechaServicio={"Fecha de la sesión"}/>
            <MascotasTab title={" a adiestrar:"}/>
            <ButtonGestionarReserva />
        </View>
    );
}
 
export default EducadorActivosTab;