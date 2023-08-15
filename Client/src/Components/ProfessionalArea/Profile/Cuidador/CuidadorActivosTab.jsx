import { Text, View } from "react-native";
import RangoFechas from "../CalendarioCitas/RangoFechas";
import ButtonGestionarReserva from "../ButtonGestinarReserva";
import FotoActivoSoliTabs from "../FotoActivoSoliTabs";

const CuidadorActivosTab = () => {

    return (
        <View className="relative shadow-2xl shadow-black mb-28 w-80 h-56 rounded-xl bg-lightnew">
            <FotoActivoSoliTabs />
            <RangoFechas />
            <View className="p-4 bottom-3 w-full justify-center">
                <Text className="font-semibold text-lg">Mascotas a cuidar</Text>
                <Text className="text-sm font-poppins">1 Gato | 1 Perro</Text>
            </View>
            <ButtonGestionarReserva />
        </View>
    );
}
 
export default CuidadorActivosTab;