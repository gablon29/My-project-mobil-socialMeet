import { Text, View } from "react-native";
import RangoFechas from "../CalendarioCitas/RangoFechas";
import Button from "../../../Buttons/ButtonCuston";
import ButtonsAcceptDeneg from "../ButtonsAcceptDeneg";
import FotoActivoSoliTabs from "../FotoActivoSoliTabs";

const CuidadorSolicitudesTab = ({index}) => {

    return (
        <View key={index} className="relative shadow-2xl shadow-black mb-28 w-80 rounded-xl bg-lightnew items-center">
        <FotoActivoSoliTabs />
        <RangoFechas />
        <View className="p-4 bottom-0 w-full justify-center">
            <Text className="font-poppinsSemiBold text-lg">Mascotas a cuidar</Text>
            <View className="w-full">
            {[1, 2].map((item, index) => (
                <View key={index} className="flex-row w-full items-center p-3">
                    <View className="rounded-full w-7 h-7 bg-black"></View>
                    <Text className="mx-4 font-poppins">Especie | Raza | Edad</Text>
                    <Button title={'Ver perfil'} titleClass={`underline font-poppinsSemiBold`} />
                </View>
            ))}
            </View>
        </View>
        <ButtonsAcceptDeneg />
        </View>
    );
};

export default CuidadorSolicitudesTab;
