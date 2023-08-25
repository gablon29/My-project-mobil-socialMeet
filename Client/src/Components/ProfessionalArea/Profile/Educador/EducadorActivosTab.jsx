import { View } from "react-native";
import FotoActivoSoliTabs from "../FotoActivoSoliTabs";
import RangoFechas from "../CalendarioCitas/RangoFechas";
import MascotasTab from "../MascotasTab";
import ButtonGestionarReserva from "../ButtonGestinarReserva";

const EducadorActivosTab = ({item}) => {

    const { name, dateRange, mascotas} = item;
    const date = dateRange.start

    return (
        <View className="pb-10 relative shadow-2xl shadow-black mb-28 w-80 rounded-xl bg-lightnew items-center">
            <FotoActivoSoliTabs />
            <RangoFechas fechaServicio={date} name={name}/>
            <MascotasTab title={" a adiestrar:"} mascotas={mascotas}/>
            <ButtonGestionarReserva item={item}/>
        </View>
    );
}
 
export default EducadorActivosTab;