import { Text, View } from "react-native";
import Button from "../../Buttons/ButtonCuston";

const MascotasTab = ({title, mascotas}) => {
    return (
        <View className="w-11/12 my-10">
            <Text className="font-poppinsSemiBold text-lg">Mascotas{title ? title : ":"}</Text>
            {
                mascotas.map((item, index)=>(
                    <View key={index} className="flex-row justify-between items-center my-2">
                        <View className="flex-row items-center">
                            <View className="rounded-full bg-black h-8 w-8 "></View>
                            <Text className="ml-2 text-sm font-poppins">{item.especie} | {item.raza} | {item.edad}</Text>
                        </View>
                        <Button title={"Ver perfil"} titleClass={`underline font-poppinsSemiBold`} buttonClass={``}/>
                    </View>
                ))
            }
        </View>
    );
}
 
export default MascotasTab;