import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { GetDataAllProfessional, UpdateRequestProfessional } from "../../../../metodos/professionalMetodos";
import { setAllProfessionals, setErrorProfessional, setLoadingProffesional, setProfessional} from "../../../../Redux/ReducerProffesional";

const DisplayTabsCalender = () => {
    const dispatch = useDispatch();
    const { profession, userProfessional } = useSelector((state) => state?.ReducerProfessional);
    const { request_active } = userProfessional;

    const filterActiveTrue = request_active.filter(item=>item.active);
    const filterActiveFalse = request_active.filter(item=>!item.active);
    
    const aceptarOno = async (whatIf, body) => {
        if (whatIf === "aceptar") {
            await UpdateRequestProfessional({
                body,
                loading: (l)=> dispatch(setLoadingProffesional(l)),
                error: (msg)=> dispatch(setErrorProfessional(msg)),
                success: (r)=> (dispatch(setProfessional(r)))
            });
            await GetDataAllProfessional({
                loading: (v) => dispatch(setLoadingProffesional(v)),
                error: (msg) => dispatch(setErrorProfessional(msg)),
                success: (res) => {dispatch(setAllProfessionals(res.payload))}
              });
              
        } else {
            console.log("Logica para denegar solicitud")
        }
    }

    const [tab,setTab] = useState(true);

    return (
        <View className="w-11/12 mt-10 items-center justify-center">
            <View className="w-full flex-row border-b border-black justify-evenly">
                <Button onPress={()=>setTab(true)} title={"Activos"} titleClass={`text-base ${tab ? "text-naranja" : ""}`} buttonClass={`w-24 items-center justify-center pb-3 border-b-2 ${tab ? "border-black" : "border-transparent"}`}/>
                <View className="relative">
                    <View className="absolute bg-naranja rounded-full w-5 h-5 justify-center items-center -right-2 -top-3"><Text className="text-white">{filterActiveFalse.length}</Text></View>
                    <Button onPress={()=>setTab(false)} title={"Solicitudes"} titleClass={`text-base ${!tab ? "text-naranja" : ""}`} buttonClass={`w-24 items-center justify-center pb-3 border-b-2 ${!tab ? "border-black" : "border-transparent"}`}/>
                </View>
            </View>
            <View className="pt-20 w-screen items-center">
            {profession === "cuidador" && (
                tab ? (<>{filterActiveTrue.map((item, index)=>(<CuidadorActivosTab key={index} item={item}/>))}</>)
                :(<>{filterActiveFalse.map((item, index)=>( <CuidadorSolicitudesTab aceptarOno={aceptarOno} item={item} key={index} />))}</>))}
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