import { View } from "react-native";
import ButtonsAcceptDeneg from "../ButtonsAcceptDeneg";
import RangoFechas from "../CalendarioCitas/RangoFechas";
import FotoActivoSoliTabs from "../FotoActivoSoliTabs";
import MascotasTab from "../MascotasTab";

const EducadorSolicitudesTab = () => {
    return (
        <View className="pb-10 relative shadow-2xl shadow-black mb-28 w-80 rounded-xl bg-lightnew items-center">
            <FotoActivoSoliTabs />
            <RangoFechas fechaServicio={"Fecha de la sesión"}/>
            <MascotasTab title={" a adiestrar:"}/>
            <ButtonsAcceptDeneg />
        </View>
    );
}
 
export default EducadorSolicitudesTab;