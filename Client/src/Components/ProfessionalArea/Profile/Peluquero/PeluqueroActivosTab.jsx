import { View } from "react-native";
import RangoFechas from "../CalendarioCitas/RangoFechas";
import { useNavigation } from "@react-navigation/native";
import PeluqueroMascotasTab from "./PeluqueroMascotasTab";
import PeluqueroServicios from "./PeluqueroServicios";
import ButtonsAcceptDeneg from "../ButtonsAcceptDeneg";

const PeluqueroActivosTab = ({index}) => {

    const navigate = useNavigation();

    return (
        <View key={index} className="relative shadow-2xl shadow-black mb-28 w-80 rounded-xl bg-lightnew items-center">
            <View className="absolute -left-3 -top-10 w-24 h-24 bg-new rounded-full border-[7px] border-white"></View>
            <RangoFechas />
            <PeluqueroMascotasTab />
            <PeluqueroServicios />
            <ButtonsAcceptDeneg />
        </View>
    );
}
 
export default PeluqueroActivosTab;