import { Text, View } from "react-native";
import RangoFechas from "../CalendarioCitas/RangoFechas";
import FotoActivoSoliTabs from "../FotoActivoSoliTabs";
import Button from "../../../Buttons/ButtonCuston";

const CuidadorGestionarReserva = () => {
  return (
    <View className="relative mt-10 shadow-2xl shadow-black w-80 rounded-xl bg-lightnew">
      <FotoActivoSoliTabs />
      <RangoFechas fechaServicio={"Desde 00/00/00 hasta 00/00/00"}/>
      <View className="p-4 bottom-3 w-full justify-center">
        <Text className="font-semibold text-lg my-5">Mascotas a cuidar</Text>
        <View className="flex-row flex-wrap">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <View key={index} className="items-center justify-center w-[50%]">
              <View className="rounded-full w-11 h-11 bg-black"></View>
              <Text className="font-poppinsSemiBold text-sm mt-2">Nombre</Text>
              <Button title={'Ver perfil'} titleClass={`text-black font-poppins text-xs font-medium`} buttonClass={`mt-5 mb-10 bg-new rounded-lg w-[90px] h-5 justify-center items-center`} />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default CuidadorGestionarReserva;
