import { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import Btn from "../../Buttons/ButtonCuston";
import countrys from "../../../../extras/countrys.json";
import { SelectList } from "react-native-dropdown-select-list";
import cruz from '../../../../images/iconos/cruz.png';
import { useImage } from "../../../CustomHooks/useImage";


const FormRegister = ({render, modalidad, country, setCountry, setProvince, setRender, tipo, info, setNombre, setCity, setApellido, setPhone, setEmail, setDocumento, setAddress, setFo, setLugarAtencion, lugarAtencion, province, city}) => {
    console.log(render)
    
    const [countryOptions, setCountryOptions] = useState([]);
    const [provinceOptions, setProvinceOptions] = useState([]);
    const [currentProvinces, setCurrentProvinces] = useState([]);
    const {url, setUrl, uploadImage} = useImage();
    
    useEffect(() => {
        const countries = countrys.map((country) => country.name);
        setCountryOptions(countries);
        console.log(countryOptions)
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
            setRender(5)
        } else if (tipo === "Cuidador") {
           setRender(7)
        } else if (tipo === "Peluquero") {
            if(render === 13) {
                const firstObject = lugarAtencion[0];
                const updateObjet = {
                    ...firstObject,
                    addressOp1: {country, province, city}
                }
                setLugarAtencion([updateObjet])
                lugarAtencion[0].lugar.op2 === "" ? setRender(17) : setRender(14)
            } else if(render === 15 || render === 16) {
                const firstObject = lugarAtencion[0];
                const updateObjet = {
                    ...firstObject,
                    addressOp2: {country, province}
                }
                setLugarAtencion([updateObjet])
                setRender(17)
            }
        }
    };

    const dissableBtn = () => {
        if(tipo === "Veterinario") {
            return true
        } else if(render === 13) {
            if(country==="" || province==="" || city==="") {
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
        } else if (render === 16) {
            if(country==="" || province==="" || city==="") {
                return false
            } else {
                return true
            }
        }
    }

    const Label =  (title,set, value, text) => (<Text className="font-semibold text-base left-4 mt-5">{title} {set === value ? text : null}</Text>);
    const Input = (getValue) => (
    <TextInput
        onChangeText={(text)=>getValue(text)}
        className="w-full shadow-lg shadow-black h-10 pl-3 rounded-lg bg-new"/>
    );

    return (
        <View className="h-full w-screen items-center pt-10">
            <Text className={`text-2xl font-bold my-5 text-center`}>{modalidad}</Text>
            <Text className="text-center font-semibold text-base">{info}</Text>
            <View className="w-10/12">
                {tipo === "Veterinario" && Label("Nombre ", modalidad, "Clínica Veterinaria", "de la clínica")}
                {tipo === "Veterinario" && Input(setNombre)}
                { modalidad === "Veterinario Autónomo" && <>{Label("Apellidos")}{Input(setApellido)}</> }
                {Label("País")}
                <SelectList
                    data={countryOptions}
                    setSelected={setCountry}
                    placeholder="Seleccionar"
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
                {render != 15 && Input(setCity)}
                {tipo === "Veterinario" && modalidad === "Clínica Veterinaria" ? <>{Label("Calle y número")}{Input(setAddress)}</> : null}
                {tipo === "Veterinario" && modalidad === "Clínica Veterinaria" ? <>{Label("CIF / Num Identificación Fiscal")}{Input(setDocumento)}</> : null}
                {tipo === "Veterinario" && Label("Teléfono")}
                {tipo === "Veterinario" && Input(setPhone)}
                {tipo === "Veterinario" && Label("Email")}
                {tipo === "Veterinario" && Input(setEmail)}
                {modalidad === "Veterinario Autónomo" ? <>{Label("Selecciona documento de identidad")}{Input(setDocumento)}</> : null}
                {modalidad === "Veterinario Autónomo" ? 
                <>{Label("Adjunta imagen de el documento")}
                <TouchableOpacity className="flex justify-center items-center w-full h-32 bg-new rounded-lg" onPress={() => uploadImage()}>
                    <Image source={url ? {uri: url} : cruz} style={url ? { width: 160, height: 160 } : {width: 50, height: 50 }} className="rounded-full" />
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