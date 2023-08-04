import { ScrollView, View } from "react-native";
import SelectProfessionalArea from "../SelectProfessionalArea";
import { useEffect, useState } from "react";
import Politics from "./Politics";
import RecordMode from "./RecordMode";
import FormRegister from "./FormRegister";
import { useProfesional } from "../../../CustomHooks/useProfesional";
import VerificationMessage from "./VerifyMessaje";
import SelectSpice from "../Veterinary/SelectSpice";
import AddPicture from "./AddPicture";
import BirthDay from "./BirthDay";
import TwoOptions from "./TwoOptions";
import Description from "./Description";
import AccountAccepted from "./AccountAccepted";
import { CreateProfessionalMethod, EditProfessionalMethod, GetDataAllProfessional } from "../../../metodos/professionalMetodos";
import { useDispatch } from "react-redux";
import { setAllProfessionals, setErrorProfessional, setLoadingProffesional } from "../../../Redux/ReducerProffesional";

const RegisterProfessional = ({route}) => {
    const {register, profile,  professionals } = route.params;
    const [render, setRender] = useState(1);
    const {tipo, setTipo, modalidad, setModalidad, setNombre, nombre, apellido, setApellido, country, setCountry, province, setProvince, city, setCity, address, setAddress, phone, setPhone, email, setEmail, documento, setDocumento, fotoDoc, setFo, mascotasCuidar, setMascotaCuidar, fechaNacimiento, setFechaNacimiento, description, setDescription, lugarAtencion, setLugarAtencion, onSubmit
    } = useProfesional();
    const dispatch = useDispatch();
    
    const registerProfessional = async (profileId) => {
        //ya este usurio tiene perfil de profeional?
        //si ya tiene pasa a editar, si no tiene va a crear.
        const professional = {
            tipo, modalidad, 
            name: nombre ? nombre : profile.firstName, apellido: apellido ? apellido : profile.lastName, 
            country:country ? country : profile.country, city:city ? city : " ", province:province ? province : profile.province, lugarAtencion, address, 
            phone:phone ? phone : profile.phone, email:email ? email : profile.email, 
            documento, profilePic:fotoDoc, fotoDoc, 
            mascotasCuidar, fechaNacimiento, description
        }
        let verify = verifyRegister(profileId);
        console.log("se ejecuto", verify)
        if(verify) {
            console.log("Ya tienes perfil de profesional")
            /* await EditProfessionalMethod({
                professional,
                loading: (v) => {console.log(v)},
                error: (msg) => {console.log(msg)},
                success: (res) => {console.log(res)}
            }) */
        } else {
            CreateProfessionalMethod({
                professional, 
                loading: (v) => {console.log(v)},
                error: (msg) => {console.log(msg)},
                success: (res) => {console.log(res)}
            });
        }
        await GetDataAllProfessional({
            loading: (v) => dispatch(setLoadingProffesional(v)),
            error: (msg) => dispatch(setErrorProfessional(msg)),
            success: (res) => {dispatch(setAllProfessionals(res.payload))}
          });
    }

    const verifyRegister = (profileId) => {
        for (const professional of professionals) {
            if(profileId === professional.user) {
                return  true
            }
        }
    }

    return (
        <ScrollView className="bg-white">
            <View className="h-full">
                {render === 1 && <SelectProfessionalArea professionals={professionals} profileId={profile?.id} tipo={tipo} title={"Selecciona una especie"} setTipo={setTipo} register={register} text={`Selecciona un área${"\n"}profesional`} setRender={setRender} render={render}/>}
                {render === 2 && <Politics tipo={tipo} setRender={setRender} render={render}/>}
                {/* Veterinarios clinicas/autonomos */}
                {render === 3 && <RecordMode setModalidad={setModalidad} setRender={setRender}/>}
                {render === 4 && <FormRegister profile={profile} registerProfessional={registerProfessional} fotoDoc={fotoDoc} nombre={nombre} apellido={apellido} country={country} province={province} city={city} address={address} documento={documento} phone={phone} email={email} setFo={setFo} setAddress={setAddress} setDocumento={setDocumento} setEmail={setEmail} setPhone={setPhone} setApellido={setApellido} setCity={setCity} setNombre={setNombre} tipo={tipo} setRender={setRender} setCountry={setCountry} setProvince={setProvince} modalidad={modalidad}/>}
                {render === 5 && <VerificationMessage setRender={setRender}/>}
                {/* Cuidadores */}
                {render === 6 && <FormRegister  profile={profile} country={country} city={city} province={province} render={render} setCountry={setCountry} setCity={setCity} setProvince={setProvince} setRender={setRender} tipo={tipo} modalidad={"¿Dónde vives?"} info={`Esta información será pública en tu ${"\n"} perfil como cuidador/a`}/>}
                {render === 7 && <SelectSpice multiple={true} lugarAtencion={lugarAtencion} setCity={setCity} setCountry={setCountry} setProvince={setProvince} tipo={tipo} setRender={setRender} setMascotaCuidar={setMascotaCuidar} title="¿Qué mascotas quieres cuidar?" text={`Selecciona una o varias mascotas ${"\n"} que puedes cuidar.`} />}
                {render === 8 && <AddPicture profile={profile} tipo={tipo} fotoDoc={fotoDoc} setFo={setFo} setRender={setRender}/>}
                {render === 9 && <BirthDay fechaNacimiento={fechaNacimiento} tipo={tipo} setFechaNacimiento={setFechaNacimiento} setRender={setRender}/>}
                {render === 10 && <TwoOptions setLugarAtencion={setLugarAtencion} op1={"Cuido mascotas a domicilio"} op2={"Cuido mascotas en mi casa"} tipo={tipo} setRender={setRender} title={"Selecciona una o varias opciones"}/>}
                {render === 11 && <Description id={profile?.id} description={description} tipo={tipo} setDescription={setDescription} setRender={setRender} registerProfessional={registerProfessional}/>}
                {/* Peluquero */}
                {render === 12 && <TwoOptions setLugarAtencion={setLugarAtencion} render={render} op1={"Lo hago en un centro"} op2={"Lo hago a domicilio"} tipo={tipo} setRender={setRender} title={"¿Dónde das tus servicios de peluquería?"} text={"Selecciona una o varias opciones"}/>}
                {render === 13 && <FormRegister  profile={profile} render={render} lugarAtencion={lugarAtencion} setLugarAtencion={setLugarAtencion} setRender={setRender} tipo={tipo} setCountry={setCountry} country={country} province={province} city={city} setProvince={setProvince} setCity={setCity} modalidad={`¿Dónde esta la dirección de tu ${"\n"} centro de peluquería?`} info={`Esta información será pública en tu ${"\n"} perfil como peluquero/a`}/>}
                {render === 14 && <TwoOptions setCountry={setCountry} setProvince={setProvince} setCity={setCity} lugarAtencion={lugarAtencion} setLugarAtencion={setLugarAtencion} render={render} setRender={setRender} op1={"Si, en toda la provincia"} op2={"No, solo en un localidad en concreto"} tipo={tipo} text={`Esta información será pública en tu ${"\n"} perfil como peluquero/a`} title={`¿En tus servicios a domicilio te ${"\n"} puedes desplazar por toda tu provincia?`}/>}
                {render === 15 && <FormRegister  profile={profile} setRender={setRender} setCountry={setCountry} country={country} province={province} setProvince={setProvince} lugarAtencion={lugarAtencion} setLugarAtencion={setLugarAtencion} render={render} tipo={tipo} modalidad={`¿Dónde das servicios de ${"\n"} peluquería a domicilio?`} info={`Esta información será pública en tu ${"\n"} perfil como peluquero/a`}/>}
                {render === 16 && <FormRegister city={city}  profile={profile} setCity={setCity} setRender={setRender} setCountry={setCountry} country={country} province={province} setProvince={setProvince} lugarAtencion={lugarAtencion} setLugarAtencion={setLugarAtencion} render={render} tipo={tipo}  modalidad={`¿Dónde das servicios de ${"\n"} peluquería a domicilio?`} info={`Esta información será pública en tu ${"\n"} perfil como peluquero/a`} />}
                {render === 17 && <SelectSpice setCity={setCity} setCountry={setCountry} setProvince={setProvince} tipo={tipo} setRender={setRender} setMascotaCuidar={setMascotaCuidar} text={`Selecciona una o varias mascotas ${"\n"} que puedes cuidar.`} title={`¿Que mascotas aceptas en tus ${"\n"} servicios?`} multiple={true} lugarAtencion={lugarAtencion}/>}
                {render === 21 && <AccountAccepted tipo={tipo} profile={profile}/>}
                {/* Educadores */}
                {render === 22 && <TwoOptions setLugarAtencion={setLugarAtencion} setRender={setRender} render={render} op1={"Solo en mi localidad"} op2={"En toda mi provincia"} tipo={tipo} text={`Selecciona una de las opciones`} title={`¿Dónde das tus servicios como ${"\n"} paseador/a?`}/>}
                {render === 23 && <FormRegister  profile={profile} setRender={setRender} setCity={setCity} setCountry={setCountry} setProvince={setProvince} tipo={tipo} country={country} city={city} province={province} info={`Esta información será pública en tu ${"\n"} perfil como peluquero/a`} modalidad={`¿Cuál es la ubicación de tu ${"\n"} localidad?`} />}
                {/* Paseadores */}
                {render === 24 && <FormRegister  profile={profile} tipo={tipo} setRender={setRender} country={country} city={city} province={province} setCountry={setCountry} setCity={setCity} setProvince={setProvince} info={`Esta información será pública en tu ${"\n"} perfil como peluquero/a`} modalidad={`¿Donde das tus servicios como ${"\n"} educador/a?`}/>}
            </View>
        </ScrollView>
    );
}
 
export default RegisterProfessional;