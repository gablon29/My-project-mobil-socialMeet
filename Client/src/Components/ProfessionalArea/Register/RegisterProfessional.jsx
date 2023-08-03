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
    const {tipo, setTipo, modalidad, setModalidad, setNombre, nombre, apellido, setApellido, country, setCountry, province, setProvince, city, setCity, address, setAddress, phone, setPhone, email, setEmail, documento, setDocumento, fotoDoc, setFo, mascotasCuidar, setMascotaCuidar, fechaNacimiento, setFechaNacimiento, modalidadNoVet, setModalidadNoVet, description, setDescription, lugarAtencion, setLugarAtencion, onSubmit
    } = useProfesional();

    return (
        <ScrollView className="bg-white">
            <View className="h-full">
                {render === 1 && <SelectProfessionalArea tipo={tipo} title={"Selecciona una especie"} setTipo={setTipo} register={register} text={text} setRender={setRender} render={render}/>}
                {render === 2 && <Politics tipo={tipo} setRender={setRender} render={render}/>}
                {/* Veterinarios clinicas/autonomos */}
                {render === 3 && <RecordMode setModalidad={setModalidad} setRender={setRender}/>}
                {render === 4 && <FormRegister fotoDoc={fotoDoc} nombre={nombre} apellido={apellido} country={country} province={province} city={city} address={address} documento={documento} phone={phone} email={email} setFo={setFo} setAddress={setAddress} setDocumento={setDocumento} setEmail={setEmail} setPhone={setPhone} setApellido={setApellido} setCity={setCity} setNombre={setNombre} tipo={tipo} modalidad={modalidad} setRender={setRender} setCountry={setCountry} setProvince={setProvince}/>}
                {render === 5 && <VerificationMessage setRender={setRender}/>}
                {/* Cuidadores */}
                {render === 6 && <FormRegister country={country} city={city} province={province} render={render} setCountry={setCountry} setCity={setCity} setProvince={setProvince} setRender={setRender} tipo={tipo} modalidad={"¿Dónde vives?"} info={`Esta información será pública en tu ${"\n"} perfil como cuidador/a`}/>}
                {render === 7 && <SelectSpice tipo={tipo} setMascotaCuidar={setMascotaCuidar} multiple={true} title="¿Qué mascotas quieres cuidar?" text={`Selecciona una o varias mascotas ${"\n"} que puedes cuidar.`} setRender={setRender}/>}
                {render === 8 && <AddPicture tipo={tipo} fotoDoc={fotoDoc} setFo={setFo} setRender={setRender}/>}
                {render === 9 && <BirthDay fechaNacimiento={fechaNacimiento} tipo={tipo} setFechaNacimiento={setFechaNacimiento} setRender={setRender}/>}
                {render === 10 && <TwoOptions setLugarAtencion={setLugarAtencion} op1={"Cuido mascotas a domicilio"} op2={"Cuido mascotas en mi casa"} tipo={tipo} setRender={setRender} title={"Selecciona una o varias opciones"}/>}
                {render === 11 && <Description description={description} tipo={tipo} setDescription={setDescription} setRender={setRender}/>}
                {/* Peluquero */}
                {render === 12 && <TwoOptions setLugarAtencion={setLugarAtencion} render={render} op1={"Lo hago en un centro"} op2={"Lo hago a domicilio"} tipo={tipo} setRender={setRender} title={"¿Dónde das tus servicios de peluquería?"} text={"Selecciona una o varias opciones"}/>}
                {render === 13 && <FormRegister render={render} lugarAtencion={lugarAtencion} setLugarAtencion={setLugarAtencion} setRender={setRender} tipo={tipo} setCountry={setCountry} country={country} province={province} city={city} setProvince={setProvince} setCity={setCity} modalidadNoVet={modalidadNoVet} modalidad={`¿Dónde esta la dirección de tu ${"\n"} centro de peluquería?`} info={`Esta información será pública en tu ${"\n"} perfil como peluquero/a`}/>}
                {render === 14 && <TwoOptions setCountry={setCountry} setProvince={setProvince} setCity={setCity} lugarAtencion={lugarAtencion} setLugarAtencion={setLugarAtencion} render={render} setModalidadNoVet={setModalidadNoVet} setRender={setRender} modalidadNoVet={modalidadNoVet} op1={"Si, en toda la provincia"} op2={"No, solo en un localidad en concreto"} tipo={tipo} text={`Esta información será pública en tu ${"\n"} perfil como peluquero/a`} title={`¿En tus servicios a domicilio te ${"\n"} puedes desplazar por toda tu provincia?`}/>}
                {render === 15 && <FormRegister setRender={setRender} setCountry={setCountry} country={country} province={province} setProvince={setProvince} lugarAtencion={lugarAtencion} setLugarAtencion={setLugarAtencion} render={render} tipo={tipo} modalidad={`¿Dónde das servicios de ${"\n"} peluquería a domicilio?`} info={`Esta información será pública en tu ${"\n"} perfil como peluquero/a`}/>}
                {render === 16 && <FormRegister setCity={setCity} setRender={setRender} setCountry={setCountry} country={country} province={province} setProvince={setProvince} lugarAtencion={lugarAtencion} setLugarAtencion={setLugarAtencion} render={render} tipo={tipo}  modalidad={`¿Dónde das servicios de ${"\n"} peluquería a domicilio?`} info={`Esta información será pública en tu ${"\n"} perfil como peluquero/a`} />}
                {render === 17 && <SelectSpice tipo={tipo} setRender={setRender} setMascotaCuidar={setMascotaCuidar} text={`Selecciona una o varias mascotas ${"\n"} que puedes cuidar.`} title={`¿Que mascotas aceptas en tus ${"\n"} servicios?`} multiple={true} lugarAtencion={lugarAtencion}/>}
                {render === 21 && <AccountAccepted nombre={nombre} modalidad={modalidad} tipo={tipo} lugarAtencion={lugarAtencion} mascotasCuidar={mascotasCuidar} fotoDoc={fotoDoc} fechaNacimiento={fechaNacimiento} description={description} country={country} province={province} city={city}/>}
                {/* Educadores */}
                {render === 22 && <TwoOptions setLugarAtencion={setLugarAtencion} setRender={setRender} render={render} op1={"Solo en mi localidad"} op2={"En toda mi provincia"} tipo={tipo} text={`Selecciona una de las opciones`} title={`¿Dónde das tus servicios como ${"\n"} paseador/a?`}/>}
                {render === 23 && <FormRegister setRender={setRender} setCity={setCity} setCountry={setCountry} setProvince={setProvince} tipo={tipo} country={country} city={city} province={province} info={`Esta información será pública en tu ${"\n"} perfil como peluquero/a`} modalidad={`¿Cuál es la ubicación de tu ${"\n"} localidad?`} />}
                {/* Paseadores */}
                {render === 24 && <FormRegister tipo={tipo} setRender={setRender} country={country} city={city} province={province} setCountry={setCountry} setCity={setCity} setProvince={setProvince} info={`Esta información será pública en tu ${"\n"} perfil como peluquero/a`} modalidad={`¿Donde das tus servicios como ${"\n"} educador/a?`}/>}
            </View>
        </ScrollView>
    );
}
 
export default RegisterProfessional;