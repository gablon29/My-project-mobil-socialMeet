import { View } from "react-native";
import { useSelector } from "react-redux";
import EspecieMascota from "../Pets/Create/EspecieMascota";
import { usePets } from "../../CustomHooks/usePets";
import { useState } from "react";
import Button from "../Buttons/ButtonCuston";
import { useNavigation } from "@react-navigation/native";

const SelectSpice = ( ) => {
    const navigate = useNavigation();

    const { pet, setSpecie } = usePets(); //debe llegar por props para que lo admita el crear editar mascota etc
    const [valida, setValida] = useState(true);

    console.log(pet)

    return (
        <View className="w-screen h-full bg-white items-center">
            <EspecieMascota setSpecie={setSpecie} specie={pet.specie} setValida={setValida} title={"Selecciona una especie"}/>
            <Button 
                    buttonClass={"mt-5 bg-naranja w-56 h-12 rounded-2xl items-center justify-center"}
                    title={"Siguiente"}
                    titleClass={"text-white font-semibold text-base"}
                    onPress={()=>navigate.navigate("Home")}
                    dissable={pet.specie === "" ? false : true}
                />
        </View>
    );
}
 
export default SelectSpice;