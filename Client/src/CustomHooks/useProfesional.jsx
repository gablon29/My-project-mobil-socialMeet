import react, { useState } from "react";

export const useProfesional = () => {

const [tipo, setTipo] = useState("") // educador, veterinario, tienda, cuidador, paseador, peluquero
const [modalidad, setModalidad] = useState("") //clinica autonomo 
const [nombre, setNombre] = useState("") 
const [country, setCountry] = useState('');
const [province, setProvince] = useState('');
const [city, setCity] = useState('');
const [address, setAddress] = useState('');
const [phone, setPhone] = useState('');
const [documento, setDocumento] = useState("")
const [fotoDoc, setFo] = useState("") //para documento o para perfil si es el caso
const [mascotasCuidar, setMascotaCuidar] = useState([]) //array de string con nombre de mascotas
const [fechaNacimiento, setFechaNacimiento] = useState("")
const [modalidadNoVet, setModalidadNoVet] = useState([])
const [description, setDescription] = useState("")


const onSubmit = () => {
console.log("Agregar funcion al back")
}
return{
    tipo, setTipo, modalidad, setModalidad, setNombre, nombre, country, setCountry,
    province, setProvince, city, setCity, address, setAddress, phone, setPhone, documento, setDocumento, 
    fotoDoc, setFo, mascotasCuidar, setMascotaCuidar, fechaNacimiento, setFechaNacimiento, 
    modalidadNoVet, setModalidadNoVet,
    description, setDescription, onSubmit
}
}

// const {
//     tipo, setTipo, modalidad, setModalidad, setNombre, nombre, country, setCountry,
//     province, setProvince, city, setCity, address, setAddress, phone, setPhone, documento, setDocumento, 
//     fotoDoc, setFo, mascotasCuidar, setMascotaCuidar, fechaNacimiento, setFechaNacimiento, 
//     modalidadNoVet, setModalidadNoVet,
//     description, setDescription, onSubmit
// } = useProfesional()

