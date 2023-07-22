import {  Image, ScrollView, Text, View } from "react-native";
import Button from "../../Buttons/Button"
import { useNavigation } from "@react-navigation/core";

const OrderReceived = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View className="w-screen h-full items-center bg-white">
                <Image
                    source={require("../../../../images/catFlyBox.png")}
                    className="w-40 h-40 mt-24"
                />
                <Text className="font-poppins font-bold text-naranja text-[32px] my-10">¡Pedido recibido!</Text>
                <Text className="text-center font-poppins font-medium text-[20px] mb-40 mx-3">Pronto recibirás tu nuevo chip Whopaws en la dirección indicada</Text>
                <Button onPress={()=>navigation.navigate("Home")} title="Volver a inicio" className="my-10" ancho="w-8/12" alto="h-16" colorButton="bg-black" colorText="text-white"/>
            </View>
        </ScrollView>
    );
}
 
export default OrderReceived;