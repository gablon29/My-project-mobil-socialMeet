import { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import Btn from "../../Buttons/ButtonCuston";
import countrys from "../../../../extras/countrys.json";
import { SelectList } from "react-native-dropdown-select-list";
import cruz from '../../../../images/iconos/cruz.png';
import { useImage } from "../../../CustomHooks/useImage";


const FormRegister = ({modalidad, country, setCountry, setProvince, setRender, tipo, info}) => {

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
        } else {
           setRender(7)
        }
    };

    const Label =  (title,set, value, text) => (<Text className="font-semibold text-base left-4 mt-5">{title} {set === value ? text : null}</Text>);
    const Input = () => (<TextInput className="w-full shadow-lg shadow-black h-10 pl-3 rounded-lg bg-new"/>);

    return (
        <View className="h-full w-screen items-center pt-10">
            <Text className={`text-2xl font-bold my-5`}>{modalidad}</Text>
            <Text className="text-center font-semibold text-base">{info}</Text>
            <View className="w-10/12">
                {tipo === "Veterinario" && Label("Nombre ", modalidad, "Clínica Veterinaria", "de la clínica")}
                {tipo === "Veterinario" && Input()}
                { modalidad === "Veterinario Autónomo" && <>{Label("Apellidos")}{Input()}</> }
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
                {Label("Localidad")}
                {Input()}
                {tipo === "Veterinario" && modalidad === "Clínica Veterinaria" ? <>{Label("Calle y número")}{Input()}</> : null}
                {tipo === "Veterinario" && modalidad === "Clínica Veterinaria" ? <>{Label("CIF / Num Identificación Fiscal")}{Input()}</> : null}
                {tipo === "Veterinario" && Label("Teléfono")}
                {tipo === "Veterinario" && Input()}
                {tipo === "Veterinario" && Label("Email")}
                {tipo === "Veterinario" && Input()}
                {modalidad === "Veterinario Autónomo" ? <>{Label("Selecciona documento de identidad")}{Input()}</> : null}
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
                />
        </View>
    );
}
 
export default FormRegister;