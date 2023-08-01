import { ScrollView, View } from "react-native";
import SelectProfessionalArea from "../SelectProfessionalArea";
import { useEffect, useState } from "react";
import Politics from "./Politics";
import RecordMode from "./RecordMode";
import FormRegister from "./FormRegister";
import { useProfesional } from "../../../CustomHooks/useProfesional";
import VerificationMessage from "./VerifyMessaje";
import EspecieMascota from "../../Pets/Create/EspecieMascota";
import SelectSpice from "../Veterinary/SelectSpice";

const RegisterProfessional = ({route}) => {
    const {register, text} = route.params;
    const [render, setRender] = useState(1);
    const {tipo, setTipo, modalidad, setModalidad, setNombre, nombre, country, setCountry, province, setProvince, city, setCity, address, setAddress, phone, setPhone, documento, setDocumento,      fotoDoc, setFo, mascotasCuidar, setMascotaCuidar, fechaNacimiento, setFechaNacimiento, modalidadNoVet, setModalidadNoVet, description, setDescription, onSubmit
    } = useProfesional();

    return (
        <ScrollView className="bg-white">
            <View className="h-full">
                {render === 1 && <SelectProfessionalArea tipo={tipo} title={"Selecciona una especie"} setTipo={setTipo} register={register} text={text} setRender={setRender} render={render}/>}
                {render === 2 && <Politics tipo={tipo} setRender={setRender} render={render}/>}
                {render === 3 && <RecordMode setModalidad={setModalidad} setRender={setRender}/>}
                {render === 4 && <FormRegister tipo={tipo} modalidad={modalidad} setRender={setRender} country={country} setCountry={setCountry} setProvince={setProvince} province={province}/>}
                {render === 5 && <VerificationMessage setRender={setRender}/>}
                {render === 6 && <FormRegister setRender={setRender} tipo={tipo} modalidad={"¿Dónde vives?"} info={`Esta información será pública en tu ${"\n"} perfil como cuidador/a`}/>}
                {render === 7 && <SelectSpice multiple={true} title="¿Qué mascotas quieres cuidar?" text={`Selecciona una o varias mascotas ${"\n"} que puedes cuidar.`}/>}
            </View>
        </ScrollView>
    );
}
 
export default RegisterProfessional;