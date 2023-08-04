import { Text, View, Image } from "react-native";
import Btn from "../../Buttons/ButtonCuston"
import { useState } from "react";

const RecordMode = ({setModalidad, setRender}) => {

    const [btnActive, setBtnActive] = useState("")

    const activeBtn = (mode) => {
        setBtnActive(mode);
        mode === "clinic" ? setModalidad("clinica") : setModalidad("autonomo");
    };

    return (
        <View className="h-full w-screen items-center mt-20 ">
            <Text className="text-2xl font-bold mb-20">Selecciona una modalidad</Text>
            <View className="w-screen h-24 flex-row items-center justify-evenly">
                <Btn 
                    title={`Clínica ${"\n"} veterinaria`}
                    titleClass={"font-bold text-center text-xs"}
                    buttonClass={`${btnActive == "clinic" ? "border-2 border-balck" : ""} rounded-full bg-new w-24 h-24 items-center justify-center`}
                    onPress={()=>activeBtn("clinic")}
                />
                <Btn 
                    title={`Veterinario ${"\n"} autónomo`}
                    titleClass={"font-bold text-center text-xs"}
                    buttonClass={`${btnActive == "autonomo" ? "border-2 border-balck" : ""} rounded-full bg-new w-24 h-24 items-center justify-center`}
                    onPress={()=>activeBtn("autonomo")}
                />
            </View>
            <Btn 
                title={"Siguiente"}
                titleClass={"text-naranja font-bold text-base"}
                buttonClass={"mt-32 bg-white border-2 border-naranja w-64 h-14 rounded-2xl items-center justify-center"}
                dissable={btnActive != ""}
                onPress={()=>setRender(4)}
            />
        </View>
    );
}
 
export default RecordMode;