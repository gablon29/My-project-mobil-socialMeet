import { useNavigation } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import Button from "../../Buttons/ButtonCuston";
import dog from "../../../../images/dropDownMenu/happyDog.png";

const AccountAccepted = ({tipo, lugarAtencion, mascotasCuidar, fotoDoc, fechaNacimiento, description}) => {
    const body = JSON.stringify({tipo, lugarAtencion, mascotasCuidar, fotoDoc, fechaNacimiento, description});
    console.log(body);
    
    const navigate = useNavigation();
    return (
        <View className="h-full items-center py-10">
            <Text className="text-center text-2xl font-bold">{`¡Tu cuenta como ${"\n"} ${tipo} a sido aceptada!`}</Text>
            <Image source={dog} className="w-[161px] h-[145px] my-5"/>
            {tipo === "Veterinario" && <Text className="text-base mb-4">Accede con tu PC a la siguiente web:</Text>}
            {tipo === "Veterinario" && <Button title={"vet.whopaws.com"} titleClass={"text-base font-semibold"}/>}
            <Text className="text-center my-5">
                {
                    tipo === "Veterinario" ?
                    `Inicia sesión con tus credenciales y ${"\n"} continúa configurando y gestionando ${"\n"} tu cuenta de profesional.`
                    :
                    `Accede a tu perfil profesional y sigue ${"\n"} configurando aspectos importantes ${"\n"} como precios, características de tu ${"\n"} servicio y mucho más.`
                }
            </Text>
            <Button
                title={"Volver a Inicio"}
                titleClass={"text-naranja font-bold text-base"}
                buttonClass={"bg-white border-2 border-naranja mb-10 w-64 h-14 rounded-2xl items-center justify-center"}
                onPress={()=>navigate.navigate("Home")}
            />
            {
                tipo != "Veterinario" &&
                <Button
                title={"Acceder a mi perfil"}
                titleClass={"text-white font-bold text-base"}
                buttonClass={"bg-celeste w-64 h-14 rounded-2xl items-center justify-center"}
                onPress={()=>navigate.navigate("Home")}
            />
            }
        </View>
    );
}
 
export default AccountAccepted;