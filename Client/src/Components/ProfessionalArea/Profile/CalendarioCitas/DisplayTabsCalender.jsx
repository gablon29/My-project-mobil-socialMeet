import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../../Buttons/ButtonCuston";
import { Text, View } from "react-native";
import CuidadorActivosTab from "../Cuidador/CuidadorActivosTab";
import CuidadorSolicitudesTab from "../Cuidador/CuidadorSolicitudesTab";
import PeluqueroActivosTab from "../Peluquero/PeluqueroActivosTab";
import PeluqueroServicios from "../Peluquero/PeluqueroServicios";
import PeluqueroSolicitudesTab from "../Peluquero/PeluqueroSolicitudesTab";
import PaseadorActivosTab from "../Paseador/PaseadorActivosTab";
import PaseadorSolicitudesTab from "../Paseador/PaseadorSolicitudesTab";
import EducadorActivosTab from "../Educador/EducadorActivosTab";
import EducadorSolicitudesTab from "../Educador/EducadorSolicitudesTab";

const DisplayTabsCalender = () => {
    const profession = useSelector((state) => state?.ReducerProfessional?.profession);

    console.log(profession)
    const [tab,setTab] = useState(true);

    return (
        <View className="w-11/12 mt-10 items-center justify-center">
            <View className="w-full flex-row border-b border-black justify-evenly">
                <Button onPress={()=>setTab(true)} title={"Activos"} titleClass={`text-base ${tab ? "text-naranja" : ""}`} buttonClass={`w-24 items-center justify-center pb-3 border-b-2 ${tab ? "border-black" : "border-transparent"}`}/>
                <View className="relative">
                    <View className="absolute bg-naranja rounded-full w-5 h-5 justify-center items-center -right-2 -top-3"><Text className="text-white">3</Text></View>
                    <Button onPress={()=>setTab(false)} title={"Solicitudes"} titleClass={`text-base ${!tab ? "text-naranja" : ""}`} buttonClass={`w-24 items-center justify-center pb-3 border-b-2 ${!tab ? "border-black" : "border-transparent"}`}/>
                </View>
            </View>
            <View className="pt-20 w-screen items-center">
            {profession === "cuidador" && (
                tab ? (<>{[1,2].map((item, index)=>(<CuidadorActivosTab key={index} />))}</>)
                :(<>{[1,2].map((item, index)=>( <CuidadorSolicitudesTab key={index} />))}</>))}
            {profession === "peluquero" && (
                tab ? (<>{[1,2].map((item, index)=><PeluqueroActivosTab key={index} />)}</>) 
                :(<>{[1,2].map((item,index)=>(<PeluqueroSolicitudesTab key={index} />))}</>)
            )}
            {profession === "paseador" && (
                tab ? (<>{[1,2].map((item,index)=>(<PaseadorActivosTab key={index} />))}</>)
                : (<>{[1,2].map((item,index)=>(<PaseadorSolicitudesTab key={index} />))}</>)
            )}
            {profession === "educador" && (
                tab ? (<>{[1,2].map((item,index)=>(<EducadorActivosTab key={index} />))}</>) 
                : (<>{[1,2].map((item, index)=>(<EducadorSolicitudesTab key={index} />))}</>)
            )}
            </View>
        </View>
    );
}
 
export default DisplayTabsCalender;