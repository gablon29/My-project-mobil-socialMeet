import { Image, Text, TouchableOpacity, View } from "react-native";
import cruz from '../../../../images/iconos/cruz.png';
import { useImage } from "../../../CustomHooks/useImage";
import Btn from "../../Buttons/ButtonCuston";
import { useEffect } from "react";

const AddPicture = ({data, setRender, setFo, fotoDoc}) => {
    const {url, setUrl, uploadImage} = useImage();

    const nextStep = (url) => {
        url === undefined ? null : setFo(url);
        setRender(9)
    }

    const dissableBtn = () => {
        setFo(url);
        if(fotoDoc === ""){ return false} else {return true}
    }

    return (
        <View className="h-full bg-white items-center py-10">
            <Text className="text-2xl font-bold mb-5">Añáde una imagen de perfil</Text>
            <Text className="font-bold text-center">Esto ayudará a los usuarios a {"\n"} conocerte mejor y darles confianza</Text>
            <TouchableOpacity className="my-10 flex justify-center items-center rounded-full bg-new w-40 h-40" onPress={() => {uploadImage()}}>
                <Image source={{uri:url || data?.profilePic}} style={{ width: 160, height: 160 }} className="rounded-full" />
            </TouchableOpacity>
            <Btn 
                title={"Ahora no, saltar este paso"} titleClass={"mb-20 text-base underline font-semibold"}
                onPress={()=>nextStep(data?.profilePic)}
            />
            <Btn 
                title={"Siguiente"}
                titleClass={"text-naranja font-bold text-base"}
                buttonClass={"bg-white border-2 border-naranja mb-10 w-64 h-14 rounded-2xl items-center justify-center"}
                onPress={()=>nextStep()}
                dissable={dissableBtn()}
            />
        </View>
    );
}
 
export default AddPicture;