import { Text, View } from "react-native";
import RangoFechas from "../CalendarioCitas/RangoFechas";
import ButtonGestionarReserva from "../ButtonGestinarReserva";

const CuidadorActivosTab = ({index}) => {

    return (
        <View key={index} className="relative shadow-2xl shadow-black mb-28 w-80 h-56 rounded-xl bg-lightnew">
            <View className="absolute -left-3 -top-10 w-24 h-24 bg-new rounded-full border-[7px] border-white"></View>
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