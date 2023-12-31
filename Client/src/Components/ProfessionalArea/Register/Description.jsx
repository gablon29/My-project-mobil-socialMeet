import { Text, TextInput, View } from "react-native";
import Button from "../../Buttons/ButtonCuston";
import { useEffect } from "react";


const Description = ({data, description, setRender, setDescription, registerProfessional, id}) => {

    useEffect(()=>{
        setDescription(data.description)
    },[])

    const nextStep = () => {
        registerProfessional(id);
        setRender(21)
    }

    return (
        <View className="w-screen items-center py-5">
            <Text className="text-2xl font-bold text-center mb-5">Crea una descripción {"\n"} resumida sobre ti</Text>
            <TextInput 
                multiline
                textAlignVertical="top"
                placeholder="Escribe una presentación"
                defaultValue={data?.description}
                numberOfLines={12}
                className="bg-new rounded-xl w-10/12 p-3"
                onChangeText={(text)=>setDescription(text)}
            />
            <Button title={"Ahora no, saltar este paso"} titleClass={"my-5 text-base underline font-semibold"}
                onPress={()=>nextStep()}
            />
             <Button
                title={"Siguiente"}
                titleClass={"text-naranja font-bold text-base"}
                buttonClass={"bg-white mt-10 border-2 border-naranja mb-10 w-64 h-14 rounded-2xl items-center justify-center"}
                onPress={()=>nextStep()}
                dissable={description === "" || description === undefined ? false : true}
            />
        </View>
    );
}
 
export default Description;