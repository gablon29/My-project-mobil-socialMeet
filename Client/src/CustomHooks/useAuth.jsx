import react from "react";

export const useAuth = () =>{

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [phone, setPhone] = useState("")
const [country, setCountry] = useState("")
const [province, setProvince] = useState("")
const [city, setCity] = useState("")
const [zipcode, setZipcode] = useState("")
const [address, setAddress] = useState("")

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
    setAddress
}

}