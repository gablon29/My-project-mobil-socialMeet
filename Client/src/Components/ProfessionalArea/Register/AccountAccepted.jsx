import { useNavigation } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import Button from "../../Buttons/ButtonCuston";
import dog from "../../../../images/dropDownMenu/happyDog.png";

const AccountAccepted = () => {
    const navigate = useNavigation();
    return (
        <View className="h-full items-center py-10">
            <Text className="text-center text-2xl font-bold">Su cuenta está siendo {"\n"} verificada. Recibirás una {"\n"} notificación con el resultado.</Text>
            <Image source={dog} className="w-[161px] h-[145px] my-10"/>
            <Text className="text-base mb-4">Accede con tu PC a la siguiente web:</Text>
            <Button title={"vet.whopaws.com"} titleClass={"text-base font-semibold"}/>
            <Text className="text-center my-5">Inicia sesión con tus credenciales y {"\n"} continúa configurando y gestionando {"\n"} tu cuenta de profesional.</Text>
            <Button
                title={"Volver a Inicio"}
                titleClass={"text-naranja font-bold text-base"}
                buttonClass={"bg-white border-2 border-naranja mb-10 w-64 h-14 rounded-2xl items-center justify-center"}
                onPress={()=>navigate.navigate("Home")}
            />
        </View>
    );
}
 
export default AccountAccepted;