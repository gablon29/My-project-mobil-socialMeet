import { ScrollView, View } from "react-native";
import SelectProfessionalArea from "../SelectProfessionalArea";
import { useEffect, useState } from "react";
import Politics from "./Politics";
import RecordMode from "./RecordMode";
import FormRegister from "./FormRegister";

const RegisterProfessional = ({route}) => {
    const {register, text} = route.params;
    const [render, setRender] = useState(1);

    return (
        <ScrollView className="bg-white">
            <View>
                {render === 1 && <SelectProfessionalArea setData={setData} data={data} register={register} text={text} setRender={setRender} render={render}/>}
                {render === 2 && <Politics setRender={setRender} render={render}/>}
                {render === 3 && <RecordMode />} {/* Debe entrar aquí solo si escoje veterinario en la seleccion de area profesional */}
                {render === 4 && <FormRegister />}
            </View>
        </ScrollView>
    );
}
 
export default RegisterProfessional;