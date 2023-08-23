import { Text, View } from "react-native";
import RangoFechas from "../CalendarioCitas/RangoFechas";
import Button from "../../../Buttons/ButtonCuston";
import ButtonsAcceptDeneg from "../ButtonsAcceptDeneg";
import FotoActivoSoliTabs from "../FotoActivoSoliTabs";
import MascotasTab from "../MascotasTab";

const CuidadorSolicitudesTab = ({item, aceptarOno}) => {

    const {dateRange, mascotas, name} = item;
    const formatDate = `${dateRange.start} ${dateRange.end}`;

    return (
        <View className="relative shadow-2xl shadow-black mb-28 w-80 rounded-xl bg-lightnew items-center">
        <FotoActivoSoliTabs />
        <RangoFechas fechaServicio={formatDate} name={name}/>
        <MascotasTab mascotas={mascotas} title={"  a cuidar:"}/>
        <ButtonsAcceptDeneg aceptarOno={aceptarOno} item={item}/>
        </View>
    );
};

export default CuidadorSolicitudesTab;
