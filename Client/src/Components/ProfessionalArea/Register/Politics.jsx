import { Text, View } from "react-native";
import Btn from "../../Buttons/ButtonCuston";

const Politics = ({setRender, render}) => {
    return (
        <View className="items-center h-full bg-white mt-20">
            <Text className="my-10 text-2xl font-bold text-center">Políticas de uso</Text>
            <Text className="text-center w-8/12 leading-8 text-base mb-10">Antes de comenzar tu registro como profesional, debes aceptar nuestras políticas de uso para tener un buen entorno entre profesionales y clientes.</Text>
            <View className="flex-row items-baseline">
                <Text className="text-base relative">Puedes leer las políticas haciendo</Text>
                <Btn 
                    title={"click aquí"}
                    titleClass={"underline"}
                    buttonClass={"ml-1"}
                />
            </View>
            <Btn 
                title={"Aceptar y continuar"}
                titleClass={"text-white font-bold text-base"}
                buttonClass={"mt-16 bg-naranja w-64 h-14 rounded-2xl items-center justify-center"}
                onPress={()=>setRender(3)}
            />
        </View>
    );
}
 
export default Politics;