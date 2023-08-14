import { View } from "react-native";
import RangoFechas from "../CalendarioCitas/RangoFechas";
import { useNavigation } from "@react-navigation/native";
import MascotasTab from "../MascotasTab";
import PeluqueroServicios from "./PeluqueroServicios";
import ButtonsAcceptDeneg from "../ButtonsAcceptDeneg";
import FotoActivoSoliTabs from "../FotoActivoSoliTabs";

const PeluqueroActivosTab = ({index}) => {

    const navigate = useNavigation();

    return (
        <View key={index} className="relative shadow-2xl shadow-black mb-28 w-80 rounded-xl bg-lightnew items-center">
            <FotoActivoSoliTabs />
            <RangoFechas />
            <MascotasTab />
            <PeluqueroServicios />
            <ButtonsAcceptDeneg />
        </View>
    );
}
 
export default PeluqueroActivosTab;