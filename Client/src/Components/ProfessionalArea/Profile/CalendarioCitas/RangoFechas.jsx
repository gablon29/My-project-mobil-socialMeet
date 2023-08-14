import { Text, View } from "react-native";

const RangoFechas = ({fechaServicio}) => {
    return (
        <View className="pl-[100px] pt-4 w-full">
            <Text className="font-poppinsSemiBold text-lg">Nombre</Text>
            <Text className="text-xs font-poppins">{fechaServicio ? fechaServicio : "Desde 00/00/00 hasta 00/00/00"}</Text>
        </View>
    );
}
 
export default RangoFechas;