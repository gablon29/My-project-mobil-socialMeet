import { ScrollView, View } from "react-native";
import SelectProfessionalArea from "../SelectProfessionalArea";
import { useState } from "react";
import Politics from "./Politics";

const RegisterProfessional = ({route}) => {
    const {register, text} = route.params;
    const [render, setRender] = useState(1);
    return (
        <ScrollView className="bg-white">
            <View>
                {render === 1 && <SelectProfessionalArea register={register} text={text} setRender={setRender} render={render}/>}
                {render === 2 && <Politics />}
            </View>
        </ScrollView>
    );
}
 
export default RegisterProfessional;