import { Text, View } from "react-native";
import RangoFechas from "../CalendarioCitas/RangoFechas";
import Button from "../../../Buttons/ButtonCuston";
import ButtonsAcceptDeneg from "../ButtonsAcceptDeneg";
import FotoActivoSoliTabs from "../FotoActivoSoliTabs";

const CuidadorSolicitudesTab = ({item, aceptarOno}) => {

    const {dateRange, mascotas, name} = item;
    const formatDate = `${dateRange.start} ${dateRange.end}`;

    return (
        <View className="relative shadow-2xl shadow-black mb-28 w-80 rounded-xl bg-lightnew items-center">
        <FotoActivoSoliTabs />
        <RangoFechas fechaServicio={formatDate} name={name}/>
        <View className="p-4 bottom-0 w-full justify-center">
            <Text className="font-poppinsSemiBold text-lg">Mascotas a cuidar</Text>
            <View className="w-full">
            {mascotas.map((item, index) => (
                <View key={index} className="flex-row w-full items-center p-3">
                    <View className="rounded-full w-7 h-7 bg-black"></View>
                    <Text className="mx-4 font-poppins">{item.especie} | {item.raza} | {item.edad}</Text>
                    <Button title={'Ver perfil'} titleClass={`underline font-poppinsSemiBold`} />
                </View>
            ))}
            </View>
        </View>
        <ButtonsAcceptDeneg aceptarOno={aceptarOno} item={item}/>
        </View>
    );
};

export default CuidadorSolicitudesTab;
