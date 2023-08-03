import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Button from "../../Buttons/ButtonCuston";
import EspecieMascota from "../../Pets/Create/EspecieMascota";
import { usePets } from "../../../CustomHooks/usePets";

const SelectSpice = ({title, text, multiple, setRender, setMascotaCuidar, lugarAtencion, tipo}) => {
    const navigate = useNavigation();
    console.log(lugarAtencion)
    const { pet, setSpecie } = usePets(); //debe llegar por props para que lo admita el crear editar mascota etc
    const [valida, setValida] = useState(false);
    
    const nextStep = () => {
        setMascotaCuidar(pet.specie);
        setRender(8)
        /* if(tipo === "Cuidador") {
            setRender(8);
        } else if(tipo === "Peluquero") {
            setRender(18);
        } */
    }

    return (
        <View className="w-screen h-full bg-white items-center py-10">
            <EspecieMascota tipo={tipo} multiple={multiple} setSpecie={setSpecie} specie={pet.specie} setValida={setValida} title={title ? title : "Selecciona una especie"} text={text}/>
            {<Button
                    buttonClass={"mt-5 bg-naranja w-56 h-12 rounded-2xl items-center justify-center"}
                    title={"Siguiente"}
                    titleClass={"text-white font-semibold text-base"}
                    onPress={()=>nextStep()}
                    dissable={multiple ? valida : pet.specie === "" ? false : true}
                />}
        </View>
    );
}
 
export default SelectSpice;