import { FlatList, Text, View } from "react-native";

const FechasPasear = () => {
    return (
        <View className="w-11/12">
            <Text className="font-poppinsSemiBold text-lg mb-3">Fechas a pasear</Text>
            {[1,2].map(({item, index})=>(<Text key={index} className="font-poppins my-3 text-base">00/00/0000 - 00:00 a 00:00</Text>))}
        </View>
    );
}
 
export default FechasPasear;