import { Text, View } from "react-native";
import Button from "../../../Buttons/ButtonCuston";

const PeluqueroMascotasTab = () => {
    return (
        <View className="w-11/12 my-5">
            <Text className="font-poppinsSemiBold text-lg">Mascotas:</Text>
            {
                [1,2].map((item, index)=>(
                    <View key={index} className="flex-row justify-between items-center my-2">
                        <View className="flex-row items-center">
                            <View className="rounded-full bg-black h-8 w-8 "></View>
                            <Text className="ml-2 text-sm font-poppins">Especie | Raza | Edad</Text>
                        </View>
                        <Button title={"Ver perfil"} titleClass={`underline font-poppinsSemiBold`} buttonClass={``}/>
                    </View>
                ))
            }
        </View>
    );
}
 
export default PeluqueroMascotasTab;