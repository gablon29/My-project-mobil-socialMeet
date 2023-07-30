import { View, Text, Image } from "react-native";
import panda from "../../../images/dropDownMenu/pandaMoney.png";
import Button from "../Buttons/ButtonCuston";
import { useNavigation } from "@react-navigation/native";

const DisplayProfessionalArea = () => {

    const navigate = useNavigation()

    return (
        <View className="items-center pt-10 bg-white h-full">
            <View className="w-scree items-center">
                <Text className="uppercase font-semibold text-2xl mb-5">Área profesional</Text>
                <Text className="text-base font-semibold">Registra hoy tus servicios y comienza a</Text>
                <Text className="font-semibold text-naranja text-base">¡Ganar dinero con Whopaws!</Text>
            </View>
                <Image 
                    source={panda}
                    className="w-52 h-48 my-10"
                />
            <Button 
                title={"Acceder"}
                titleClass={"text-naranja font-bold text-base"}
                buttonClass={"bg-white border-2 border-naranja mb-10 w-64 h-14 rounded-2xl items-center justify-center"}
                onPress={()=>navigate.navigate("AccessProfessionalArea", {register: false, text: `Accede a tu área${"\n"}profesional`})}
            />
            <Button 
                title={"Comenzar"}
                titleClass={"text-white font-bold text-base"}
                buttonClass={"bg-celeste w-64 h-14 rounded-2xl items-center justify-center"}
                onPress={()=>navigate.navigate("RegisterProfessional", {register: true, text: `Selecciona un área${"\n"}profesional`})}
            />
        </View>
    );
}
 
export default DisplayProfessionalArea;