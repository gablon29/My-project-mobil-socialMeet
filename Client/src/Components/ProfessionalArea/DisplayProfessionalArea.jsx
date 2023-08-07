import { View, Text, Image, ScrollView } from "react-native";
import panda from "../../../images/dropDownMenu/pandaMoney.png";
import Button from "../Buttons/ButtonCuston";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetDataAllProfessional } from '../../metodos/professionalMetodos';
import { setLoadingProffesional, setErrorProfessional, setAllProfessionals } from '../../Redux/ReducerProffesional';
import { ReloadAuthMethod } from "../../metodos/authMetodos";
import { setErrorAuth, setLoadingAuth, userRefresh } from "../../Redux/ReducerAuth";

const DisplayProfessionalArea = () => {

    const navigate = useNavigation();
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.ReducerAuth.profile);
    const professionals = useSelector((state)=> state.ReducerProfessional.userProfessionals);
    useEffect(()=>{
        const data = async() => {
            await ReloadAuthMethod({
                loading: (v) => dispatch(setLoadingAuth(v)),
                error: (msg) => dispatch(setErrorAuth(msg)),
                success: (res) => {
                  dispatch(userRefresh(res.payload));
                },
                
              });
            await GetDataAllProfessional({
                loading: (v) => dispatch(setLoadingProffesional(v)),
                error: (msg) => dispatch(setErrorProfessional(msg)),
                success: (res) => {dispatch(setAllProfessionals(res.payload))}
              });
        }
        data()
    },[])
    return (
        <ScrollView className="bg-white">
            <View className="items-center py-10 bg-white h-full">
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
                    onPress={()=>navigate.navigate("AccessProfessionalArea", {register: false, profile, professionals: professionals.professionals})}
                />
                <Button 
                    title={"Comenzar"}
                    titleClass={"text-white font-bold text-base"}
                    buttonClass={"bg-celeste w-64 h-14 rounded-2xl items-center justify-center"}
                    onPress={()=>navigate.navigate("RegisterProfessional", {register: true, profile, professionals: professionals.professionals })}
                />
            </View>
        </ScrollView>
    );
}
 
export default DisplayProfessionalArea;