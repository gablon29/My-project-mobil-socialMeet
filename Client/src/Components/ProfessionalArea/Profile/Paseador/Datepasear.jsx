import { FlatList, Text, View } from "react-native";

const Datepasear = ({fechasPasear}) => {

    return (
      <View className="w-11/12">
        <Text className="font-poppinsSemiBold text-lg mb-3">Fechas a pasear</Text>
        {fechasPasear.map((item, index) => (
          <Text key={index} className="font-poppins my-3 text-base">
            {item}
          </Text>
        ))}
      </View>
    );
}
 
export default Datepasear;