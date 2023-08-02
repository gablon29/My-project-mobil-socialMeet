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
import AddPicture from "./AddPicture";
import BirthDay from "./BirthDay";
import TwoOptions from "./TwoOptions";
import Description from "./Description";
import AccountAccepted from "./AccountAccepted";


const RegisterProfessional = ({route}) => {
    const {register, text} = route.params;
    const [render, setRender] = useState(1);
    const {tipo, setTipo, modalidad, setModalidad, setNombre, nombre, apellido, setApellido, country, setCountry, province, setProvince, city, setCity, address, setAddress, phone, setPhone, email, setEmail, documento, setDocumento, fotoDoc, setFo, mascotasCuidar, setMascotaCuidar, fechaNacimiento, setFechaNacimiento, modalidadNoVet, setModalidadNoVet, description, setDescription, onSubmit
    } = useProfesional();

    return (
        <ScrollView className="bg-white">
            <View className="h-full">
                {render === 1 && <SelectProfessionalArea tipo={tipo} title={"Selecciona una especie"} setTipo={setTipo} register={register} text={text} setRender={setRender} render={render}/>}
                {render === 2 && <Politics tipo={tipo} setRender={setRender} render={render}/>}
                {render === 3 && <RecordMode setModalidad={setModalidad} setRender={setRender}/>}
                {render === 4 && <FormRegister setFo={setFo} setAddress={setAddress} setDocumento={setDocumento} setEmail={setEmail} setPhone={setPhone} setApellido={setApellido} setCity={setCity} setNombre={setNombre} tipo={tipo} modalidad={modalidad} setRender={setRender} country={country} setCountry={setCountry} setProvince={setProvince} province={province}/>}
                {render === 5 && <VerificationMessage setRender={setRender}/>}
                {render === 6 && <FormRegister setCountry={setCountry} setCity={setCity} setProvince={setProvince} setRender={setRender} tipo={tipo} modalidad={"¿Dónde vives?"} info={`Esta información será pública en tu ${"\n"} perfil como cuidador/a`}/>}
                {render === 7 && <SelectSpice setMascotaCuidar={setMascotaCuidar} multiple={true} title="¿Qué mascotas quieres cuidar?" text={`Selecciona una o varias mascotas ${"\n"} que puedes cuidar.`} setRender={setRender}/>}
                {render === 8 && <AddPicture setFo={setFo} setRender={setRender}/>}
                {render === 9 && <BirthDay setFechaNacimiento={setFechaNacimiento} setRender={setRender}/>}
                {render === 10  && <TwoOptions op1={"Cuido mascotas a domicilio"} op2={"Cuido mascotas a domicilio"} tipo={tipo} setRender={setRender} title={"Selecciona una o varias opciones"}/>}
                {render === 11 && <Description setDescription={setDescription} setRender={setRender}/>}
                {render === 12 && <TwoOptions setModalidadNoVet={setModalidadNoVet} op1={"Lo hago en un centro"} op2={"Lo hago a domicilio"} tipo={tipo} setRender={setRender} title={"¿Dónde das tus servicios de peluquería?"} text={"Selecciona una o varias opciones"}/>}
                {render === 13 && <FormRegister setRender={setRender} tipo={tipo} setCountry={setCountry} setProvince={setProvince} setCity={setCity} modalidadNoVet={modalidadNoVet} modalidad={`¿Dónde esta la dirección de tu ${"\n"} centro de peluquería?`} info={`Esta información será pública en tu ${"\n"} perfil como peluquero/a`}/>}
                {render === 14 && <TwoOptions setRender={setRender} modalidadNoVet={modalidadNoVet} op1={"Si, en toda la provincia"} op2={"No, solo en un localidad en concreto"} tipo={tipo} text={`Esta información será pública en tu ${"\n"} perfil como peluquero/a`} title={`¿En tus servicios a domicilio te ${"\n"} puedes desplazar por toda tu provincia?`}/>}
                {render === 15 && <AccountAccepted tipo={tipo}/>}
            </View>
        </ScrollView>
    );
}
 
export default RegisterProfessional;