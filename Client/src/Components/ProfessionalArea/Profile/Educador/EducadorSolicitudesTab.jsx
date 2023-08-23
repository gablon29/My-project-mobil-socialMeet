import { View } from "react-native";
import ButtonsAcceptDeneg from "../ButtonsAcceptDeneg";
import RangoFechas from "../CalendarioCitas/RangoFechas";
import FotoActivoSoliTabs from "../FotoActivoSoliTabs";
import MascotasTab from "../MascotasTab";

const EducadorSolicitudesTab = ({item, aceptarOno}) => {

    const { name, dateRange, mascotas} = item;
    const date = dateRange.start

    return (
        <View className="pb-10 relative shadow-2xl shadow-black mb-28 w-80 rounded-xl bg-lightnew items-center">
            <FotoActivoSoliTabs />
            <RangoFechas fechaServicio={date} name={name}/>
            <MascotasTab title={" a adiestrar:"} mascotas={mascotas}/>
            <ButtonsAcceptDeneg aceptarOno={aceptarOno} item={item}/>
        </View>
    );
}
 
export default EducadorSolicitudesTab;