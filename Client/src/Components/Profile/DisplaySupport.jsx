import { View, Text, FlatList, ScrollView } from "react-native";
import Button from "../Buttons/Button"
import { useNavigation } from "@react-navigation/core";

const DisplaySupport = () => {
    const navigation = useNavigation();

    const data = [
        {
            title: "Prueba",
            date: "01/02/23"
        },
        {
            title: "Prueba 2",
            date: "01/02/23"
        },
        {
            title: "Prueba 3",
            date: "01/02/23"
        },
        {
            title: "Prueba 4",
            date: "01/02/23"
        },
        {
            title: "Prueba 4",
            date: "01/02/23"
        },
        {
            title: "Prueba 4",
            date: "01/02/23"
        },
        {
            title: "Prueba 4",
            date: "01/02/23"
        },
        {
            title: "Prueba 4",
            date: "01/02/23"
        },
    ]

    const renderTicket = ({item, index}) => {
        const bgClass = index % 2 === 0 ? "bg-naranja" : "bg-black";
        const textColor = index % 2 === 0 ? "text-black" : "text-white";
        const classTicketContainer = `w-full h-146 mb-5 bg-naranja rounded-xl flex-row justify-between p-5 ${bgClass}`
        const classTextDate = `${textColor}`
        return (
        <View className={classTicketContainer}>
            <View>
                <Text className="text-white font-poppins font-semibold text-xs">{item.title}</Text>
                <Text className={classTextDate}>{item.date}</Text>
            </View>
            <Button 
                title="Ver Ticket"
                colorButton="bg-white"
                ancho="w-32"
                alto="h-8"
                textSize="text-sm"
                shadow="shadow-lg shadow-black"
            />
        </View>)
    }

    return (
        <ScrollView>
            <View className="w-screen h-full items-center mt-10">
                <Text className="font-bold text-xl font-poppins">Tickets de soporte</Text>
                <Button 
                    title="Abrir un nuevo Ticket"
                    colorButton="bg-black"
                    colorText="text-white"
                    ancho="w-8/12"
                    alto="h-14"
                    margin="my-10"
                    onPress={()=>{navigation.navigate("AddNewTicket")}}
                />
                <View className="w-10/12 mt-5">
                    <FlatList 
                        data={data}
                        renderItem={(item, index)=>renderTicket(item, index)}
                        keyExtractor={(item, index)=>index.toString()}
                    />
                </View>
            </View>
        </ScrollView>
    );
}
 
export default DisplaySupport;