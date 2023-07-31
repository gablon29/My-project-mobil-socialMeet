import { Image, Text, View } from "react-native";
import dog from "../../../../images/dropDownMenu/dogMoneyFlower.png";
import Button from "../../Buttons/ButtonCuston";
import { useNavigation } from "@react-navigation/native";

const VerificationMessage = ({setRender}) => {
    const navigate = useNavigation();
    return (
        <View className="h-full items-center">
            <Text className="text-center text-2xl font-bold mt-10">Su cuenta está siendo {"\n"} verificada. Recibirás una {"\n"} notificación con el resultado.</Text>
            <Image source={dog} className="w-[253px] h-[178px] my-16"/>
            <Button 
                title={"Volver a inicio"}
                titleClass={"text-naranja font-bold text-base"}
                buttonClass={"bg-white border-2 border-naranja mb-10 w-64 h-14 rounded-2xl items-center justify-center"}
                onPress={()=>navigate.navigate("Home")}
            />
            <Button
                title={"Registrar otro servicio"}
                titleClass={"text-white font-bold text-base"}
                buttonClass={"bg-celeste w-64 h-14 rounded-2xl items-center justify-center"}
                onPress={()=>{setRender(1); navigate.navigate("RegisterProfessional", {register: true, text: `Selecciona un área${"\n"}profesional`})}}
            />
        </View>
    );
}
 
export default VerificationMessage;