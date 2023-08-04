import { Image, ScrollView, Text, View } from "react-native";
import educador from "../../../images/dropDownMenu/educadores.png";
import veterinario from "../../../images/dropDownMenu/veterinarios.png";
import tienda from "../../../images/dropDownMenu/marketPlace.png";
import cuidadores from "../../../images/dropDownMenu/cuidadores.png";
import paseadores from "../../../images/dropDownMenu/paseadores.png";
import peluqueros from "../../../images/dropDownMenu/peluqueros.png";
import Button from "../Buttons/ButtonSquareImageTextBorderBlack";
import Btn from "../Buttons/ButtonCuston";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const SelectProfessionalArea = ({register, text, setRender, render, setTipo}) => {
    
	const navigation = useNavigation()

    const areas = [{name:"Educadores", img: educador}, {name: "Veterinario", img: veterinario}, {name: "Tienda", img: tienda}, {name:"Cuidador", img: cuidadores}, {name: "Paseador", img: paseadores}, {name: "Peluquero", img: peluqueros}]
    const [btnActive, setBtnActive] = useState(areas.map(()=>false));
    
    const handleBtnActive = (index) => {
			if(!register){
				navigation.navigate('ProfessionalProfile', {profession: areas[index].name})
			}
        const updateBtnActive = btnActive.map((state, i)=> i == index);
        setBtnActive(updateBtnActive);
        setTipo(areas[index].name); //De esta manera guarda en un obj la opción escojida
    }

    return (
        <ScrollView className="bg-white">
            <View className="bg-white items-center h-full pb-10">
            <Text className="my-10 text-2xl font-semibold text-center">{text}</Text>
            <View className="mt-10 w-11/12 gap-5 flex-wrap flex-row justify-center">
                {
                    areas.map((area, index)=>(
                        <View key={index}>
                        <Button 
                           imagen={area.img}
                           texto={area.name}
                           textClass={"font-semibold text-sm text-center mt-1"}
                           activado={btnActive[index]}
                           onPress={()=>handleBtnActive(index)}
                        />
                        </View>
                    ))
                }
            </View>
            {
                register && 
                <Btn 
                    title={"Siguiente"}
                    titleClass={"text-naranja font-bold text-base"}
                    buttonClass={"mt-10 bg-white border-2 border-naranja w-64 h-14 rounded-2xl items-center justify-center"}
                    dissable={btnActive.includes(true)}
                    onPress={()=>setRender(render + 1)}
                />
            }
            </View>
        </ScrollView>
        
    );
}
 
export default SelectProfessionalArea;