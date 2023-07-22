import {  Image, ScrollView, Text, View } from "react-native";
import Button from "../../Buttons/Button"
import { useNavigation } from "@react-navigation/core";

const OrderNotReceived = () => {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View className="w-screen h-full items-center bg-white">
                <Image
                    source={require("../../../../images/dogsad.png")}
                    className="mt-24 w-[163] h-[169]"
                />
                <Text className="text-center font-poppins font-bold text-naranja text-[20px] my-10 w-80">¡Vaya! No hemos podido realizar el pedido</Text>
                <Text className="text-center font-poppins font-medium text-[15px] mb-40 mx-3">Comprueba que tienes saldo en la tarjeta indicada y vuelve a intentarlo</Text>
                <Button onPress={()=>navigation.navigate("ChipWhopaws")} title="Ir a Chip Whopaws" className="my-10" ancho="w-8/12" alto="h-16" colorButton="bg-black" colorText="text-white"/>
            </View>
        </ScrollView>
    );
}
 
export default OrderNotReceived;