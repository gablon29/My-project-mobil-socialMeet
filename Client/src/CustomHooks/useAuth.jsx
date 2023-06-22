import react, { useState } from "react";
import axios from "axios"
import { login, registro } from "../Components/metodos/authMetodos";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from "react-redux";
import { authSetUser } from "../Redux/ReducerAuth";

export const useAuth = () =>{
const dispatch = useDispatch()
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [checkPassword, setCheckPassword] = useState("")

const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [phone, setPhone] = useState("")
const [country, setCountry] = useState("")
const [province, setProvince] = useState("")
const [city, setCity] = useState("")
const [zipcode, setZipcode] = useState("")
const [address, setAddress] = useState("")
const [confirmEmail, setConfirmEmail] = useState("")
const [checkSms, setCheckSms] = useState("")


const handleRegister = async () => {
  try{
   let response = await registro(email,
      password,
      firstName,
      lastName,
      phone,
      country,
      province,
      city,
      zipcode,
      address)
      console.log(response)
     await AsyncStorage.setItem('Token', response.token);
     dispatch(authSetUser(response))
     const value = await AsyncStorage.getItem('Token');
      console.log(value)
    }
  catch(error){
    console.log(error)
  }
  };


  const handleLogin = async() => {
    try{
      let response = await login(email, password,)
        await AsyncStorage.setItem('Token', response.token);
        dispatch(authSetUser(response))
        const value = await AsyncStorage.getItem('Token');
        console.log("okey")

       }
     catch(error){
       console.log(error)
     }
  };

  function verifyNumber() {
    const url = 'https://api.nexmo.com/verify/json';
  
    const params = {
      api_key: "e928e3ae",
      api_secret: "qHZCaWoEnu1QGh98",
      number: phone,
      brand: "Whopaws"
    };
  
    return axios.get(url, { params })
      .then(response => {
        // Manejar la respuesta de la API
        console.log(response);
        setCheckSms(response.data)
      })
      .catch(error => {
        // Manejar errores de la solicitud
        console.log(error);
      });
  }
  

return{
    email, 
    setEmail, 
    password, 
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phone,
    setPhone,
    country,
    setCountry,
    province,
    setProvince,
    city,
    setCity,
    zipcode,
    setZipcode,
    address,
    handleLogin,
    setAddress,
    handleRegister, confirmEmail, setConfirmEmail,
    verifyNumber,
    checkSms, setCheckSms,
    checkPassword, setCheckPassword
    
}

}