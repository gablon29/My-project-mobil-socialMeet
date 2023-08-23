import { View, Text } from "react-native";
import Button from "../../Buttons/ButtonCuston";

const ButtonsAcceptDeneg = ({aceptarOno, item}) => {
    return (
        <View className="w-11/12 py-5">
            <View className="flex-row justify-between">
                <Button onPress={()=>aceptarOno("aceptar", item)} title={"Aceptar"} titleClass={`font-poppinsSemiBold text-sm`} buttonClass={`shadow-md shadow-black items-center justify-center bg-verde rounded-lg w-32 h-9`}/>
                <Button onPress={()=>aceptarOno("denegar", item)} title={"Denegar"} titleClass={`font-poppinsSemiBold text-sm`} buttonClass={`shadow-md shadow-black items-center justify-center bg-naranjaClaro rounded-lg w-32 h-9`}/>
            </View>
            <Text className="mt-5 text-center font-poppins text-sm">Una vez confirmados se abrirá una {"\n"} conversación con el usuario</Text>
        </View>
    );
}
 
export default ButtonsAcceptDeneg;