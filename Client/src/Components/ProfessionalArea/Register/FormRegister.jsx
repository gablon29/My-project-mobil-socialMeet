import { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import Btn from "../../Buttons/ButtonCuston";
import countrys from "../../../../extras/countrys.json";
import { SelectList } from "react-native-dropdown-select-list";
import cruz from '../../../../images/iconos/cruz.png';
import { useImage } from "../../../CustomHooks/useImage";


const FormRegister = ({ id, data, registerProfessional, render, nombre, apellido, address, documento, phone, email, fotoDoc, modalidad, country, setCountry, setProvince, setRender, tipo, info, setNombre, setCity, setApellido, setPhone, setEmail, setDocumento, setAddress, setFo, setLugarAtencion, lugarAtencion, province, city}) => {
    const [countryOptions, setCountryOptions] = useState([]);
    const [provinceOptions, setProvinceOptions] = useState([]);
    const [currentProvinces, setCurrentProvinces] = useState([]);
    const {url, setUrl, uploadImage} = useImage();
    useEffect(() => {
        const countries = countrys.map((country) => country.name);
        setCountryOptions(countries);
        setCity(data?.city || "")
        setNombre(data?.name || data?.firstName)
        setPhone(data?.phone)
      }, []);
      
    useEffect(() => {
        if (country) {
          const selectedCountry = countrys.find((c) => c.name === country);
          if (selectedCountry) {
            const provinces = selectedCountry.provinces;
            setProvinceOptions(provinces);
            setCurrentProvinces(provinces);
          }
        }
    }, [country]);

    const nextStep = () => {
        if (tipo === "Veterinario") {
            registerProfessional(id)
            setRender(5);
        } else if (tipo === "Cuidador") {
           setRender(7)
        } else if (tipo === "Peluquero") {
            const firstObject = lugarAtencion[0];
            if(render === 13) {
                const updateObjet = {
                    ...firstObject,
                    addressOp1: {country, province, city}
                }
                setLugarAtencion([updateObjet])
                lugarAtencion[0].lugar.op2 === "" ? setRender(17) : setRender(14)
            } else if(render === 15) {
                const updateObjet = {
                    ...firstObject,
                    addressOp2: {country, province}
                }
                setLugarAtencion([updateObjet])
                setRender(17)
            } if (render === 16) {
                const updateObjet = {
                    ...firstObject,
                    addressOp2: {country, province, city}
                }
                setLugarAtencion([updateObjet])
                setRender(17)
            }
        } else {
            setRender(8)
        }
    };
    console.log({nombre, apellido, country, province, city, documento, phone, email, fotoDoc})
    const dissableBtn = () => {
        if(tipo === "Veterinario") {
            if(modalidad === "clinica") {
                if(nombre==="" || country==="" || province==="" || address==="" || city==="" || documento==="" || phone==="" || email==="" ) {
                    return false
                } else {
                    return true
                }
            } else if(modalidad === "autonomo") {
                setFo(url)
                if(nombre==="" || apellido==="" || country==="" || province==="" || city==="" || documento==="" || phone==="" || email==="" || fotoDoc==="" ) {
                    return false
                } else {
                    return true
                }
            }
        } else if( tipo === "Peluquero") {
            if(render === 13 || render === 16) {
                if(country==="" || province==="" || city=== "") {
                    return false
                } else {
                    return true
                }
            } else if(render === 15) {
                if(country==="" || province==="") {
                    return false
                } else {
                    return true
                }
            }
        } else {
                if(country==="" || province==="" || city=== "") {
                    return false
                } else {
                    return true
                }
        }
    };

    const Label =  (title,set, value, text) => (<Text className="font-semibold text-base left-4 mt-5">{title} {set === value ? text : null}</Text>);
    const Input = (getValue, defaultValue) => (
    <TextInput
        onChangeText={(text)=>getValue(text)}
        className="w-full shadow-lg shadow-black h-10 pl-3 rounded-lg bg-new"
        placeholder="Requerido"
        placeholderTextColor={"red"}
        defaultValue={modalidad != "clinica" || modalidad === undefined ? defaultValue : " "}
        />
    );

    const renderTitle = () => {
        if(tipo === "Veterinario") {
            if(modalidad === "clinica") {return "Clínica Veterinaria"} 
            else {return "Veterinario Autónomo"}
        } else {return modalidad}
    }

    return (
        <View className="h-full w-screen items-center pt-10">
            <Text className={`text-2xl font-bold my-5 text-center`}>{renderTitle()}</Text>
            <Text className="text-center font-semibold text-base">{info}</Text>
            <View className="w-10/12">
                {tipo === "Veterinario" && Label("Nombre ", modalidad, "Clínica Veterinaria", "de la clínica")}
                {tipo === "Veterinario" && Input(setNombre, data?.firstName || data?.name)}
                { modalidad === "autonomo" && <>{Label("Apellidos")}{Input(setApellido, data?.lastName)}</> }
                {Label("País")}
                <SelectList
                    data={countryOptions}
                    setSelected={setCountry}
                    placeholder="Seleccionar"
                    defaultOption={{key: data?.country, value: data?.country}}
                    search={false}
                    boxStyles={{
                    backgroundColor: '#FEC89A',
                    borderRadius: 10,
                    borderColor: '#FEC89A',
                    width: '100%'
                    }}
                    inputStyles={{
                    fontSize: 12,
                    fontFamily:"Poppins"
                    }}
                    dropdownStyles={{
                    backgroundColor: '#FEC89A',
                    }}
                />
                {Label("Provincia")}
                <SelectList
                    data={provinceOptions}
                    setSelected={setProvince}
                    placeholder="Seleccionar"
                    defaultOption={country === data?.country ? {key: data?.province, value: data?.province} : {key: currentProvinces[0], value: currentProvinces[0]} }
                    search={false}
                    boxStyles={{
                    backgroundColor: '#FEC89A',
                    borderRadius: 10,
                    borderColor: '#FEC89A',
                    fontFamily:"Poppins",
                    width: '100%'
                    }}
                    inputStyles={{
                    fontSize: 12
                    }}
                    dropdownStyles={{ backgroundColor: '#FEC89A' }}
                />
                {render != 15 && Label("Localidad")}
                {render != 15 && Input(setCity, data?.city)}
                {tipo === "Veterinario" && modalidad === "clinica" ? <>{Label("Calle y número")}{Input(setAddress, data?.address)}</> : null}
                {tipo === "Veterinario" && modalidad === "clinica" ? <>{Label("CIF / Num Identificación Fiscal")}{Input(setDocumento, data?.documento)}</> : null}
                {tipo === "Veterinario" && Label("Teléfono")}
                {tipo === "Veterinario" && Input(setPhone, data?.phone)}
                {tipo === "Veterinario" && Label("Email")}
                {tipo === "Veterinario" && Input(setEmail, data?.email)}
                {modalidad === "autonomo" ? <>{Label("Selecciona documento de identidad")}{Input(setDocumento)}</> : null}
                {modalidad === "autonomo" ? 
                <>{Label("Adjunta imagen de el documento")}
                <TouchableOpacity className="flex justify-center items-center w-full h-32 bg-new rounded-lg" onPress={() => {uploadImage()}}>
                    <Image source={url ? {uri: url} : cruz} style={url ? "" : {width: 50, height: 50 }} className="w-full h-full" />
                </TouchableOpacity>
                </> 
                : null}
            </View>
                <Btn 
                    title={"Siguiente"}
                    titleClass={"text-naranja font-bold text-base"}
                    buttonClass={"my-10 bg-white border-2 border-naranja w-64 h-14 rounded-2xl items-center justify-center"}
                    onPress={()=>nextStep()}
                    dissable={dissableBtn()}
                />
        </View>
    );
}
 
export default FormRegister;