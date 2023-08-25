import { Text, View } from "react-native";

const PeluqueroServicios = ({servicios}) => {
    return (
        <View className="w-11/12">
            <Text className="font-poppinsBold text-xl mb-5">Servicios:</Text>
            {
                servicios.map((item, index)=>(
                    <Text key={index} className="my-4 font-poppinsSemiBold text-base">{item}</Text>
                ))
            }
        </View>
    );
}
 
export default PeluqueroServicios;