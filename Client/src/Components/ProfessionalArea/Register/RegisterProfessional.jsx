import { ScrollView, View } from "react-native";
import SelectProfessionalArea from "../SelectProfessionalArea";
import { useEffect, useState } from "react";
import Politics from "./Politics";
import RecordMode from "./RecordMode";
import FormRegister from "./FormRegister";
import { useProfesional } from "../../../CustomHooks/useProfesional";
import VerificationMessage from "./VerifyMessaje";

const RegisterProfessional = ({route}) => {
    const {register, text} = route.params;
    const [render, setRender] = useState(1);
    const {tipo, setTipo, modalidad, setModalidad, setNombre, nombre, country, setCountry, province, setProvince, city, setCity, address, setAddress, phone, setPhone, documento, setDocumento,      fotoDoc, setFo, mascotasCuidar, setMascotaCuidar, fechaNacimiento, setFechaNacimiento, modalidadNoVet, setModalidadNoVet, description, setDescription, onSubmit
    } = useProfesional();

    return (
        <ScrollView className="bg-white">
            <View>
                {render === 1 && <SelectProfessionalArea setTipo={setTipo} register={register} text={text} setRender={setRender} render={render}/>}
                {render === 2 && <Politics tipo={tipo} setRender={setRender} render={render}/>}
                {render === 3 && <RecordMode setModalidad={setModalidad} setRender={setRender}/>}
                {render === 4 && <FormRegister modalidad={modalidad} setRender={setRender} country={country} setCountry={setCountry} setProvince={setProvince} province={province}/>}
                {render === 5 && <VerificationMessage setRender={setRender}/>} 
            </View>
        </ScrollView>
    );
}
 
export default RegisterProfessional;