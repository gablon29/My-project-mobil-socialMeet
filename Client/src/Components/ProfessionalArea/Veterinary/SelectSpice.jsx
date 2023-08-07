import { View } from "react-native";
import { useState } from "react";
import Button from "../../Buttons/ButtonCuston";
import EspecieMascota from "../../Pets/Create/EspecieMascota";
import { usePets } from "../../../CustomHooks/usePets";

const SelectSpice = ({title, text, multiple, setRender, setMascotaCuidar, tipo, setProvince, setCountry, setCity}) => {

    const { pet, setSpecie } = usePets(); //debe llegar por props para que lo admita el crear editar mascota etc
    const [valida, setValida] = useState(false);
    
    const nextStep = () => {
        setMascotaCuidar(pet.specie);
        setCity("");
        setCountry("");
        setProvince("");
        setRender(8);
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